# Sparse Checkout with Git

The ideal way to to copy a git repository is using git itself. It provides features to
efficiently track and download additions and updates, without requiring custom code to examine
last modified times or forcing a redownload of all files. However, this normally means copying
every file in the repository, including historical versions.

Fortunately, git provides a feature known as a
[sparse checkout](https://git-scm.com/docs/git-sparse-checkout). Combined with other git filtering
features, this can be used to avoid a full download of the repository. You can configure it to only
download and save specific directories or files to your computer. If you are only interested in a
subset of the files provided here, this is the most efficient way to download them and keep them up
to date.

> [!NOTE]
> The instructions provided here will use the git command line. If you use a graphical tool to work
> with git repositories, you will need to determine whether and how it supports the sparse-checkout
> feature.

## Initial Setup

Start by cloning the repository using the following flags/options:

```
git clone --filter=blob:none --no-checkout --depth=1 https://github.com/Fernando2603/AzurLane.git AzurLaneENResources
```

> [!NOTE]
> You are free to use a different directory name than AzurLaneENResources.

Each option has a specific purpose:

  * `--filter=blob:none`: Delays downloading the file's contents until it is actually checked out to
        disk.
  * `--no-checkout`: Causes git to *only* create its special .git folder for managing the commit
        tree. This is essential to prevent git from needing to download all files.
  * `--depth=1` **(optional)**: Only download the most recent commit, omitting the history of
        changes. If you are interested in the history of how the asset files have changed over time,
        omit this option.

See [git-clone](https://git-scm.com/docs/git-clone) for more details.

Its output will look similar to this:

```
Cloning into 'AzurLaneENResources'...
remote: Enumerating objects: 4047, done.
remote: Counting objects: 100% (4047/4047), done.
remote: Compressing objects: 100% (4047/4047), done.
remote: Total 4047 (delta 0), reused 2080 (delta 0), pack-reused 0 (from 0)
Receiving objects: 100% (4047/4047), 1.64 MiB | 3.82 MiB/s, done.
```

(The exact numbers in the output will likely be different.)

Next, configure the repository to use sparse checkout:

```
cd AzurLaneENResources
git sparse-checkout init
```

If you are using git bash from Git for Windows, you will see the branch name change from
`(main)` to `(main|SPARSE)` now.

Now we can check out the repository:

```
git checkout
```

Its output looks similar to this:

```
remote: Enumerating objects: 27, done.
remote: Counting objects: 100% (27/27), done.
remote: Compressing objects: 100% (22/22), done.
remote: Total 27 (delta 13), reused 9 (delta 5), pack-reused 0 (from 0)
Receiving objects: 100% (27/27), 3.66 MiB | 4.23 MiB/s, done.
Resolving deltas: 100% (13/13), done.
Updating files: 100% (31/31), done.
Your branch is up to date with 'origin/main'.
```

By default, a sparse checkout will only save files at the very top directory of the repository. In
this repository, that includes only the top level JSON files and the README.

## Adding locations

To actually download resource files, we need to add locations to the sparse checkout's list. The
`add` command is the main way to do so. For example, if you want to checkout the music files, you
can add the `audio/bgm` directory:

```
git sparse-checkout add audio/bgm
```

This will checkout *only* the files inside the audio/bgm directory. It may take a few minutes.

You can use the command again to add an additional directory:

```
git sparse-checkout add images/equipment
```

> [!NOTE]
> You *cannot* specify a single file. You must use directories:
>
> ```
> $ git sparse-checkout add images/equipment/1.png
> fatal: 'images/equipment/1.png' is not a directory; to treat it as a directory anyway, rerun with --skip-checks
> ```

If you want to see the list of directories you've added, use the `list` command:

```
git sparse-checkout list
```

Output:

```
audio/bgm
images/equipment
```

If you would like images or audio from a specific ship or skin, consult ship_skin.json to locate
the ID number, and then `add` its folder to the sparse checkout. For example, Cassin's retrofit
skin has the ID 101039, so we can add it using:

```
git sparse-checkout add images/skins/101039 audio/voicelines/101039
```

(Notice that this will only check out the voice lines specific to that skin; the base voicelines are
in the default skin's directory.)

## Getting updates

To obtain updates from the repository, you should avoid `git pull` and `git merge`. These will not
respect your sparse checkout settings because they will attempt to perform a merge. Instead, use
`fetch` with `--filter` to obtain new commits:

```
git fetch --filter=blob:none
```

And then check out the newest files using `git reset`:

```
git reset --hard origin/main
```

> [!CAUTION]
> Do not use `reset` if you have made any local changes to the repository's files or commits. It
> will discard any uncommitted local file modifications and set the current branch to the most
> recent remote commit. Resetting the branch's head can result in losing commits that have not
> been pushed or included in another branch. (There are ways to recover such lost commits, but
> it's better to avoid needing to in the first place.)
>
> Use `git merge` instead if you have modified the repository. Even though it downloads more files,
> you will still only be downloading recently added or changed files.

## `set` and Removing Directories

If you use `set`, it will completely replace the existing list of checkout directories:

```
git sparse-checkout set audio/bgm images/skins/101039 audio/voicelines/101039
```

Since this does not include `images/equipment`, it will remove that directory from the list
and delete the directory and files inside it from disk.

Invoking the `list` command will show that it is gone:

```
$ git sparse-checkout list

```

Output:

```
audio/bgm
audio/voicelines/101039
images/skins/101039
```


The following command replaces Cassin retrofit's skin and voicelines with her default skin and
lines:

```
git sparse-checkout set audio/bgm images/skins/101030 audio/voicelines/101030
```

> [!IMPORTANT]
> Using `set` this way is current the only way to remove a directory from sparse-checkout.

If you have a long list of directories, it can be inconvenient to manually build up a complete `set`
command. To save effort, you can use the following bash command to remove that specific directory:

```
git sparse-checkout set $(git sparse-checkout list | grep -v -F 'images/equipment')
```

This command generates the current list using `git sparse-checkout list`, filters out the item
`'images/equipment'` (the `-v` means include items that *do not* match, and the `-F` disables
regular expressions), and then passes the entire list (combined into a single line) to the `set`
command.

You can use `echo` to verify the list before actually running the command:

```
echo $(git sparse-checkout list | grep -v -F 'images/equipment')
```

If you are familiar with bash and the tools provided alongside it, feel free to use
that knowledge.

Last, calling `set` with no parameters will clear the entire list:

```
git sparse-checkout set
```

This will setting the repository back to the initial configuration, removing all files except
the ones at the repository's top directory.

> [!IMPORTANT]
> Removing files from the sparse checkout list *does not* remove their data stored within the
> repository's hidden .git directory. They still take up disk space there. The only way to
> eliminate them from your disk entirely is to start with a fresh repository.

## Starting fresh

If you accidentally cause git to download a lot of files, want to remove a lot of locations, or
think that updates are making it large, feel free to just delete the repository directory
and create a new one. Git is entirely based on file manipulation and stores all its data inside
a hidden directory named `.git`. Since there is no centrally stored data for the repository,
it is completely safe to delete it the normal way for your system.