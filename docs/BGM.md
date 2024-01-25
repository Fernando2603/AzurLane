# BGM

- [Overview](#overview)
- [Data Structure](#data-structure)
- [Fetch](#fetch)


# Overview
The current structure of `bgm.json` is straightforward, containing only 6 keys: `title`, `size`, `duration`, `bitrate`, `sample_rate`, and `link`. The information for `size`, `duration`, `bitrate`, and `sample_rate` is extracted using the `python` `TinyTag` package. Additionally, `bgm_link.json` is provided for those who are only interested in the audio file.

> [!TIP]
> The file itself is extracted using the `ffmpeg` library with the `libvorbis -q:a 5` (ogg) format to achieve a smaller file size compared to other formats, while preserving the sound quality as much as possible from the source.


# Data Structure
```Typescript
type Link = string;

type BackgroundMusic = {
  title: string;
  size: number;
  duration: number; // float64
  bitrate: number; // float64
  sample_rate: number; // float64
  link: Link;
}

// bgm.json
type BackgroundMusicData = {
  [key: string]: BackgroundMusic;
};

// bgm_link.json
type BackgroundMusicLinkData = {
  [key: string]: Link;
};

```


# Fetch
- [bgm.json](https://raw.githubusercontent.com/Fernando2603/AzurLane/main/bgm.json)
```
https://raw.githubusercontent.com/Fernando2603/AzurLane/main/bgm.json
```

- [bgm_link.json](https://raw.githubusercontent.com/Fernando2603/AzurLane/main/bgm_link.json)
```
https://raw.githubusercontent.com/Fernando2603/AzurLane/main/bgm_link.json
```