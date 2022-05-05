const fs = require('node:fs');
const path = require('path');
const skin_path = [
  {
    "old_path": "/images/skins/Collab021/Banner.png",
    "new_path": "/skins/Collab021/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/Collab021/Icon.png",
    "new_path": "/skins/Collab021/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/Collab021/ChibiIcon.png",
    "new_path": "/skins/Collab021/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Collab021/ShipyardIcon.png",
    "new_path": "/skins/Collab021/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Collab022/Banner.png",
    "new_path": "/skins/Collab022/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/Collab022/Icon.png",
    "new_path": "/skins/Collab022/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/Collab022/ChibiIcon.png",
    "new_path": "/skins/Collab022/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Collab022/ShipyardIcon.png",
    "new_path": "/skins/Collab022/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/336/Banner.png",
    "new_path": "/skins/336/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/336/Icon.png",
    "new_path": "/skins/336/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/336/ChibiIcon.png",
    "new_path": "/skins/336/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/336/ShipyardIcon.png",
    "new_path": "/skins/336/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/336/HalloweenBanner.png",
    "new_path": "/skins/336/Pumpkin_Blast/Banner.png"
  },
  {
    "old_path": "/images/skins/336/HalloweenIcon.png",
    "new_path": "/skins/336/Pumpkin_Blast/Icon.png"
  },
  {
    "old_path": "/images/skins/336/HalloweenChibiIcon.png",
    "new_path": "/skins/336/Pumpkin_Blast/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/336/HalloweenShipyardIcon.png",
    "new_path": "/skins/336/Pumpkin_Blast/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/336/BunnyBanner.png",
    "new_path": "/skins/336/Mischief_on_the_Rocks/Banner.png"
  },
  {
    "old_path": "/images/skins/336/BunnyIcon.png",
    "new_path": "/skins/336/Mischief_on_the_Rocks/Icon.png"
  },
  {
    "old_path": "/images/skins/336/BunnyChibiIcon.png",
    "new_path": "/skins/336/Mischief_on_the_Rocks/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/336/BunnyShipyardIcon.png",
    "new_path": "/skins/336/Mischief_on_the_Rocks/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/187/Banner.png",
    "new_path": "/skins/187/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/187/Icon.png",
    "new_path": "/skins/187/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/187/ChibiIcon.png",
    "new_path": "/skins/187/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/187/ShipyardIcon.png",
    "new_path": "/skins/187/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/187/KaiBanner.png",
    "new_path": "/skins/187/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/187/KaiIcon.png",
    "new_path": "/skins/187/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/187/KaiChibiIcon.png",
    "new_path": "/skins/187/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/187/KaiShipyardIcon.png",
    "new_path": "/skins/187/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/082/Banner.png",
    "new_path": "/skins/082/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/082/Icon.png",
    "new_path": "/skins/082/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/082/ChibiIcon.png",
    "new_path": "/skins/082/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/082/ShipyardIcon.png",
    "new_path": "/skins/082/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/082/KaiBanner.png",
    "new_path": "/skins/082/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/082/KaiIcon.png",
    "new_path": "/skins/082/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/082/KaiChibiIcon.png",
    "new_path": "/skins/082/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/082/KaiShipyardIcon.png",
    "new_path": "/skins/082/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/082/SchoolChibiIcon.png",
    "new_path": "/skins/082/Fashionable_Outing/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/082/SchoolShipyardIcon.png",
    "new_path": "/skins/082/Fashionable_Outing/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/082/SpringBanner.png",
    "new_path": "/skins/082/Lights_of_the_Lantern_Festival/Banner.png"
  },
  {
    "old_path": "/images/skins/082/SpringIcon.png",
    "new_path": "/skins/082/Lights_of_the_Lantern_Festival/Icon.png"
  },
  {
    "old_path": "/images/skins/082/SpringChibiIcon.png",
    "new_path": "/skins/082/Lights_of_the_Lantern_Festival/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/082/SpringShipyardIcon.png",
    "new_path": "/skins/082/Lights_of_the_Lantern_Festival/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/082/BunnyBanner.png",
    "new_path": "/skins/082/Monochromatic_Marvel/Banner.png"
  },
  {
    "old_path": "/images/skins/082/BunnyIcon.png",
    "new_path": "/skins/082/Monochromatic_Marvel/Icon.png"
  },
  {
    "old_path": "/images/skins/082/BunnyChibiIcon.png",
    "new_path": "/skins/082/Monochromatic_Marvel/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/082/BunnyShipyardIcon.png",
    "new_path": "/skins/082/Monochromatic_Marvel/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/105/Banner.png",
    "new_path": "/skins/105/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/105/Icon.png",
    "new_path": "/skins/105/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/105/ChibiIcon.png",
    "new_path": "/skins/105/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/105/ShipyardIcon.png",
    "new_path": "/skins/105/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/105/KaiBanner.png",
    "new_path": "/skins/105/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/105/KaiIcon.png",
    "new_path": "/skins/105/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/105/KaiChibiIcon.png",
    "new_path": "/skins/105/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/105/KaiShipyardIcon.png",
    "new_path": "/skins/105/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/246/Banner.png",
    "new_path": "/skins/246/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/246/Icon.png",
    "new_path": "/skins/246/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/246/ChibiIcon.png",
    "new_path": "/skins/246/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/246/ShipyardIcon.png",
    "new_path": "/skins/246/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/246/EventBanner.png",
    "new_path": "/skins/246/Girls_Sunday/Banner.png"
  },
  {
    "old_path": "/images/skins/246/EventIcon.png",
    "new_path": "/skins/246/Girls_Sunday/Icon.png"
  },
  {
    "old_path": "/images/skins/246/EventChibiIcon.png",
    "new_path": "/skins/246/Girls_Sunday/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/246/EventShipyardIcon.png",
    "new_path": "/skins/246/Girls_Sunday/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/246/CasualBanner.png",
    "new_path": "/skins/246/Peaceful_Daily_Life/Banner.png"
  },
  {
    "old_path": "/images/skins/246/CasualIcon.png",
    "new_path": "/skins/246/Peaceful_Daily_Life/Icon.png"
  },
  {
    "old_path": "/images/skins/246/CasualChibiIcon.png",
    "new_path": "/skins/246/Peaceful_Daily_Life/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/246/CasualShipyardIcon.png",
    "new_path": "/skins/246/Peaceful_Daily_Life/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/246/PartyBanner.png",
    "new_path": "/skins/246/A_Novel_Anniversary/Banner.png"
  },
  {
    "old_path": "/images/skins/246/PartyIcon.png",
    "new_path": "/skins/246/A_Novel_Anniversary/Icon.png"
  },
  {
    "old_path": "/images/skins/246/PartyChibiIcon.png",
    "new_path": "/skins/246/A_Novel_Anniversary/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/246/PartyShipyardIcon.png",
    "new_path": "/skins/246/A_Novel_Anniversary/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/246/IdolBanner.png",
    "new_path": "/skins/246/WorldsCutest/Banner.png"
  },
  {
    "old_path": "/images/skins/246/IdolIcon.png",
    "new_path": "/skins/246/WorldsCutest/Icon.png"
  },
  {
    "old_path": "/images/skins/246/IdolChibiIcon.png",
    "new_path": "/skins/246/WorldsCutest/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/246/IdolShipyardIcon.png",
    "new_path": "/skins/246/WorldsCutest/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/242/Banner.png",
    "new_path": "/skins/242/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/242/Icon.png",
    "new_path": "/skins/242/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/242/ChibiIcon.png",
    "new_path": "/skins/242/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/242/ShipyardIcon.png",
    "new_path": "/skins/242/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/422/Banner.png",
    "new_path": "/skins/422/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/422/Icon.png",
    "new_path": "/skins/422/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/422/ChibiIcon.png",
    "new_path": "/skins/422/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/422/ShipyardIcon.png",
    "new_path": "/skins/422/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/321/Banner.png",
    "new_path": "/skins/321/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/321/Icon.png",
    "new_path": "/skins/321/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/321/ChibiIcon.png",
    "new_path": "/skins/321/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/321/ShipyardIcon.png",
    "new_path": "/skins/321/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/321/ChristmasBanner.png",
    "new_path": "/skins/321/Christmas_Eve_Tease/Banner.png"
  },
  {
    "old_path": "/images/skins/321/ChristmasIcon.png",
    "new_path": "/skins/321/Christmas_Eve_Tease/Icon.png"
  },
  {
    "old_path": "/images/skins/321/ChristmasChibiIcon.png",
    "new_path": "/skins/321/Christmas_Eve_Tease/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/321/ChristmasShipyardIcon.png",
    "new_path": "/skins/321/Christmas_Eve_Tease/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/321/CasualBanner.png",
    "new_path": "/skins/321/Dating_Game/Banner.png"
  },
  {
    "old_path": "/images/skins/321/CasualIcon.png",
    "new_path": "/skins/321/Dating_Game/Icon.png"
  },
  {
    "old_path": "/images/skins/321/CasualChibiIcon.png",
    "new_path": "/skins/321/Dating_Game/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/321/CasualShipyardIcon.png",
    "new_path": "/skins/321/Dating_Game/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/321/PartyBanner.png",
    "new_path": "/skins/321/Blue_Butterflys_Confession/Banner.png"
  },
  {
    "old_path": "/images/skins/321/PartyIcon.png",
    "new_path": "/skins/321/Blue_Butterflys_Confession/Icon.png"
  },
  {
    "old_path": "/images/skins/321/PartyChibiIcon.png",
    "new_path": "/skins/321/Blue_Butterflys_Confession/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/321/PartyShipyardIcon.png",
    "new_path": "/skins/321/Blue_Butterflys_Confession/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/106/Banner.png",
    "new_path": "/skins/106/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/106/Icon.png",
    "new_path": "/skins/106/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/106/ChibiIcon.png",
    "new_path": "/skins/106/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/106/ShipyardIcon.png",
    "new_path": "/skins/106/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/106/KaiBanner.png",
    "new_path": "/skins/106/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/106/KaiIcon.png",
    "new_path": "/skins/106/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/106/KaiChibiIcon.png",
    "new_path": "/skins/106/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/106/KaiShipyardIcon.png",
    "new_path": "/skins/106/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/106/PartyBanner.png",
    "new_path": "/skins/106/Party_Queen/Banner.png"
  },
  {
    "old_path": "/images/skins/106/PartyIcon.png",
    "new_path": "/skins/106/Party_Queen/Icon.png"
  },
  {
    "old_path": "/images/skins/106/PartyChibiIcon.png",
    "new_path": "/skins/106/Party_Queen/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/106/PartyShipyardIcon.png",
    "new_path": "/skins/106/Party_Queen/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/106/SchoolBanner.png",
    "new_path": "/skins/106/Valentines_Reward/Banner.png"
  },
  {
    "old_path": "/images/skins/106/SchoolIcon.png",
    "new_path": "/skins/106/Valentines_Reward/Icon.png"
  },
  {
    "old_path": "/images/skins/106/SchoolChibiIcon.png",
    "new_path": "/skins/106/Valentines_Reward/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/106/SchoolShipyardIcon.png",
    "new_path": "/skins/106/Valentines_Reward/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/224/Banner.png",
    "new_path": "/skins/224/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/224/Icon.png",
    "new_path": "/skins/224/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/224/ChibiIcon.png",
    "new_path": "/skins/224/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/224/ShipyardIcon.png",
    "new_path": "/skins/224/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/224/WeddingBanner.png",
    "new_path": "/skins/224/Wedding/Banner.png"
  },
  {
    "old_path": "/images/skins/224/WeddingIcon.png",
    "new_path": "/skins/224/Wedding/Icon.png"
  },
  {
    "old_path": "/images/skins/224/WeddingChibiIcon.png",
    "new_path": "/skins/224/Wedding/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/224/WeddingShipyardIcon.png",
    "new_path": "/skins/224/Wedding/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/224/SummerBanner.png",
    "new_path": "/skins/224/Paradise_Amaryllis/Banner.png"
  },
  {
    "old_path": "/images/skins/224/SummerIcon.png",
    "new_path": "/skins/224/Paradise_Amaryllis/Icon.png"
  },
  {
    "old_path": "/images/skins/224/SummerChibiIcon.png",
    "new_path": "/skins/224/Paradise_Amaryllis/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/224/SummerShipyardIcon.png",
    "new_path": "/skins/224/Paradise_Amaryllis/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/224/New_YearBanner.png",
    "new_path": "/skins/224/Plum_and_Snow/Banner.png"
  },
  {
    "old_path": "/images/skins/224/New_YearIcon.png",
    "new_path": "/skins/224/Plum_and_Snow/Icon.png"
  },
  {
    "old_path": "/images/skins/224/New_YearChibiIcon.png",
    "new_path": "/skins/224/Plum_and_Snow/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/224/New_YearShipyardIcon.png",
    "new_path": "/skins/224/Plum_and_Snow/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/224/PartyBanner.png",
    "new_path": "/skins/224/RubyLaced_Beauty/Banner.png"
  },
  {
    "old_path": "/images/skins/224/PartyIcon.png",
    "new_path": "/skins/224/RubyLaced_Beauty/Icon.png"
  },
  {
    "old_path": "/images/skins/224/PartyChibiIcon.png",
    "new_path": "/skins/224/RubyLaced_Beauty/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/224/PartyShipyardIcon.png",
    "new_path": "/skins/224/RubyLaced_Beauty/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/224/SpringBanner.png",
    "new_path": "/skins/224/DawnPhoenixs_Summons/Banner.png"
  },
  {
    "old_path": "/images/skins/224/SpringIcon.png",
    "new_path": "/skins/224/DawnPhoenixs_Summons/Icon.png"
  },
  {
    "old_path": "/images/skins/224/SpringChibiIcon.png",
    "new_path": "/skins/224/DawnPhoenixs_Summons/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/224/SpringShipyardIcon.png",
    "new_path": "/skins/224/DawnPhoenixs_Summons/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/419/Banner.png",
    "new_path": "/skins/419/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/419/Icon.png",
    "new_path": "/skins/419/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/419/ChibiIcon.png",
    "new_path": "/skins/419/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/419/ShipyardIcon.png",
    "new_path": "/skins/419/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/384/Banner.png",
    "new_path": "/skins/384/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/384/Icon.png",
    "new_path": "/skins/384/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/384/ChibiIcon.png",
    "new_path": "/skins/384/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/384/ShipyardIcon.png",
    "new_path": "/skins/384/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/10082/Banner.png",
    "new_path": "/skins/10082/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/10082/Icon.png",
    "new_path": "/skins/10082/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/10082/ChibiIcon.png",
    "new_path": "/skins/10082/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/10082/ShipyardIcon.png",
    "new_path": "/skins/10082/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/10082/CasualBanner.png",
    "new_path": "/skins/10082/A_Vacation_Just_for_Two/Banner.png"
  },
  {
    "old_path": "/images/skins/10082/CasualIcon.png",
    "new_path": "/skins/10082/A_Vacation_Just_for_Two/Icon.png"
  },
  {
    "old_path": "/images/skins/10082/CasualChibiIcon.png",
    "new_path": "/skins/10082/A_Vacation_Just_for_Two/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/10082/CasualShipyardIcon.png",
    "new_path": "/skins/10082/A_Vacation_Just_for_Two/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/232/Banner.png",
    "new_path": "/skins/232/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/232/Icon.png",
    "new_path": "/skins/232/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/232/ChibiIcon.png",
    "new_path": "/skins/232/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/232/ShipyardIcon.png",
    "new_path": "/skins/232/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/232/WeddingBanner.png",
    "new_path": "/skins/232/Wedding/Banner.png"
  },
  {
    "old_path": "/images/skins/232/WeddingIcon.png",
    "new_path": "/skins/232/Wedding/Icon.png"
  },
  {
    "old_path": "/images/skins/232/WeddingChibiIcon.png",
    "new_path": "/skins/232/Wedding/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/232/WeddingShipyardIcon.png",
    "new_path": "/skins/232/Wedding/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/232/New_YearBanner.png",
    "new_path": "/skins/232/Akashis_in_the_Red_Nya/Banner.png"
  },
  {
    "old_path": "/images/skins/232/New_YearIcon.png",
    "new_path": "/skins/232/Akashis_in_the_Red_Nya/Icon.png"
  },
  {
    "old_path": "/images/skins/232/New_YearChibiIcon.png",
    "new_path": "/skins/232/Akashis_in_the_Red_Nya/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/232/New_YearShipyardIcon.png",
    "new_path": "/skins/232/Akashis_in_the_Red_Nya/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/232/PartyBanner.png",
    "new_path": "/skins/232/The_Black_Cat_Cometh/Banner.png"
  },
  {
    "old_path": "/images/skins/232/PartyIcon.png",
    "new_path": "/skins/232/The_Black_Cat_Cometh/Icon.png"
  },
  {
    "old_path": "/images/skins/232/PartyChibiIcon.png",
    "new_path": "/skins/232/The_Black_Cat_Cometh/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/232/PartyShipyardIcon.png",
    "new_path": "/skins/232/The_Black_Cat_Cometh/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/232/EventBanner.png",
    "new_path": "/skins/232/Welcome_to_AzurCon/Banner.png"
  },
  {
    "old_path": "/images/skins/232/EventIcon.png",
    "new_path": "/skins/232/Welcome_to_AzurCon/Icon.png"
  },
  {
    "old_path": "/images/skins/232/EventChibiIcon.png",
    "new_path": "/skins/232/Welcome_to_AzurCon/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/232/EventShipyardIcon.png",
    "new_path": "/skins/232/Welcome_to_AzurCon/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/232/SofmapBanner.png",
    "new_path": "/skins/232/Welcome_to_Sofmap/Banner.png"
  },
  {
    "old_path": "/images/skins/232/SofmapIcon.png",
    "new_path": "/skins/232/Welcome_to_Sofmap/Icon.png"
  },
  {
    "old_path": "/images/skins/232/SofmapChibiIcon.png",
    "new_path": "/skins/232/Welcome_to_Sofmap/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/232/SofmapShipyardIcon.png",
    "new_path": "/skins/232/Welcome_to_Sofmap/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/159/Banner.png",
    "new_path": "/skins/159/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/159/Icon.png",
    "new_path": "/skins/159/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/159/ChibiIcon.png",
    "new_path": "/skins/159/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/159/ShipyardIcon.png",
    "new_path": "/skins/159/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/159/CampBanner.png",
    "new_path": "/skins/159/Akatsuki_Goes_North/Banner.png"
  },
  {
    "old_path": "/images/skins/159/CampIcon.png",
    "new_path": "/skins/159/Akatsuki_Goes_North/Icon.png"
  },
  {
    "old_path": "/images/skins/159/CampChibiIcon.png",
    "new_path": "/skins/159/Akatsuki_Goes_North/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/159/CampShipyardIcon.png",
    "new_path": "/skins/159/Akatsuki_Goes_North/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/159/CasualBanner.png",
    "new_path": "/skins/159/Motoninja_Akatsuki/Banner.png"
  },
  {
    "old_path": "/images/skins/159/CasualIcon.png",
    "new_path": "/skins/159/Motoninja_Akatsuki/Icon.png"
  },
  {
    "old_path": "/images/skins/159/CasualChibiIcon.png",
    "new_path": "/skins/159/Motoninja_Akatsuki/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/159/CasualShipyardIcon.png",
    "new_path": "/skins/159/Motoninja_Akatsuki/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/159/ChristmasBanner.png",
    "new_path": "/skins/159/Santas_Lost_Helper/Banner.png"
  },
  {
    "old_path": "/images/skins/159/ChristmasIcon.png",
    "new_path": "/skins/159/Santas_Lost_Helper/Icon.png"
  },
  {
    "old_path": "/images/skins/159/ChristmasChibiIcon.png",
    "new_path": "/skins/159/Santas_Lost_Helper/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/159/ChristmasShipyardIcon.png",
    "new_path": "/skins/159/Santas_Lost_Helper/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/401/Banner.png",
    "new_path": "/skins/401/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/401/Icon.png",
    "new_path": "/skins/401/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/401/ChibiIcon.png",
    "new_path": "/skins/401/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/401/ShipyardIcon.png",
    "new_path": "/skins/401/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/358/Banner.png",
    "new_path": "/skins/358/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/358/Icon.png",
    "new_path": "/skins/358/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/358/ChibiIcon.png",
    "new_path": "/skins/358/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/358/ShipyardIcon.png",
    "new_path": "/skins/358/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/358/PartyBanner.png",
    "new_path": "/skins/358/Beneath_the_Black_Dress/Banner.png"
  },
  {
    "old_path": "/images/skins/358/PartyIcon.png",
    "new_path": "/skins/358/Beneath_the_Black_Dress/Icon.png"
  },
  {
    "old_path": "/images/skins/358/PartyChibiIcon.png",
    "new_path": "/skins/358/Beneath_the_Black_Dress/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/358/PartyShipyardIcon.png",
    "new_path": "/skins/358/Beneath_the_Black_Dress/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/358/MaidBanner.png",
    "new_path": "/skins/358/A_Catty_Surprise/Banner.png"
  },
  {
    "old_path": "/images/skins/358/MaidIcon.png",
    "new_path": "/skins/358/A_Catty_Surprise/Icon.png"
  },
  {
    "old_path": "/images/skins/358/MaidChibiIcon.png",
    "new_path": "/skins/358/A_Catty_Surprise/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/358/MaidShipyardIcon.png",
    "new_path": "/skins/358/A_Catty_Surprise/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/477/Banner.png",
    "new_path": "/skins/477/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/477/Icon.png",
    "new_path": "/skins/477/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/477/ChibiIcon.png",
    "new_path": "/skins/477/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/477/ShipyardIcon.png",
    "new_path": "/skins/477/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/455/Banner.png",
    "new_path": "/skins/455/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/455/Icon.png",
    "new_path": "/skins/455/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/455/ChibiIcon.png",
    "new_path": "/skins/455/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/455/ShipyardIcon.png",
    "new_path": "/skins/455/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/455/SummerBanner.png",
    "new_path": "/skins/455/White_Sand_Paradise/Banner.png"
  },
  {
    "old_path": "/images/skins/455/SummerIcon.png",
    "new_path": "/skins/455/White_Sand_Paradise/Icon.png"
  },
  {
    "old_path": "/images/skins/455/SummerChibiIcon.png",
    "new_path": "/skins/455/White_Sand_Paradise/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/455/SummerShipyardIcon.png",
    "new_path": "/skins/455/White_Sand_Paradise/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/508/Banner.png",
    "new_path": "/skins/508/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/508/Icon.png",
    "new_path": "/skins/508/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/508/ChibiIcon.png",
    "new_path": "/skins/508/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/508/ShipyardIcon.png",
    "new_path": "/skins/508/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/508/BunnyBanner.png",
    "new_path": "/skins/508/Charming_Rabbit/Banner.png"
  },
  {
    "old_path": "/images/skins/508/BunnyIcon.png",
    "new_path": "/skins/508/Charming_Rabbit/Icon.png"
  },
  {
    "old_path": "/images/skins/508/BunnyChibiIcon.png",
    "new_path": "/skins/508/Charming_Rabbit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/508/BunnyShipyardIcon.png",
    "new_path": "/skins/508/Charming_Rabbit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/367/Banner.png",
    "new_path": "/skins/367/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/367/Icon.png",
    "new_path": "/skins/367/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/367/ChibiIcon.png",
    "new_path": "/skins/367/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/367/ShipyardIcon.png",
    "new_path": "/skins/367/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/367/SummerBanner.png",
    "new_path": "/skins/367/Wending_Waters_Serene_Lotus/Banner.png"
  },
  {
    "old_path": "/images/skins/367/SummerIcon.png",
    "new_path": "/skins/367/Wending_Waters_Serene_Lotus/Icon.png"
  },
  {
    "old_path": "/images/skins/367/SummerChibiIcon.png",
    "new_path": "/skins/367/Wending_Waters_Serene_Lotus/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/367/SummerShipyardIcon.png",
    "new_path": "/skins/367/Wending_Waters_Serene_Lotus/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/510/Banner.png",
    "new_path": "/skins/510/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/510/Icon.png",
    "new_path": "/skins/510/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/510/ChibiIcon.png",
    "new_path": "/skins/510/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/510/ShipyardIcon.png",
    "new_path": "/skins/510/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/081/Banner.png",
    "new_path": "/skins/081/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/081/Icon.png",
    "new_path": "/skins/081/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/081/ChibiIcon.png",
    "new_path": "/skins/081/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/081/ShipyardIcon.png",
    "new_path": "/skins/081/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/081/KaiBanner.png",
    "new_path": "/skins/081/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/081/KaiIcon.png",
    "new_path": "/skins/081/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/081/KaiChibiIcon.png",
    "new_path": "/skins/081/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/081/KaiShipyardIcon.png",
    "new_path": "/skins/081/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/081/PartyBanner.png",
    "new_path": "/skins/081/Little_Orchestra/Banner.png"
  },
  {
    "old_path": "/images/skins/081/PartyIcon.png",
    "new_path": "/skins/081/Little_Orchestra/Icon.png"
  },
  {
    "old_path": "/images/skins/081/PartyChibiIcon.png",
    "new_path": "/skins/081/Little_Orchestra/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/081/PartyShipyardIcon.png",
    "new_path": "/skins/081/Little_Orchestra/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/10076/Banner.png",
    "new_path": "/skins/10076/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/10076/Icon.png",
    "new_path": "/skins/10076/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/10076/ChibiIcon.png",
    "new_path": "/skins/10076/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/10076/ShipyardIcon.png",
    "new_path": "/skins/10076/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/10076/FestivalBanner.png",
    "new_path": "/skins/10076/Summer_Flowers_and_Sizzling_Beats/Banner.png"
  },
  {
    "old_path": "/images/skins/10076/FestivalIcon.png",
    "new_path": "/skins/10076/Summer_Flowers_and_Sizzling_Beats/Icon.png"
  },
  {
    "old_path": "/images/skins/10076/FestivalChibiIcon.png",
    "new_path": "/skins/10076/Summer_Flowers_and_Sizzling_Beats/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/10076/FestivalShipyardIcon.png",
    "new_path": "/skins/10076/Summer_Flowers_and_Sizzling_Beats/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/253/Banner.png",
    "new_path": "/skins/253/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/253/Icon.png",
    "new_path": "/skins/253/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/253/ChibiIcon.png",
    "new_path": "/skins/253/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/253/ShipyardIcon.png",
    "new_path": "/skins/253/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/253/KaiBanner.png",
    "new_path": "/skins/253/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/253/KaiIcon.png",
    "new_path": "/skins/253/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/253/KaiChibiIcon.png",
    "new_path": "/skins/253/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/253/KaiShipyardIcon.png",
    "new_path": "/skins/253/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/253/NavyBanner.png",
    "new_path": "/skins/253/The_Cornett_of_Peace/Banner.png"
  },
  {
    "old_path": "/images/skins/253/NavyIcon.png",
    "new_path": "/skins/253/The_Cornett_of_Peace/Icon.png"
  },
  {
    "old_path": "/images/skins/253/NavyChibiIcon.png",
    "new_path": "/skins/253/The_Cornett_of_Peace/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/253/NavyShipyardIcon.png",
    "new_path": "/skins/253/The_Cornett_of_Peace/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/253/SchoolBanner.png",
    "new_path": "/skins/253/Setting_Sun_Hearts_as_One/Banner.png"
  },
  {
    "old_path": "/images/skins/253/SchoolIcon.png",
    "new_path": "/skins/253/Setting_Sun_Hearts_as_One/Icon.png"
  },
  {
    "old_path": "/images/skins/253/SchoolChibiIcon.png",
    "new_path": "/skins/253/Setting_Sun_Hearts_as_One/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/253/SchoolShipyardIcon.png",
    "new_path": "/skins/253/Setting_Sun_Hearts_as_One/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Plan018/Banner.png",
    "new_path": "/skins/Plan018/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/Plan018/Icon.png",
    "new_path": "/skins/Plan018/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/Plan018/ChibiIcon.png",
    "new_path": "/skins/Plan018/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Plan018/ShipyardIcon.png",
    "new_path": "/skins/Plan018/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Collab043/Banner.png",
    "new_path": "/skins/Collab043/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/Collab043/Icon.png",
    "new_path": "/skins/Collab043/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/Collab043/ChibiIcon.png",
    "new_path": "/skins/Collab043/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Collab043/ShipyardIcon.png",
    "new_path": "/skins/Collab043/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/192/Banner.png",
    "new_path": "/skins/192/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/192/Icon.png",
    "new_path": "/skins/192/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/192/ChibiIcon.png",
    "new_path": "/skins/192/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/192/ShipyardIcon.png",
    "new_path": "/skins/192/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/502/Banner.png",
    "new_path": "/skins/502/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/502/Icon.png",
    "new_path": "/skins/502/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/502/ChibiIcon.png",
    "new_path": "/skins/502/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/502/ShipyardIcon.png",
    "new_path": "/skins/502/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/502/SummerBanner.png",
    "new_path": "/skins/502/Sardegnian_Shallows_and_Sunshine/Banner.png"
  },
  {
    "old_path": "/images/skins/502/SummerIcon.png",
    "new_path": "/skins/502/Sardegnian_Shallows_and_Sunshine/Icon.png"
  },
  {
    "old_path": "/images/skins/502/SummerChibiIcon.png",
    "new_path": "/skins/502/Sardegnian_Shallows_and_Sunshine/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/502/SummerShipyardIcon.png",
    "new_path": "/skins/502/Sardegnian_Shallows_and_Sunshine/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/502/PartyBanner.png",
    "new_path": "/skins/502/A_Sip_of_Sardegnian_Elegance/Banner.png"
  },
  {
    "old_path": "/images/skins/502/PartyIcon.png",
    "new_path": "/skins/502/A_Sip_of_Sardegnian_Elegance/Icon.png"
  },
  {
    "old_path": "/images/skins/502/PartyChibiIcon.png",
    "new_path": "/skins/502/A_Sip_of_Sardegnian_Elegance/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/502/PartyShipyardIcon.png",
    "new_path": "/skins/502/A_Sip_of_Sardegnian_Elegance/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/334/Banner.png",
    "new_path": "/skins/334/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/334/Icon.png",
    "new_path": "/skins/334/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/334/ChibiIcon.png",
    "new_path": "/skins/334/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/334/ShipyardIcon.png",
    "new_path": "/skins/334/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/334/FestivalBanner.png",
    "new_path": "/skins/334/The_Gentlest_Firework/Banner.png"
  },
  {
    "old_path": "/images/skins/334/FestivalIcon.png",
    "new_path": "/skins/334/The_Gentlest_Firework/Icon.png"
  },
  {
    "old_path": "/images/skins/334/FestivalChibiIcon.png",
    "new_path": "/skins/334/The_Gentlest_Firework/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/334/FestivalShipyardIcon.png",
    "new_path": "/skins/334/The_Gentlest_Firework/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/513/Banner.png",
    "new_path": "/skins/513/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/513/Icon.png",
    "new_path": "/skins/513/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/513/ChibiIcon.png",
    "new_path": "/skins/513/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/513/ShipyardIcon.png",
    "new_path": "/skins/513/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/513/BunnyBanner.png",
    "new_path": "/skins/513/Coquettish_Bunny/Banner.png"
  },
  {
    "old_path": "/images/skins/513/BunnyIcon.png",
    "new_path": "/skins/513/Coquettish_Bunny/Icon.png"
  },
  {
    "old_path": "/images/skins/513/BunnyChibiIcon.png",
    "new_path": "/skins/513/Coquettish_Bunny/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/513/BunnyShipyardIcon.png",
    "new_path": "/skins/513/Coquettish_Bunny/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/083/Banner.png",
    "new_path": "/skins/083/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/083/Icon.png",
    "new_path": "/skins/083/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/083/ChibiIcon.png",
    "new_path": "/skins/083/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/083/ShipyardIcon.png",
    "new_path": "/skins/083/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/083/KaiBanner.png",
    "new_path": "/skins/083/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/083/KaiIcon.png",
    "new_path": "/skins/083/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/083/KaiChibiIcon.png",
    "new_path": "/skins/083/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/083/KaiShipyardIcon.png",
    "new_path": "/skins/083/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/083/SchoolBanner.png",
    "new_path": "/skins/083/Ardent_Valentine/Banner.png"
  },
  {
    "old_path": "/images/skins/083/SchoolIcon.png",
    "new_path": "/skins/083/Ardent_Valentine/Icon.png"
  },
  {
    "old_path": "/images/skins/083/SchoolChibiIcon.png",
    "new_path": "/skins/083/Ardent_Valentine/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/083/SchoolShipyardIcon.png",
    "new_path": "/skins/083/Ardent_Valentine/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/083/BunnyBanner.png",
    "new_path": "/skins/083/Master_Ardent/Banner.png"
  },
  {
    "old_path": "/images/skins/083/BunnyIcon.png",
    "new_path": "/skins/083/Master_Ardent/Icon.png"
  },
  {
    "old_path": "/images/skins/083/BunnyChibiIcon.png",
    "new_path": "/skins/083/Master_Ardent/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/083/BunnyShipyardIcon.png",
    "new_path": "/skins/083/Master_Ardent/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/116/Banner.png",
    "new_path": "/skins/116/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/116/Icon.png",
    "new_path": "/skins/116/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/116/ChibiIcon.png",
    "new_path": "/skins/116/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/116/ShipyardIcon.png",
    "new_path": "/skins/116/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/175/Banner.png",
    "new_path": "/skins/175/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/175/Icon.png",
    "new_path": "/skins/175/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/175/ChibiIcon.png",
    "new_path": "/skins/175/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/175/ShipyardIcon.png",
    "new_path": "/skins/175/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/175/KaiBanner.png",
    "new_path": "/skins/175/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/175/KaiIcon.png",
    "new_path": "/skins/175/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/175/KaiChibiIcon.png",
    "new_path": "/skins/175/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/175/KaiShipyardIcon.png",
    "new_path": "/skins/175/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/175/PartyBanner.png",
    "new_path": "/skins/175/Unending_Friendship/Banner.png"
  },
  {
    "old_path": "/images/skins/175/PartyIcon.png",
    "new_path": "/skins/175/Unending_Friendship/Icon.png"
  },
  {
    "old_path": "/images/skins/175/PartyChibiIcon.png",
    "new_path": "/skins/175/Unending_Friendship/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/175/PartyShipyardIcon.png",
    "new_path": "/skins/175/Unending_Friendship/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/055/Banner.png",
    "new_path": "/skins/055/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/055/Icon.png",
    "new_path": "/skins/055/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/055/ChibiIcon.png",
    "new_path": "/skins/055/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/055/ShipyardIcon.png",
    "new_path": "/skins/055/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/055/SpringBanner.png",
    "new_path": "/skins/055/Enchantress_from_Afar/Banner.png"
  },
  {
    "old_path": "/images/skins/055/SpringIcon.png",
    "new_path": "/skins/055/Enchantress_from_Afar/Icon.png"
  },
  {
    "old_path": "/images/skins/055/SpringChibiIcon.png",
    "new_path": "/skins/055/Enchantress_from_Afar/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/055/SpringShipyardIcon.png",
    "new_path": "/skins/055/Enchantress_from_Afar/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/144/Banner.png",
    "new_path": "/skins/144/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/144/Icon.png",
    "new_path": "/skins/144/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/144/ChibiIcon.png",
    "new_path": "/skins/144/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/144/ShipyardIcon.png",
    "new_path": "/skins/144/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/144/KaiBanner.png",
    "new_path": "/skins/144/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/144/KaiIcon.png",
    "new_path": "/skins/144/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/144/KaiChibiIcon.png",
    "new_path": "/skins/144/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/144/KaiShipyardIcon.png",
    "new_path": "/skins/144/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/144/WeddingBanner.png",
    "new_path": "/skins/144/Wedding/Banner.png"
  },
  {
    "old_path": "/images/skins/144/WeddingIcon.png",
    "new_path": "/skins/144/Wedding/Icon.png"
  },
  {
    "old_path": "/images/skins/144/WeddingChibiIcon.png",
    "new_path": "/skins/144/Wedding/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/144/WeddingShipyardIcon.png",
    "new_path": "/skins/144/Wedding/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/144/SummerBanner.png",
    "new_path": "/skins/144/Coast_Watcher/Banner.png"
  },
  {
    "old_path": "/images/skins/144/SummerIcon.png",
    "new_path": "/skins/144/Coast_Watcher/Icon.png"
  },
  {
    "old_path": "/images/skins/144/SummerChibiIcon.png",
    "new_path": "/skins/144/Coast_Watcher/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/144/SummerShipyardIcon.png",
    "new_path": "/skins/144/Coast_Watcher/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/144/PartyBanner.png",
    "new_path": "/skins/144/Guardian_of_the_Ball/Banner.png"
  },
  {
    "old_path": "/images/skins/144/PartyIcon.png",
    "new_path": "/skins/144/Guardian_of_the_Ball/Icon.png"
  },
  {
    "old_path": "/images/skins/144/PartyChibiIcon.png",
    "new_path": "/skins/144/Guardian_of_the_Ball/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/144/PartyShipyardIcon.png",
    "new_path": "/skins/144/Guardian_of_the_Ball/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/144/New_YearBanner.png",
    "new_path": "/skins/144/New_Years_Protectress/Banner.png"
  },
  {
    "old_path": "/images/skins/144/New_YearIcon.png",
    "new_path": "/skins/144/New_Years_Protectress/Icon.png"
  },
  {
    "old_path": "/images/skins/144/New_YearChibiIcon.png",
    "new_path": "/skins/144/New_Years_Protectress/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/144/New_YearShipyardIcon.png",
    "new_path": "/skins/144/New_Years_Protectress/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/536/Banner.png",
    "new_path": "/skins/536/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/536/Icon.png",
    "new_path": "/skins/536/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/536/ChibiIcon.png",
    "new_path": "/skins/536/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/536/ShipyardIcon.png",
    "new_path": "/skins/536/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/536/Special_ExerciseIcon.png",
    "new_path": "/skins/536/Grandiose_Getaway/Icon.png"
  },
  {
    "old_path": "/images/skins/536/Special_ExerciseChibiIcon.png",
    "new_path": "/skins/536/Grandiose_Getaway/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/536/Special_ExerciseShipyardIcon.png",
    "new_path": "/skins/536/Grandiose_Getaway/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/331/Banner.png",
    "new_path": "/skins/331/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/331/Icon.png",
    "new_path": "/skins/331/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/331/ChibiIcon.png",
    "new_path": "/skins/331/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/331/ShipyardIcon.png",
    "new_path": "/skins/331/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/331/SchoolChibiIcon.png",
    "new_path": "/skins/331/The_Transfer_Student_Underneath_the_Dancing_Petals/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/331/SchoolShipyardIcon.png",
    "new_path": "/skins/331/The_Transfer_Student_Underneath_the_Dancing_Petals/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/331/New_YearBanner.png",
    "new_path": "/skins/331/SnowDusted_Lynx_Tips/Banner.png"
  },
  {
    "old_path": "/images/skins/331/New_YearIcon.png",
    "new_path": "/skins/331/SnowDusted_Lynx_Tips/Icon.png"
  },
  {
    "old_path": "/images/skins/331/New_YearChibiIcon.png",
    "new_path": "/skins/331/SnowDusted_Lynx_Tips/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/331/New_YearShipyardIcon.png",
    "new_path": "/skins/331/SnowDusted_Lynx_Tips/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/331/SpringBanner.png",
    "new_path": "/skins/331/Robes_of_Dancing_Clouds/Banner.png"
  },
  {
    "old_path": "/images/skins/331/SpringIcon.png",
    "new_path": "/skins/331/Robes_of_Dancing_Clouds/Icon.png"
  },
  {
    "old_path": "/images/skins/331/SpringChibiIcon.png",
    "new_path": "/skins/331/Robes_of_Dancing_Clouds/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/331/SpringShipyardIcon.png",
    "new_path": "/skins/331/Robes_of_Dancing_Clouds/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/198/Banner.png",
    "new_path": "/skins/198/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/198/Icon.png",
    "new_path": "/skins/198/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/198/ChibiIcon.png",
    "new_path": "/skins/198/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/198/ShipyardIcon.png",
    "new_path": "/skins/198/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/198/New_YearBanner.png",
    "new_path": "/skins/198/Brief_Intermission/Banner.png"
  },
  {
    "old_path": "/images/skins/198/New_YearIcon.png",
    "new_path": "/skins/198/Brief_Intermission/Icon.png"
  },
  {
    "old_path": "/images/skins/198/New_YearChibiIcon.png",
    "new_path": "/skins/198/Brief_Intermission/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/198/New_YearShipyardIcon.png",
    "new_path": "/skins/198/Brief_Intermission/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/198/SummerBanner.png",
    "new_path": "/skins/198/Kaleidoscopic_Summer/Banner.png"
  },
  {
    "old_path": "/images/skins/198/SummerIcon.png",
    "new_path": "/skins/198/Kaleidoscopic_Summer/Icon.png"
  },
  {
    "old_path": "/images/skins/198/SummerChibiIcon.png",
    "new_path": "/skins/198/Kaleidoscopic_Summer/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/198/SummerShipyardIcon.png",
    "new_path": "/skins/198/Kaleidoscopic_Summer/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/046/Banner.png",
    "new_path": "/skins/046/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/046/Icon.png",
    "new_path": "/skins/046/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/046/ChibiIcon.png",
    "new_path": "/skins/046/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/046/ShipyardIcon.png",
    "new_path": "/skins/046/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/046/SchoolBanner.png",
    "new_path": "/skins/046/Pure_Gurl/Banner.png"
  },
  {
    "old_path": "/images/skins/046/SchoolIcon.png",
    "new_path": "/skins/046/Pure_Gurl/Icon.png"
  },
  {
    "old_path": "/images/skins/046/SchoolChibiIcon.png",
    "new_path": "/skins/046/Pure_Gurl/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/046/SchoolShipyardIcon.png",
    "new_path": "/skins/046/Pure_Gurl/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/046/BunnyBanner.png",
    "new_path": "/skins/046/Black_Bunny_Carnival/Banner.png"
  },
  {
    "old_path": "/images/skins/046/BunnyIcon.png",
    "new_path": "/skins/046/Black_Bunny_Carnival/Icon.png"
  },
  {
    "old_path": "/images/skins/046/BunnyChibiIcon.png",
    "new_path": "/skins/046/Black_Bunny_Carnival/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/046/BunnyShipyardIcon.png",
    "new_path": "/skins/046/Black_Bunny_Carnival/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/201/Banner.png",
    "new_path": "/skins/201/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/201/Icon.png",
    "new_path": "/skins/201/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/201/ChibiIcon.png",
    "new_path": "/skins/201/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/201/ShipyardIcon.png",
    "new_path": "/skins/201/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/201/WeddingBanner.png",
    "new_path": "/skins/201/Wedding/Banner.png"
  },
  {
    "old_path": "/images/skins/201/WeddingIcon.png",
    "new_path": "/skins/201/Wedding/Icon.png"
  },
  {
    "old_path": "/images/skins/201/WeddingChibiIcon.png",
    "new_path": "/skins/201/Wedding/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/201/WeddingShipyardIcon.png",
    "new_path": "/skins/201/Wedding/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/201/SummerBanner.png",
    "new_path": "/skins/201/Summer_March/Banner.png"
  },
  {
    "old_path": "/images/skins/201/SummerIcon.png",
    "new_path": "/skins/201/Summer_March/Icon.png"
  },
  {
    "old_path": "/images/skins/201/SummerChibiIcon.png",
    "new_path": "/skins/201/Summer_March/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/201/SummerShipyardIcon.png",
    "new_path": "/skins/201/Summer_March/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/201/New_YearBanner.png",
    "new_path": "/skins/201/Hallmarks_of_Winter/Banner.png"
  },
  {
    "old_path": "/images/skins/201/New_YearIcon.png",
    "new_path": "/skins/201/Hallmarks_of_Winter/Icon.png"
  },
  {
    "old_path": "/images/skins/201/New_YearChibiIcon.png",
    "new_path": "/skins/201/Hallmarks_of_Winter/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/201/New_YearShipyardIcon.png",
    "new_path": "/skins/201/Hallmarks_of_Winter/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/201/SchoolChibiIcon.png",
    "new_path": "/skins/201/School_Traumerei/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/201/SchoolShipyardIcon.png",
    "new_path": "/skins/201/School_Traumerei/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/201/RaceQueenBanner.png",
    "new_path": "/skins/201/Stunning_Speedster/Banner.png"
  },
  {
    "old_path": "/images/skins/201/RaceQueenIcon.png",
    "new_path": "/skins/201/Stunning_Speedster/Icon.png"
  },
  {
    "old_path": "/images/skins/201/RaceQueenChibiIcon.png",
    "new_path": "/skins/201/Stunning_Speedster/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/201/RaceQueenShipyardIcon.png",
    "new_path": "/skins/201/Stunning_Speedster/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/034/Banner.png",
    "new_path": "/skins/034/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/034/Icon.png",
    "new_path": "/skins/034/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/034/ChibiIcon.png",
    "new_path": "/skins/034/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/034/ShipyardIcon.png",
    "new_path": "/skins/034/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Plan021/Banner.png",
    "new_path": "/skins/Plan021/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/Plan021/Icon.png",
    "new_path": "/skins/Plan021/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/Plan021/ChibiIcon.png",
    "new_path": "/skins/Plan021/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Plan021/ShipyardIcon.png",
    "new_path": "/skins/Plan021/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Plan021/MaidBanner.png",
    "new_path": "/skins/Plan021/The_Conquered_Unhulde/Banner.png"
  },
  {
    "old_path": "/images/skins/Plan021/MaidIcon.png",
    "new_path": "/skins/Plan021/The_Conquered_Unhulde/Icon.png"
  },
  {
    "old_path": "/images/skins/Plan021/MaidChibiIcon.png",
    "new_path": "/skins/Plan021/The_Conquered_Unhulde/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Plan021/MaidShipyardIcon.png",
    "new_path": "/skins/Plan021/The_Conquered_Unhulde/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/015/Banner.png",
    "new_path": "/skins/015/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/015/Icon.png",
    "new_path": "/skins/015/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/015/ChibiIcon.png",
    "new_path": "/skins/015/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/015/ShipyardIcon.png",
    "new_path": "/skins/015/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/118/Banner.png",
    "new_path": "/skins/118/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/118/Icon.png",
    "new_path": "/skins/118/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/118/ChibiIcon.png",
    "new_path": "/skins/118/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/118/ShipyardIcon.png",
    "new_path": "/skins/118/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/118/WeddingBanner.png",
    "new_path": "/skins/118/Wedding/Banner.png"
  },
  {
    "old_path": "/images/skins/118/WeddingIcon.png",
    "new_path": "/skins/118/Wedding/Icon.png"
  },
  {
    "old_path": "/images/skins/118/WeddingChibiIcon.png",
    "new_path": "/skins/118/Wedding/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/118/WeddingShipyardIcon.png",
    "new_path": "/skins/118/Wedding/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/118/SpringBanner.png",
    "new_path": "/skins/118/The_Tale_of_Spring/Banner.png"
  },
  {
    "old_path": "/images/skins/118/SpringIcon.png",
    "new_path": "/skins/118/The_Tale_of_Spring/Icon.png"
  },
  {
    "old_path": "/images/skins/118/SpringChibiIcon.png",
    "new_path": "/skins/118/The_Tale_of_Spring/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/118/SpringShipyardIcon.png",
    "new_path": "/skins/118/The_Tale_of_Spring/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/118/PartyBanner.png",
    "new_path": "/skins/118/Dawns_Paean/Banner.png"
  },
  {
    "old_path": "/images/skins/118/PartyIcon.png",
    "new_path": "/skins/118/Dawns_Paean/Icon.png"
  },
  {
    "old_path": "/images/skins/118/PartyChibiIcon.png",
    "new_path": "/skins/118/Dawns_Paean/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/118/PartyShipyardIcon.png",
    "new_path": "/skins/118/Dawns_Paean/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/118/CollabChibiIcon.png",
    "new_path": "/skins/118/Heritage_of_Yu_City/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/118/CollabShipyardIcon.png",
    "new_path": "/skins/118/Heritage_of_Yu_City/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/262/Banner.png",
    "new_path": "/skins/262/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/262/Icon.png",
    "new_path": "/skins/262/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/262/ChibiIcon.png",
    "new_path": "/skins/262/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/262/ShipyardIcon.png",
    "new_path": "/skins/262/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/262/PrisonBanner.png",
    "new_path": "/skins/262/Shackled_Saule/Banner.png"
  },
  {
    "old_path": "/images/skins/262/PrisonIcon.png",
    "new_path": "/skins/262/Shackled_Saule/Icon.png"
  },
  {
    "old_path": "/images/skins/262/PrisonChibiIcon.png",
    "new_path": "/skins/262/Shackled_Saule/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/262/PrisonShipyardIcon.png",
    "new_path": "/skins/262/Shackled_Saule/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/262/Special_ExerciseBanner.png",
    "new_path": "/skins/262/Not_Cut_Out_For_This/Banner.png"
  },
  {
    "old_path": "/images/skins/262/Special_ExerciseIcon.png",
    "new_path": "/skins/262/Not_Cut_Out_For_This/Icon.png"
  },
  {
    "old_path": "/images/skins/262/Special_ExerciseChibiIcon.png",
    "new_path": "/skins/262/Not_Cut_Out_For_This/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/262/Special_ExerciseShipyardIcon.png",
    "new_path": "/skins/262/Not_Cut_Out_For_This/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/155/Banner.png",
    "new_path": "/skins/155/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/155/Icon.png",
    "new_path": "/skins/155/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/155/ChibiIcon.png",
    "new_path": "/skins/155/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/155/ShipyardIcon.png",
    "new_path": "/skins/155/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/155/KaiBanner.png",
    "new_path": "/skins/155/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/155/KaiIcon.png",
    "new_path": "/skins/155/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/155/KaiChibiIcon.png",
    "new_path": "/skins/155/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/155/KaiShipyardIcon.png",
    "new_path": "/skins/155/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/155/WeddingBanner.png",
    "new_path": "/skins/155/Wedding/Banner.png"
  },
  {
    "old_path": "/images/skins/155/WeddingIcon.png",
    "new_path": "/skins/155/Wedding/Icon.png"
  },
  {
    "old_path": "/images/skins/155/WeddingChibiIcon.png",
    "new_path": "/skins/155/Wedding/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/155/WeddingShipyardIcon.png",
    "new_path": "/skins/155/Wedding/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/155/HalloweenBanner.png",
    "new_path": "/skins/155/Witch_in_Ambush/Banner.png"
  },
  {
    "old_path": "/images/skins/155/HalloweenIcon.png",
    "new_path": "/skins/155/Witch_in_Ambush/Icon.png"
  },
  {
    "old_path": "/images/skins/155/HalloweenChibiIcon.png",
    "new_path": "/skins/155/Witch_in_Ambush/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/155/HalloweenShipyardIcon.png",
    "new_path": "/skins/155/Witch_in_Ambush/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/155/NicoNicoBanner.png",
    "new_path": "/skins/155/NicoNico/Banner.png"
  },
  {
    "old_path": "/images/skins/155/NicoNicoIcon.png",
    "new_path": "/skins/155/NicoNico/Icon.png"
  },
  {
    "old_path": "/images/skins/155/NicoNicoShipyardIcon.png",
    "new_path": "/skins/155/NicoNico/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/155/RockBanner.png",
    "new_path": "/skins/155/Rock_n_Demon/Banner.png"
  },
  {
    "old_path": "/images/skins/155/RockIcon.png",
    "new_path": "/skins/155/Rock_n_Demon/Icon.png"
  },
  {
    "old_path": "/images/skins/155/RockChibiIcon.png",
    "new_path": "/skins/155/Rock_n_Demon/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/155/RockShipyardIcon.png",
    "new_path": "/skins/155/Rock_n_Demon/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/155/SpringBanner.png",
    "new_path": "/skins/155/Lunar_Demon/Banner.png"
  },
  {
    "old_path": "/images/skins/155/SpringIcon.png",
    "new_path": "/skins/155/Lunar_Demon/Icon.png"
  },
  {
    "old_path": "/images/skins/155/SpringChibiIcon.png",
    "new_path": "/skins/155/Lunar_Demon/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/155/SpringShipyardIcon.png",
    "new_path": "/skins/155/Lunar_Demon/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/155/CoCoBanner.png",
    "new_path": "/skins/155/Grade_A_Sailor_Uniform/Banner.png"
  },
  {
    "old_path": "/images/skins/155/CoCoIcon.png",
    "new_path": "/skins/155/Grade_A_Sailor_Uniform/Icon.png"
  },
  {
    "old_path": "/images/skins/155/CoCoChibiIcon.png",
    "new_path": "/skins/155/Grade_A_Sailor_Uniform/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/155/CoCoShipyardIcon.png",
    "new_path": "/skins/155/Grade_A_Sailor_Uniform/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/155/BlurayBanner.png",
    "new_path": "/skins/155/Covert_Ops_Cloak/Banner.png"
  },
  {
    "old_path": "/images/skins/155/BlurayIcon.png",
    "new_path": "/skins/155/Covert_Ops_Cloak/Icon.png"
  },
  {
    "old_path": "/images/skins/155/BlurayChibiIcon.png",
    "new_path": "/skins/155/Covert_Ops_Cloak/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/155/BlurayShipyardIcon.png",
    "new_path": "/skins/155/Covert_Ops_Cloak/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/155/IdolBanner.png",
    "new_path": "/skins/155/LowKey_Idol_Confused/Banner.png"
  },
  {
    "old_path": "/images/skins/155/IdolIcon.png",
    "new_path": "/skins/155/LowKey_Idol_Confused/Icon.png"
  },
  {
    "old_path": "/images/skins/155/IdolChibiIcon.png",
    "new_path": "/skins/155/LowKey_Idol_Confused/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/155/IdolShipyardIcon.png",
    "new_path": "/skins/155/LowKey_Idol_Confused/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/155/New_YearBanner.png",
    "new_path": "/skins/155/Pulse_of_the_New_Year/Banner.png"
  },
  {
    "old_path": "/images/skins/155/New_YearIcon.png",
    "new_path": "/skins/155/Pulse_of_the_New_Year/Icon.png"
  },
  {
    "old_path": "/images/skins/155/New_YearChibiIcon.png",
    "new_path": "/skins/155/Pulse_of_the_New_Year/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/155/New_YearShipyardIcon.png",
    "new_path": "/skins/155/Pulse_of_the_New_Year/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/155/PartyBanner.png",
    "new_path": "/skins/155/Nightfall_Raiment/Banner.png"
  },
  {
    "old_path": "/images/skins/155/PartyIcon.png",
    "new_path": "/skins/155/Nightfall_Raiment/Icon.png"
  },
  {
    "old_path": "/images/skins/155/PartyChibiIcon.png",
    "new_path": "/skins/155/Nightfall_Raiment/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/155/PartyShipyardIcon.png",
    "new_path": "/skins/155/Nightfall_Raiment/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/155/Bluray2Banner.png",
    "new_path": "/skins/155/OffDuty_Battle_Station_Gear/Banner.png"
  },
  {
    "old_path": "/images/skins/155/Bluray2Icon.png",
    "new_path": "/skins/155/OffDuty_Battle_Station_Gear/Icon.png"
  },
  {
    "old_path": "/images/skins/155/Bluray2ChibiIcon.png",
    "new_path": "/skins/155/OffDuty_Battle_Station_Gear/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/155/Bluray2ShipyardIcon.png",
    "new_path": "/skins/155/OffDuty_Battle_Station_Gear/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/155/Spring2Banner.png",
    "new_path": "/skins/155/Dynasty_Shipgirl/Banner.png"
  },
  {
    "old_path": "/images/skins/155/Spring2Icon.png",
    "new_path": "/skins/155/Dynasty_Shipgirl/Icon.png"
  },
  {
    "old_path": "/images/skins/155/Spring2ChibiIcon.png",
    "new_path": "/skins/155/Dynasty_Shipgirl/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/155/Spring2ShipyardIcon.png",
    "new_path": "/skins/155/Dynasty_Shipgirl/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/406/Banner.png",
    "new_path": "/skins/406/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/406/Icon.png",
    "new_path": "/skins/406/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/406/ChibiIcon.png",
    "new_path": "/skins/406/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/406/ShipyardIcon.png",
    "new_path": "/skins/406/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/406/CasualBanner.png",
    "new_path": "/skins/406/Sunday_Aquarium_Visit/Banner.png"
  },
  {
    "old_path": "/images/skins/406/CasualIcon.png",
    "new_path": "/skins/406/Sunday_Aquarium_Visit/Icon.png"
  },
  {
    "old_path": "/images/skins/406/CasualChibiIcon.png",
    "new_path": "/skins/406/Sunday_Aquarium_Visit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/406/CasualShipyardIcon.png",
    "new_path": "/skins/406/Sunday_Aquarium_Visit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Plan010/Banner.png",
    "new_path": "/skins/Plan010/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/Plan010/Icon.png",
    "new_path": "/skins/Plan010/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/Plan010/ChibiIcon.png",
    "new_path": "/skins/Plan010/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Plan010/ShipyardIcon.png",
    "new_path": "/skins/Plan010/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Plan010/WeddingBanner.png",
    "new_path": "/skins/Plan010/Wedding/Banner.png"
  },
  {
    "old_path": "/images/skins/Plan010/WeddingIcon.png",
    "new_path": "/skins/Plan010/Wedding/Icon.png"
  },
  {
    "old_path": "/images/skins/Plan010/WeddingChibiIcon.png",
    "new_path": "/skins/Plan010/Wedding/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Plan010/WeddingShipyardIcon.png",
    "new_path": "/skins/Plan010/Wedding/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Plan010/SpringBanner.png",
    "new_path": "/skins/Plan010/Soft_Voice_of_Spring/Banner.png"
  },
  {
    "old_path": "/images/skins/Plan010/SpringIcon.png",
    "new_path": "/skins/Plan010/Soft_Voice_of_Spring/Icon.png"
  },
  {
    "old_path": "/images/skins/Plan010/SpringChibiIcon.png",
    "new_path": "/skins/Plan010/Soft_Voice_of_Spring/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Plan010/SpringShipyardIcon.png",
    "new_path": "/skins/Plan010/Soft_Voice_of_Spring/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/10074/Banner.png",
    "new_path": "/skins/10074/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/10074/Icon.png",
    "new_path": "/skins/10074/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/10074/ChibiIcon.png",
    "new_path": "/skins/10074/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/10074/ShipyardIcon.png",
    "new_path": "/skins/10074/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/10074/FestivalBanner.png",
    "new_path": "/skins/10074/Midsummer_Relaxation/Banner.png"
  },
  {
    "old_path": "/images/skins/10074/FestivalIcon.png",
    "new_path": "/skins/10074/Midsummer_Relaxation/Icon.png"
  },
  {
    "old_path": "/images/skins/10074/FestivalChibiIcon.png",
    "new_path": "/skins/10074/Midsummer_Relaxation/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/10074/FestivalShipyardIcon.png",
    "new_path": "/skins/10074/Midsummer_Relaxation/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/407/Banner.png",
    "new_path": "/skins/407/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/407/Icon.png",
    "new_path": "/skins/407/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/407/ChibiIcon.png",
    "new_path": "/skins/407/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/407/ShipyardIcon.png",
    "new_path": "/skins/407/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/407/CasualBanner.png",
    "new_path": "/skins/407/Gorgeous_Speedstar/Banner.png"
  },
  {
    "old_path": "/images/skins/407/CasualIcon.png",
    "new_path": "/skins/407/Gorgeous_Speedstar/Icon.png"
  },
  {
    "old_path": "/images/skins/407/CasualChibiIcon.png",
    "new_path": "/skins/407/Gorgeous_Speedstar/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/407/CasualShipyardIcon.png",
    "new_path": "/skins/407/Gorgeous_Speedstar/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/407/SportBanner.png",
    "new_path": "/skins/407/Showy_Sports_Star/Banner.png"
  },
  {
    "old_path": "/images/skins/407/SportIcon.png",
    "new_path": "/skins/407/Showy_Sports_Star/Icon.png"
  },
  {
    "old_path": "/images/skins/407/SportChibiIcon.png",
    "new_path": "/skins/407/Showy_Sports_Star/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/407/SportShipyardIcon.png",
    "new_path": "/skins/407/Showy_Sports_Star/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/263/Banner.png",
    "new_path": "/skins/263/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/263/Icon.png",
    "new_path": "/skins/263/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/263/ChibiIcon.png",
    "new_path": "/skins/263/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/263/ShipyardIcon.png",
    "new_path": "/skins/263/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/263/HalloweenBanner.png",
    "new_path": "/skins/263/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/263/HalloweenIcon.png",
    "new_path": "/skins/263/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/263/HalloweenChibiIcon.png",
    "new_path": "/skins/263/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/263/HalloweenShipyardIcon.png",
    "new_path": "/skins/263/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/263/KaiBanner.png",
    "new_path": "/skins/263/Trickster_Black_Rabbit/Banner.png"
  },
  {
    "old_path": "/images/skins/263/KaiIcon.png",
    "new_path": "/skins/263/Trickster_Black_Rabbit/Icon.png"
  },
  {
    "old_path": "/images/skins/263/KaiChibiIcon.png",
    "new_path": "/skins/263/Trickster_Black_Rabbit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/263/KaiShipyardIcon.png",
    "new_path": "/skins/263/Trickster_Black_Rabbit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/050/Banner.png",
    "new_path": "/skins/050/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/050/Icon.png",
    "new_path": "/skins/050/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/050/ChibiIcon.png",
    "new_path": "/skins/050/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/050/ShipyardIcon.png",
    "new_path": "/skins/050/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/050/SchoolBanner.png",
    "new_path": "/skins/050/AfterSchool_Ace/Banner.png"
  },
  {
    "old_path": "/images/skins/050/SchoolIcon.png",
    "new_path": "/skins/050/AfterSchool_Ace/Icon.png"
  },
  {
    "old_path": "/images/skins/050/SchoolChibiIcon.png",
    "new_path": "/skins/050/AfterSchool_Ace/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/050/SchoolShipyardIcon.png",
    "new_path": "/skins/050/AfterSchool_Ace/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/050/SportBanner.png",
    "new_path": "/skins/050/Black_Ace/Banner.png"
  },
  {
    "old_path": "/images/skins/050/SportIcon.png",
    "new_path": "/skins/050/Black_Ace/Icon.png"
  },
  {
    "old_path": "/images/skins/050/SportChibiIcon.png",
    "new_path": "/skins/050/Black_Ace/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/050/SportShipyardIcon.png",
    "new_path": "/skins/050/Black_Ace/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/050/PartyBanner.png",
    "new_path": "/skins/050/Evening_Breeze_Minuet/Banner.png"
  },
  {
    "old_path": "/images/skins/050/PartyIcon.png",
    "new_path": "/skins/050/Evening_Breeze_Minuet/Icon.png"
  },
  {
    "old_path": "/images/skins/050/PartyChibiIcon.png",
    "new_path": "/skins/050/Evening_Breeze_Minuet/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/050/PartyShipyardIcon.png",
    "new_path": "/skins/050/Evening_Breeze_Minuet/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/050/New_YearBanner.png",
    "new_path": "/skins/050/Aces_Travel_Journal/Banner.png"
  },
  {
    "old_path": "/images/skins/050/New_YearIcon.png",
    "new_path": "/skins/050/Aces_Travel_Journal/Icon.png"
  },
  {
    "old_path": "/images/skins/050/New_YearChibiIcon.png",
    "new_path": "/skins/050/Aces_Travel_Journal/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/050/New_YearShipyardIcon.png",
    "new_path": "/skins/050/Aces_Travel_Journal/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/478/Banner.png",
    "new_path": "/skins/478/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/478/Icon.png",
    "new_path": "/skins/478/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/478/ChibiIcon.png",
    "new_path": "/skins/478/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/478/ShipyardIcon.png",
    "new_path": "/skins/478/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/403/Banner.png",
    "new_path": "/skins/403/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/403/Icon.png",
    "new_path": "/skins/403/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/403/ChibiIcon.png",
    "new_path": "/skins/403/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/403/ShipyardIcon.png",
    "new_path": "/skins/403/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/403/SleepyBanner.png",
    "new_path": "/skins/403/Comfy_Cotton_Jammies/Banner.png"
  },
  {
    "old_path": "/images/skins/403/SleepyIcon.png",
    "new_path": "/skins/403/Comfy_Cotton_Jammies/Icon.png"
  },
  {
    "old_path": "/images/skins/403/SleepyChibiIcon.png",
    "new_path": "/skins/403/Comfy_Cotton_Jammies/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/403/SleepyShipyardIcon.png",
    "new_path": "/skins/403/Comfy_Cotton_Jammies/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/086/Banner.png",
    "new_path": "/skins/086/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/086/Icon.png",
    "new_path": "/skins/086/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/086/ChibiIcon.png",
    "new_path": "/skins/086/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/086/ShipyardIcon.png",
    "new_path": "/skins/086/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/115/Banner.png",
    "new_path": "/skins/115/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/115/Icon.png",
    "new_path": "/skins/115/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/115/ChibiIcon.png",
    "new_path": "/skins/115/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/115/ShipyardIcon.png",
    "new_path": "/skins/115/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/115/WeddingBanner.png",
    "new_path": "/skins/115/Wedding/Banner.png"
  },
  {
    "old_path": "/images/skins/115/WeddingIcon.png",
    "new_path": "/skins/115/Wedding/Icon.png"
  },
  {
    "old_path": "/images/skins/115/WeddingChibiIcon.png",
    "new_path": "/skins/115/Wedding/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/115/WeddingShipyardIcon.png",
    "new_path": "/skins/115/Wedding/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/115/SpringBanner.png",
    "new_path": "/skins/115/Iridescent_Rosa/Banner.png"
  },
  {
    "old_path": "/images/skins/115/SpringIcon.png",
    "new_path": "/skins/115/Iridescent_Rosa/Icon.png"
  },
  {
    "old_path": "/images/skins/115/SpringChibiIcon.png",
    "new_path": "/skins/115/Iridescent_Rosa/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/115/SpringShipyardIcon.png",
    "new_path": "/skins/115/Iridescent_Rosa/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/115/BlurayBanner.png",
    "new_path": "/skins/115/Serene_Steel/Banner.png"
  },
  {
    "old_path": "/images/skins/115/BlurayIcon.png",
    "new_path": "/skins/115/Serene_Steel/Icon.png"
  },
  {
    "old_path": "/images/skins/115/BlurayChibiIcon.png",
    "new_path": "/skins/115/Serene_Steel/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/115/BlurayShipyardIcon.png",
    "new_path": "/skins/115/Serene_Steel/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/115/PartyBanner.png",
    "new_path": "/skins/115/The_Noble_Attendant/Banner.png"
  },
  {
    "old_path": "/images/skins/115/PartyIcon.png",
    "new_path": "/skins/115/The_Noble_Attendant/Icon.png"
  },
  {
    "old_path": "/images/skins/115/PartyChibiIcon.png",
    "new_path": "/skins/115/The_Noble_Attendant/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/115/PartyShipyardIcon.png",
    "new_path": "/skins/115/The_Noble_Attendant/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/115/CasualBanner.png",
    "new_path": "/skins/115/Shopping_with_the_Head_Maid/Banner.png"
  },
  {
    "old_path": "/images/skins/115/CasualIcon.png",
    "new_path": "/skins/115/Shopping_with_the_Head_Maid/Icon.png"
  },
  {
    "old_path": "/images/skins/115/CasualChibiIcon.png",
    "new_path": "/skins/115/Shopping_with_the_Head_Maid/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/115/CasualShipyardIcon.png",
    "new_path": "/skins/115/Shopping_with_the_Head_Maid/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/115/PizzaBanner.png",
    "new_path": "/skins/115/PipingHot_Perfection/Banner.png"
  },
  {
    "old_path": "/images/skins/115/PizzaIcon.png",
    "new_path": "/skins/115/PipingHot_Perfection/Icon.png"
  },
  {
    "old_path": "/images/skins/115/PizzaChibiIcon.png",
    "new_path": "/skins/115/PipingHot_Perfection/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/115/PizzaShipyardIcon.png",
    "new_path": "/skins/115/PipingHot_Perfection/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/115/New_YearBanner.png",
    "new_path": "/skins/115/Folded_Fascination/Banner.png"
  },
  {
    "old_path": "/images/skins/115/New_YearIcon.png",
    "new_path": "/skins/115/Folded_Fascination/Icon.png"
  },
  {
    "old_path": "/images/skins/115/New_YearChibiIcon.png",
    "new_path": "/skins/115/Folded_Fascination/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/115/New_YearShipyardIcon.png",
    "new_path": "/skins/115/Folded_Fascination/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/018/Banner.png",
    "new_path": "/skins/018/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/018/Icon.png",
    "new_path": "/skins/018/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/018/ChibiIcon.png",
    "new_path": "/skins/018/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/018/ShipyardIcon.png",
    "new_path": "/skins/018/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/018/HalloweenBanner.png",
    "new_path": "/skins/018/Cutie_Pumpkin_Pie/Banner.png"
  },
  {
    "old_path": "/images/skins/018/HalloweenIcon.png",
    "new_path": "/skins/018/Cutie_Pumpkin_Pie/Icon.png"
  },
  {
    "old_path": "/images/skins/018/HalloweenChibiIcon.png",
    "new_path": "/skins/018/Cutie_Pumpkin_Pie/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/018/HalloweenShipyardIcon.png",
    "new_path": "/skins/018/Cutie_Pumpkin_Pie/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/428/Banner.png",
    "new_path": "/skins/428/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/428/Icon.png",
    "new_path": "/skins/428/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/428/ChibiIcon.png",
    "new_path": "/skins/428/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/428/ShipyardIcon.png",
    "new_path": "/skins/428/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/428/SpringBanner.png",
    "new_path": "/skins/428/Dapper_Gangstress/Banner.png"
  },
  {
    "old_path": "/images/skins/428/SpringIcon.png",
    "new_path": "/skins/428/Dapper_Gangstress/Icon.png"
  },
  {
    "old_path": "/images/skins/428/SpringChibiIcon.png",
    "new_path": "/skins/428/Dapper_Gangstress/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/428/SpringShipyardIcon.png",
    "new_path": "/skins/428/Dapper_Gangstress/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/428/PartyBanner.png",
    "new_path": "/skins/428/Empress_in_the_Silk_Seat/Banner.png"
  },
  {
    "old_path": "/images/skins/428/PartyIcon.png",
    "new_path": "/skins/428/Empress_in_the_Silk_Seat/Icon.png"
  },
  {
    "old_path": "/images/skins/428/PartyChibiIcon.png",
    "new_path": "/skins/428/Empress_in_the_Silk_Seat/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/428/PartyShipyardIcon.png",
    "new_path": "/skins/428/Empress_in_the_Silk_Seat/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/428/New_YearBanner.png",
    "new_path": "/skins/428/Night_Skys_Brilliant_Blue_Blossoms/Banner.png"
  },
  {
    "old_path": "/images/skins/428/New_YearIcon.png",
    "new_path": "/skins/428/Night_Skys_Brilliant_Blue_Blossoms/Icon.png"
  },
  {
    "old_path": "/images/skins/428/New_YearChibiIcon.png",
    "new_path": "/skins/428/Night_Skys_Brilliant_Blue_Blossoms/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/428/New_YearShipyardIcon.png",
    "new_path": "/skins/428/Night_Skys_Brilliant_Blue_Blossoms/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/405/Banner.png",
    "new_path": "/skins/405/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/405/Icon.png",
    "new_path": "/skins/405/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/405/ChibiIcon.png",
    "new_path": "/skins/405/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/405/ShipyardIcon.png",
    "new_path": "/skins/405/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/405/CasualBanner.png",
    "new_path": "/skins/405/Rider_of_Red/Banner.png"
  },
  {
    "old_path": "/images/skins/405/CasualIcon.png",
    "new_path": "/skins/405/Rider_of_Red/Icon.png"
  },
  {
    "old_path": "/images/skins/405/CasualChibiIcon.png",
    "new_path": "/skins/405/Rider_of_Red/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/405/CasualShipyardIcon.png",
    "new_path": "/skins/405/Rider_of_Red/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/405/SpringBanner.png",
    "new_path": "/skins/405/Fruitful_Snow_of_an_Auspicious_Year/Banner.png"
  },
  {
    "old_path": "/images/skins/405/SpringIcon.png",
    "new_path": "/skins/405/Fruitful_Snow_of_an_Auspicious_Year/Icon.png"
  },
  {
    "old_path": "/images/skins/405/SpringChibiIcon.png",
    "new_path": "/skins/405/Fruitful_Snow_of_an_Auspicious_Year/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/405/SpringShipyardIcon.png",
    "new_path": "/skins/405/Fruitful_Snow_of_an_Auspicious_Year/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/250/Banner.png",
    "new_path": "/skins/250/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/250/Icon.png",
    "new_path": "/skins/250/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/250/ChibiIcon.png",
    "new_path": "/skins/250/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/250/ShipyardIcon.png",
    "new_path": "/skins/250/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/250/PartyBanner.png",
    "new_path": "/skins/250/Beacon_of_the_Iron_Blood/Banner.png"
  },
  {
    "old_path": "/images/skins/250/PartyIcon.png",
    "new_path": "/skins/250/Beacon_of_the_Iron_Blood/Icon.png"
  },
  {
    "old_path": "/images/skins/250/PartyChibiIcon.png",
    "new_path": "/skins/250/Beacon_of_the_Iron_Blood/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/250/PartyShipyardIcon.png",
    "new_path": "/skins/250/Beacon_of_the_Iron_Blood/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/250/MaidBanner.png",
    "new_path": "/skins/250/IronBlack_Elysium/Banner.png"
  },
  {
    "old_path": "/images/skins/250/MaidIcon.png",
    "new_path": "/skins/250/IronBlack_Elysium/Icon.png"
  },
  {
    "old_path": "/images/skins/250/MaidChibiIcon.png",
    "new_path": "/skins/250/IronBlack_Elysium/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/250/MaidShipyardIcon.png",
    "new_path": "/skins/250/IronBlack_Elysium/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Collab006/Banner.png",
    "new_path": "/skins/Collab006/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/Collab006/Icon.png",
    "new_path": "/skins/Collab006/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/Collab006/ChibiIcon.png",
    "new_path": "/skins/Collab006/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Collab006/ShipyardIcon.png",
    "new_path": "/skins/Collab006/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Collab006/CollabIcon.png",
    "new_path": "/skins/Collab006/Goddesses_Smile/Icon.png"
  },
  {
    "old_path": "/images/skins/Collab006/CollabChibiIcon.png",
    "new_path": "/skins/Collab006/Goddesses_Smile/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Collab006/CollabShipyardIcon.png",
    "new_path": "/skins/Collab006/Goddesses_Smile/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/408/Banner.png",
    "new_path": "/skins/408/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/408/Icon.png",
    "new_path": "/skins/408/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/408/ChibiIcon.png",
    "new_path": "/skins/408/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/408/ShipyardIcon.png",
    "new_path": "/skins/408/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/408/SummerBanner.png",
    "new_path": "/skins/408/White_Princess/Banner.png"
  },
  {
    "old_path": "/images/skins/408/SummerIcon.png",
    "new_path": "/skins/408/White_Princess/Icon.png"
  },
  {
    "old_path": "/images/skins/408/SummerChibiIcon.png",
    "new_path": "/skins/408/White_Princess/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/408/SummerShipyardIcon.png",
    "new_path": "/skins/408/White_Princess/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/408/SpringBanner.png",
    "new_path": "/skins/408/Fair_Maid_Spring/Banner.png"
  },
  {
    "old_path": "/images/skins/408/SpringIcon.png",
    "new_path": "/skins/408/Fair_Maid_Spring/Icon.png"
  },
  {
    "old_path": "/images/skins/408/SpringChibiIcon.png",
    "new_path": "/skins/408/Fair_Maid_Spring/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/408/SpringShipyardIcon.png",
    "new_path": "/skins/408/Fair_Maid_Spring/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/408/PartyBanner.png",
    "new_path": "/skins/408/Pop_the_Cork/Banner.png"
  },
  {
    "old_path": "/images/skins/408/PartyIcon.png",
    "new_path": "/skins/408/Pop_the_Cork/Icon.png"
  },
  {
    "old_path": "/images/skins/408/PartyChibiIcon.png",
    "new_path": "/skins/408/Pop_the_Cork/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/408/PartyShipyardIcon.png",
    "new_path": "/skins/408/Pop_the_Cork/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/408/BunnyBanner.png",
    "new_path": "/skins/408/Addled_Attendant/Banner.png"
  },
  {
    "old_path": "/images/skins/408/BunnyIcon.png",
    "new_path": "/skins/408/Addled_Attendant/Icon.png"
  },
  {
    "old_path": "/images/skins/408/BunnyChibiIcon.png",
    "new_path": "/skins/408/Addled_Attendant/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/408/BunnyShipyardIcon.png",
    "new_path": "/skins/408/Addled_Attendant/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Collab003/Banner.png",
    "new_path": "/skins/Collab003/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/Collab003/Icon.png",
    "new_path": "/skins/Collab003/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/Collab003/ChibiIcon.png",
    "new_path": "/skins/Collab003/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Collab003/ShipyardIcon.png",
    "new_path": "/skins/Collab003/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/446/Banner.png",
    "new_path": "/skins/446/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/446/Icon.png",
    "new_path": "/skins/446/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/446/ChibiIcon.png",
    "new_path": "/skins/446/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/446/ShipyardIcon.png",
    "new_path": "/skins/446/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/446/SportBanner.png",
    "new_path": "/skins/446/UpAndComing_Infielder/Banner.png"
  },
  {
    "old_path": "/images/skins/446/SportIcon.png",
    "new_path": "/skins/446/UpAndComing_Infielder/Icon.png"
  },
  {
    "old_path": "/images/skins/446/SportChibiIcon.png",
    "new_path": "/skins/446/UpAndComing_Infielder/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/446/SportShipyardIcon.png",
    "new_path": "/skins/446/UpAndComing_Infielder/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/071/Banner.png",
    "new_path": "/skins/071/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/071/Icon.png",
    "new_path": "/skins/071/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/071/ChibiIcon.png",
    "new_path": "/skins/071/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/071/ShipyardIcon.png",
    "new_path": "/skins/071/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/071/KaiBanner.png",
    "new_path": "/skins/071/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/071/KaiIcon.png",
    "new_path": "/skins/071/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/071/KaiChibiIcon.png",
    "new_path": "/skins/071/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/071/KaiShipyardIcon.png",
    "new_path": "/skins/071/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/514/Banner.png",
    "new_path": "/skins/514/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/514/Icon.png",
    "new_path": "/skins/514/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/514/ChibiIcon.png",
    "new_path": "/skins/514/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/514/ShipyardIcon.png",
    "new_path": "/skins/514/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/514/BunnyBanner.png",
    "new_path": "/skins/514/Sheepish_Sapphire/Banner.png"
  },
  {
    "old_path": "/images/skins/514/BunnyIcon.png",
    "new_path": "/skins/514/Sheepish_Sapphire/Icon.png"
  },
  {
    "old_path": "/images/skins/514/BunnyChibiIcon.png",
    "new_path": "/skins/514/Sheepish_Sapphire/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/514/BunnyShipyardIcon.png",
    "new_path": "/skins/514/Sheepish_Sapphire/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/514/HalloweenBanner.png",
    "new_path": "/skins/514/Castle_Tales/Banner.png"
  },
  {
    "old_path": "/images/skins/514/HalloweenIcon.png",
    "new_path": "/skins/514/Castle_Tales/Icon.png"
  },
  {
    "old_path": "/images/skins/514/HalloweenChibiIcon.png",
    "new_path": "/skins/514/Castle_Tales/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/514/HalloweenShipyardIcon.png",
    "new_path": "/skins/514/Castle_Tales/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/443/Banner.png",
    "new_path": "/skins/443/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/443/Icon.png",
    "new_path": "/skins/443/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/443/ChibiIcon.png",
    "new_path": "/skins/443/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/443/ShipyardIcon.png",
    "new_path": "/skins/443/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/443/SportBanner.png",
    "new_path": "/skins/443/ScorchingHot_Training/Banner.png"
  },
  {
    "old_path": "/images/skins/443/SportIcon.png",
    "new_path": "/skins/443/ScorchingHot_Training/Icon.png"
  },
  {
    "old_path": "/images/skins/443/SportChibiIcon.png",
    "new_path": "/skins/443/ScorchingHot_Training/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/443/SportShipyardIcon.png",
    "new_path": "/skins/443/ScorchingHot_Training/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/443/SpringBanner.png",
    "new_path": "/skins/443/Kung_Fu_Cruiser/Banner.png"
  },
  {
    "old_path": "/images/skins/443/SpringIcon.png",
    "new_path": "/skins/443/Kung_Fu_Cruiser/Icon.png"
  },
  {
    "old_path": "/images/skins/443/SpringChibiIcon.png",
    "new_path": "/skins/443/Kung_Fu_Cruiser/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/443/SpringShipyardIcon.png",
    "new_path": "/skins/443/Kung_Fu_Cruiser/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/443/CasualBanner.png",
    "new_path": "/skins/443/DayOff_Date/Banner.png"
  },
  {
    "old_path": "/images/skins/443/CasualIcon.png",
    "new_path": "/skins/443/DayOff_Date/Icon.png"
  },
  {
    "old_path": "/images/skins/443/CasualChibiIcon.png",
    "new_path": "/skins/443/DayOff_Date/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/443/CasualShipyardIcon.png",
    "new_path": "/skins/443/DayOff_Date/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/533/Banner.png",
    "new_path": "/skins/533/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/533/Icon.png",
    "new_path": "/skins/533/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/533/ChibiIcon.png",
    "new_path": "/skins/533/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/533/ShipyardIcon.png",
    "new_path": "/skins/533/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/533/SpringBanner.png",
    "new_path": "/skins/533/Tales_from_the_Empery/Banner.png"
  },
  {
    "old_path": "/images/skins/533/SpringIcon.png",
    "new_path": "/skins/533/Tales_from_the_Empery/Icon.png"
  },
  {
    "old_path": "/images/skins/533/SpringChibiIcon.png",
    "new_path": "/skins/533/Tales_from_the_Empery/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/533/SpringShipyardIcon.png",
    "new_path": "/skins/533/Tales_from_the_Empery/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/031/Banner.png",
    "new_path": "/skins/031/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/031/Icon.png",
    "new_path": "/skins/031/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/031/ChibiIcon.png",
    "new_path": "/skins/031/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/031/ShipyardIcon.png",
    "new_path": "/skins/031/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/087/Banner.png",
    "new_path": "/skins/087/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/087/Icon.png",
    "new_path": "/skins/087/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/087/ChibiIcon.png",
    "new_path": "/skins/087/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/087/ShipyardIcon.png",
    "new_path": "/skins/087/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/380/Banner.png",
    "new_path": "/skins/380/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/380/Icon.png",
    "new_path": "/skins/380/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/380/ChibiIcon.png",
    "new_path": "/skins/380/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/380/ShipyardIcon.png",
    "new_path": "/skins/380/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/380/CasualBanner.png",
    "new_path": "/skins/380/Mission_Relaxation/Banner.png"
  },
  {
    "old_path": "/images/skins/380/CasualIcon.png",
    "new_path": "/skins/380/Mission_Relaxation/Icon.png"
  },
  {
    "old_path": "/images/skins/380/CasualChibiIcon.png",
    "new_path": "/skins/380/Mission_Relaxation/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/380/CasualShipyardIcon.png",
    "new_path": "/skins/380/Mission_Relaxation/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/355/Banner.png",
    "new_path": "/skins/355/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/355/Icon.png",
    "new_path": "/skins/355/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/355/ChibiIcon.png",
    "new_path": "/skins/355/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/355/ShipyardIcon.png",
    "new_path": "/skins/355/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/355/CasualBanner.png",
    "new_path": "/skins/355/Budding_Painter/Banner.png"
  },
  {
    "old_path": "/images/skins/355/CasualIcon.png",
    "new_path": "/skins/355/Budding_Painter/Icon.png"
  },
  {
    "old_path": "/images/skins/355/CasualChibiIcon.png",
    "new_path": "/skins/355/Budding_Painter/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/355/CasualShipyardIcon.png",
    "new_path": "/skins/355/Budding_Painter/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/458/Banner.png",
    "new_path": "/skins/458/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/458/Icon.png",
    "new_path": "/skins/458/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/458/ChibiIcon.png",
    "new_path": "/skins/458/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/458/ShipyardIcon.png",
    "new_path": "/skins/458/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/458/SummerBanner.png",
    "new_path": "/skins/458/Summer_Lifeguard/Banner.png"
  },
  {
    "old_path": "/images/skins/458/SummerIcon.png",
    "new_path": "/skins/458/Summer_Lifeguard/Icon.png"
  },
  {
    "old_path": "/images/skins/458/SummerChibiIcon.png",
    "new_path": "/skins/458/Summer_Lifeguard/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/458/SummerShipyardIcon.png",
    "new_path": "/skins/458/Summer_Lifeguard/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/059/Banner.png",
    "new_path": "/skins/059/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/059/Icon.png",
    "new_path": "/skins/059/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/059/ChibiIcon.png",
    "new_path": "/skins/059/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/059/ShipyardIcon.png",
    "new_path": "/skins/059/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/415/Banner.png",
    "new_path": "/skins/415/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/415/Icon.png",
    "new_path": "/skins/415/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/415/ChibiIcon.png",
    "new_path": "/skins/415/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/415/ShipyardIcon.png",
    "new_path": "/skins/415/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/415/CasualBanner.png",
    "new_path": "/skins/415/Refreshing_Sundress/Banner.png"
  },
  {
    "old_path": "/images/skins/415/CasualIcon.png",
    "new_path": "/skins/415/Refreshing_Sundress/Icon.png"
  },
  {
    "old_path": "/images/skins/415/CasualChibiIcon.png",
    "new_path": "/skins/415/Refreshing_Sundress/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/415/CasualShipyardIcon.png",
    "new_path": "/skins/415/Refreshing_Sundress/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/447/Banner.png",
    "new_path": "/skins/447/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/447/Icon.png",
    "new_path": "/skins/447/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/447/ChibiIcon.png",
    "new_path": "/skins/447/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/447/ShipyardIcon.png",
    "new_path": "/skins/447/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/447/SportBanner.png",
    "new_path": "/skins/447/Cheer_Squad_on_Break/Banner.png"
  },
  {
    "old_path": "/images/skins/447/SportIcon.png",
    "new_path": "/skins/447/Cheer_Squad_on_Break/Icon.png"
  },
  {
    "old_path": "/images/skins/447/SportChibiIcon.png",
    "new_path": "/skins/447/Cheer_Squad_on_Break/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/447/SportShipyardIcon.png",
    "new_path": "/skins/447/Cheer_Squad_on_Break/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/005/Banner.png",
    "new_path": "/skins/005/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/005/Icon.png",
    "new_path": "/skins/005/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/005/ChibiIcon.png",
    "new_path": "/skins/005/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/005/ShipyardIcon.png",
    "new_path": "/skins/005/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/005/KaiBanner.png",
    "new_path": "/skins/005/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/005/KaiIcon.png",
    "new_path": "/skins/005/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/005/KaiChibiIcon.png",
    "new_path": "/skins/005/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/005/KaiShipyardIcon.png",
    "new_path": "/skins/005/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/005/SchoolBanner.png",
    "new_path": "/skins/005/Shopping_Carte_Blanche/Banner.png"
  },
  {
    "old_path": "/images/skins/005/SchoolIcon.png",
    "new_path": "/skins/005/Shopping_Carte_Blanche/Icon.png"
  },
  {
    "old_path": "/images/skins/005/SchoolChibiIcon.png",
    "new_path": "/skins/005/Shopping_Carte_Blanche/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/005/SchoolShipyardIcon.png",
    "new_path": "/skins/005/Shopping_Carte_Blanche/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/402/Banner.png",
    "new_path": "/skins/402/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/402/Icon.png",
    "new_path": "/skins/402/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/402/ChibiIcon.png",
    "new_path": "/skins/402/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/402/ShipyardIcon.png",
    "new_path": "/skins/402/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/402/SchoolBanner.png",
    "new_path": "/skins/402/Convenience_Store_Raid/Banner.png"
  },
  {
    "old_path": "/images/skins/402/SchoolIcon.png",
    "new_path": "/skins/402/Convenience_Store_Raid/Icon.png"
  },
  {
    "old_path": "/images/skins/402/SchoolChibiIcon.png",
    "new_path": "/skins/402/Convenience_Store_Raid/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/402/SchoolShipyardIcon.png",
    "new_path": "/skins/402/Convenience_Store_Raid/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/402/PartyBanner.png",
    "new_path": "/skins/402/Colorful_Ceremony/Banner.png"
  },
  {
    "old_path": "/images/skins/402/PartyIcon.png",
    "new_path": "/skins/402/Colorful_Ceremony/Icon.png"
  },
  {
    "old_path": "/images/skins/402/PartyChibiIcon.png",
    "new_path": "/skins/402/Colorful_Ceremony/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/402/PartyShipyardIcon.png",
    "new_path": "/skins/402/Colorful_Ceremony/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/356/Banner.png",
    "new_path": "/skins/356/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/356/Icon.png",
    "new_path": "/skins/356/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/356/ChibiIcon.png",
    "new_path": "/skins/356/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/356/ShipyardIcon.png",
    "new_path": "/skins/356/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/356/SummerBanner.png",
    "new_path": "/skins/356/Beachside_Undine/Banner.png"
  },
  {
    "old_path": "/images/skins/356/SummerIcon.png",
    "new_path": "/skins/356/Beachside_Undine/Icon.png"
  },
  {
    "old_path": "/images/skins/356/SummerChibiIcon.png",
    "new_path": "/skins/356/Beachside_Undine/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/356/SummerShipyardIcon.png",
    "new_path": "/skins/356/Beachside_Undine/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/356/SpringBanner.png",
    "new_path": "/skins/356/Sprightly_Spring_Wind/Banner.png"
  },
  {
    "old_path": "/images/skins/356/SpringIcon.png",
    "new_path": "/skins/356/Sprightly_Spring_Wind/Icon.png"
  },
  {
    "old_path": "/images/skins/356/SpringChibiIcon.png",
    "new_path": "/skins/356/Sprightly_Spring_Wind/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/356/SpringShipyardIcon.png",
    "new_path": "/skins/356/Sprightly_Spring_Wind/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Plan017/Banner.png",
    "new_path": "/skins/Plan017/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/Plan017/Icon.png",
    "new_path": "/skins/Plan017/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/Plan017/ChibiIcon.png",
    "new_path": "/skins/Plan017/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Plan017/ShipyardIcon.png",
    "new_path": "/skins/Plan017/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Plan017/New_YearBanner.png",
    "new_path": "/skins/Plan017/Lapis_Lazulis_First_Dream/Banner.png"
  },
  {
    "old_path": "/images/skins/Plan017/New_YearIcon.png",
    "new_path": "/skins/Plan017/Lapis_Lazulis_First_Dream/Icon.png"
  },
  {
    "old_path": "/images/skins/Plan017/New_YearChibiIcon.png",
    "new_path": "/skins/Plan017/Lapis_Lazulis_First_Dream/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Plan017/New_YearShipyardIcon.png",
    "new_path": "/skins/Plan017/Lapis_Lazulis_First_Dream/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/255/Banner.png",
    "new_path": "/skins/255/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/255/Icon.png",
    "new_path": "/skins/255/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/255/ChibiIcon.png",
    "new_path": "/skins/255/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/255/ShipyardIcon.png",
    "new_path": "/skins/255/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/255/KaiBanner.png",
    "new_path": "/skins/255/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/255/KaiIcon.png",
    "new_path": "/skins/255/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/255/KaiChibiIcon.png",
    "new_path": "/skins/255/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/255/KaiShipyardIcon.png",
    "new_path": "/skins/255/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/255/SpringBanner.png",
    "new_path": "/skins/255/The_Joy_of_Spring/Banner.png"
  },
  {
    "old_path": "/images/skins/255/SpringIcon.png",
    "new_path": "/skins/255/The_Joy_of_Spring/Icon.png"
  },
  {
    "old_path": "/images/skins/255/SpringChibiIcon.png",
    "new_path": "/skins/255/The_Joy_of_Spring/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/255/SpringShipyardIcon.png",
    "new_path": "/skins/255/The_Joy_of_Spring/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/494/Banner.png",
    "new_path": "/skins/494/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/494/Icon.png",
    "new_path": "/skins/494/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/494/ChibiIcon.png",
    "new_path": "/skins/494/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/494/ShipyardIcon.png",
    "new_path": "/skins/494/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/494/SpringBanner.png",
    "new_path": "/skins/494/Plum_Blossoms_Illumination/Banner.png"
  },
  {
    "old_path": "/images/skins/494/SpringIcon.png",
    "new_path": "/skins/494/Plum_Blossoms_Illumination/Icon.png"
  },
  {
    "old_path": "/images/skins/494/SpringChibiIcon.png",
    "new_path": "/skins/494/Plum_Blossoms_Illumination/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/494/SpringShipyardIcon.png",
    "new_path": "/skins/494/Plum_Blossoms_Illumination/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/436/Banner.png",
    "new_path": "/skins/436/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/436/Icon.png",
    "new_path": "/skins/436/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/436/ChibiIcon.png",
    "new_path": "/skins/436/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/436/ShipyardIcon.png",
    "new_path": "/skins/436/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/436/PrisonBanner.png",
    "new_path": "/skins/436/The_Captive_Cavalier/Banner.png"
  },
  {
    "old_path": "/images/skins/436/PrisonIcon.png",
    "new_path": "/skins/436/The_Captive_Cavalier/Icon.png"
  },
  {
    "old_path": "/images/skins/436/PrisonChibiIcon.png",
    "new_path": "/skins/436/The_Captive_Cavalier/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/436/PrisonShipyardIcon.png",
    "new_path": "/skins/436/The_Captive_Cavalier/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/436/CasualBanner.png",
    "new_path": "/skins/436/White_Cavaliers_Respite/Banner.png"
  },
  {
    "old_path": "/images/skins/436/CasualIcon.png",
    "new_path": "/skins/436/White_Cavaliers_Respite/Icon.png"
  },
  {
    "old_path": "/images/skins/436/CasualChibiIcon.png",
    "new_path": "/skins/436/White_Cavaliers_Respite/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/436/CasualShipyardIcon.png",
    "new_path": "/skins/436/White_Cavaliers_Respite/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/013/Banner.png",
    "new_path": "/skins/013/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/013/Icon.png",
    "new_path": "/skins/013/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/013/ChibiIcon.png",
    "new_path": "/skins/013/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/013/ShipyardIcon.png",
    "new_path": "/skins/013/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/530/Banner.png",
    "new_path": "/skins/530/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/530/Icon.png",
    "new_path": "/skins/530/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/530/ChibiIcon.png",
    "new_path": "/skins/530/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/530/ShipyardIcon.png",
    "new_path": "/skins/530/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/530/SpringBanner.png",
    "new_path": "/skins/530/Red_Chamber_of_Healing/Banner.png"
  },
  {
    "old_path": "/images/skins/530/SpringIcon.png",
    "new_path": "/skins/530/Red_Chamber_of_Healing/Icon.png"
  },
  {
    "old_path": "/images/skins/530/SpringChibiIcon.png",
    "new_path": "/skins/530/Red_Chamber_of_Healing/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/530/SpringShipyardIcon.png",
    "new_path": "/skins/530/Red_Chamber_of_Healing/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/376/Banner.png",
    "new_path": "/skins/376/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/376/Icon.png",
    "new_path": "/skins/376/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/376/ChibiIcon.png",
    "new_path": "/skins/376/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/376/ShipyardIcon.png",
    "new_path": "/skins/376/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/376/SpringBanner.png",
    "new_path": "/skins/376/The_Way_of_the_Dragon_Empery/Banner.png"
  },
  {
    "old_path": "/images/skins/376/SpringIcon.png",
    "new_path": "/skins/376/The_Way_of_the_Dragon_Empery/Icon.png"
  },
  {
    "old_path": "/images/skins/376/SpringChibiIcon.png",
    "new_path": "/skins/376/The_Way_of_the_Dragon_Empery/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/376/SpringShipyardIcon.png",
    "new_path": "/skins/376/The_Way_of_the_Dragon_Empery/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/376/CasualBanner.png",
    "new_path": "/skins/376/Gamer_Style/Banner.png"
  },
  {
    "old_path": "/images/skins/376/CasualIcon.png",
    "new_path": "/skins/376/Gamer_Style/Icon.png"
  },
  {
    "old_path": "/images/skins/376/CasualChibiIcon.png",
    "new_path": "/skins/376/Gamer_Style/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/376/CasualShipyardIcon.png",
    "new_path": "/skins/376/Gamer_Style/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/534/Banner.png",
    "new_path": "/skins/534/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/534/Icon.png",
    "new_path": "/skins/534/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/534/ChibiIcon.png",
    "new_path": "/skins/534/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/534/ShipyardIcon.png",
    "new_path": "/skins/534/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/534/SpringBanner.png",
    "new_path": "/skins/534/Vestibule_of_Wonders/Banner.png"
  },
  {
    "old_path": "/images/skins/534/SpringIcon.png",
    "new_path": "/skins/534/Vestibule_of_Wonders/Icon.png"
  },
  {
    "old_path": "/images/skins/534/SpringChibiIcon.png",
    "new_path": "/skins/534/Vestibule_of_Wonders/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/534/SpringShipyardIcon.png",
    "new_path": "/skins/534/Vestibule_of_Wonders/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Plan013/Banner.png",
    "new_path": "/skins/Plan013/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/Plan013/Icon.png",
    "new_path": "/skins/Plan013/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/Plan013/ChibiIcon.png",
    "new_path": "/skins/Plan013/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Plan013/ShipyardIcon.png",
    "new_path": "/skins/Plan013/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Plan013/SummerBanner.png",
    "new_path": "/skins/Plan013/Summery_Date/Banner.png"
  },
  {
    "old_path": "/images/skins/Plan013/SummerIcon.png",
    "new_path": "/skins/Plan013/Summery_Date/Icon.png"
  },
  {
    "old_path": "/images/skins/Plan013/SummerChibiIcon.png",
    "new_path": "/skins/Plan013/Summery_Date/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Plan013/SummerShipyardIcon.png",
    "new_path": "/skins/Plan013/Summery_Date/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Plan013/SpringBanner.png",
    "new_path": "/skins/Plan013/Cait_Sith_Crooner/Banner.png"
  },
  {
    "old_path": "/images/skins/Plan013/SpringIcon.png",
    "new_path": "/skins/Plan013/Cait_Sith_Crooner/Icon.png"
  },
  {
    "old_path": "/images/skins/Plan013/SpringChibiIcon.png",
    "new_path": "/skins/Plan013/Cait_Sith_Crooner/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Plan013/SpringShipyardIcon.png",
    "new_path": "/skins/Plan013/Cait_Sith_Crooner/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Plan013/PartyBanner.png",
    "new_path": "/skins/Plan013/The_Cat_and_the_White_Steed/Banner.png"
  },
  {
    "old_path": "/images/skins/Plan013/PartyIcon.png",
    "new_path": "/skins/Plan013/The_Cat_and_the_White_Steed/Icon.png"
  },
  {
    "old_path": "/images/skins/Plan013/PartyChibiIcon.png",
    "new_path": "/skins/Plan013/The_Cat_and_the_White_Steed/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Plan013/PartyShipyardIcon.png",
    "new_path": "/skins/Plan013/The_Cat_and_the_White_Steed/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/042/Banner.png",
    "new_path": "/skins/042/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/042/Icon.png",
    "new_path": "/skins/042/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/042/ChibiIcon.png",
    "new_path": "/skins/042/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/042/ShipyardIcon.png",
    "new_path": "/skins/042/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/10072/Banner.png",
    "new_path": "/skins/10072/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/10072/Icon.png",
    "new_path": "/skins/10072/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/10072/ChibiIcon.png",
    "new_path": "/skins/10072/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/10072/ShipyardIcon.png",
    "new_path": "/skins/10072/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/10072/FestivalBanner.png",
    "new_path": "/skins/10072/Reflections_of_Heavenly_Flowers/Banner.png"
  },
  {
    "old_path": "/images/skins/10072/FestivalIcon.png",
    "new_path": "/skins/10072/Reflections_of_Heavenly_Flowers/Icon.png"
  },
  {
    "old_path": "/images/skins/10072/FestivalChibiIcon.png",
    "new_path": "/skins/10072/Reflections_of_Heavenly_Flowers/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/10072/FestivalShipyardIcon.png",
    "new_path": "/skins/10072/Reflections_of_Heavenly_Flowers/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/195/Banner.png",
    "new_path": "/skins/195/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/195/Icon.png",
    "new_path": "/skins/195/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/195/ChibiIcon.png",
    "new_path": "/skins/195/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/195/ShipyardIcon.png",
    "new_path": "/skins/195/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/195/OriginalShipyardIcon.png",
    "new_path": "/skins/195/Original_Art/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/10086/Banner.png",
    "new_path": "/skins/10086/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/10086/Icon.png",
    "new_path": "/skins/10086/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/10086/ChibiIcon.png",
    "new_path": "/skins/10086/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/10086/ShipyardIcon.png",
    "new_path": "/skins/10086/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/10086/CasualBanner.png",
    "new_path": "/skins/10086/Together_Swimming_through_the_Sky/Banner.png"
  },
  {
    "old_path": "/images/skins/10086/CasualIcon.png",
    "new_path": "/skins/10086/Together_Swimming_through_the_Sky/Icon.png"
  },
  {
    "old_path": "/images/skins/10086/CasualChibiIcon.png",
    "new_path": "/skins/10086/Together_Swimming_through_the_Sky/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/10086/CasualShipyardIcon.png",
    "new_path": "/skins/10086/Together_Swimming_through_the_Sky/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/470/Banner.png",
    "new_path": "/skins/470/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/470/Icon.png",
    "new_path": "/skins/470/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/470/ChibiIcon.png",
    "new_path": "/skins/470/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/470/ShipyardIcon.png",
    "new_path": "/skins/470/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/470/SummerBanner.png",
    "new_path": "/skins/470/Summer_Shine/Banner.png"
  },
  {
    "old_path": "/images/skins/470/SummerIcon.png",
    "new_path": "/skins/470/Summer_Shine/Icon.png"
  },
  {
    "old_path": "/images/skins/470/SummerChibiIcon.png",
    "new_path": "/skins/470/Summer_Shine/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/470/SummerShipyardIcon.png",
    "new_path": "/skins/470/Summer_Shine/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/471/Banner.png",
    "new_path": "/skins/471/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/471/Icon.png",
    "new_path": "/skins/471/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/471/ChibiIcon.png",
    "new_path": "/skins/471/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/471/ShipyardIcon.png",
    "new_path": "/skins/471/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/471/SummerBanner.png",
    "new_path": "/skins/471/Shimmering_Surf/Banner.png"
  },
  {
    "old_path": "/images/skins/471/SummerIcon.png",
    "new_path": "/skins/471/Shimmering_Surf/Icon.png"
  },
  {
    "old_path": "/images/skins/471/SummerChibiIcon.png",
    "new_path": "/skins/471/Shimmering_Surf/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/471/SummerShipyardIcon.png",
    "new_path": "/skins/471/Shimmering_Surf/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/203/Banner.png",
    "new_path": "/skins/203/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/203/Icon.png",
    "new_path": "/skins/203/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/203/ChibiIcon.png",
    "new_path": "/skins/203/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/203/ShipyardIcon.png",
    "new_path": "/skins/203/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/203/MaidBanner.png",
    "new_path": "/skins/203/Tidy_Store_Tidy_Mind/Banner.png"
  },
  {
    "old_path": "/images/skins/203/MaidIcon.png",
    "new_path": "/skins/203/Tidy_Store_Tidy_Mind/Icon.png"
  },
  {
    "old_path": "/images/skins/203/MaidChibiIcon.png",
    "new_path": "/skins/203/Tidy_Store_Tidy_Mind/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/203/MaidShipyardIcon.png",
    "new_path": "/skins/203/Tidy_Store_Tidy_Mind/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/391/Banner.png",
    "new_path": "/skins/391/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/391/Icon.png",
    "new_path": "/skins/391/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/391/ChibiIcon.png",
    "new_path": "/skins/391/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/391/ShipyardIcon.png",
    "new_path": "/skins/391/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/037/Banner.png",
    "new_path": "/skins/037/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/037/Icon.png",
    "new_path": "/skins/037/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/037/ChibiIcon.png",
    "new_path": "/skins/037/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/037/ShipyardIcon.png",
    "new_path": "/skins/037/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/037/WeddingBanner.png",
    "new_path": "/skins/037/Wedding/Banner.png"
  },
  {
    "old_path": "/images/skins/037/WeddingIcon.png",
    "new_path": "/skins/037/Wedding/Icon.png"
  },
  {
    "old_path": "/images/skins/037/WeddingChibiIcon.png",
    "new_path": "/skins/037/Wedding/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/037/WeddingShipyardIcon.png",
    "new_path": "/skins/037/Wedding/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/037/HalloweenBanner.png",
    "new_path": "/skins/037/Reaper_Fever/Banner.png"
  },
  {
    "old_path": "/images/skins/037/HalloweenIcon.png",
    "new_path": "/skins/037/Reaper_Fever/Icon.png"
  },
  {
    "old_path": "/images/skins/037/HalloweenChibiIcon.png",
    "new_path": "/skins/037/Reaper_Fever/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/037/HalloweenShipyardIcon.png",
    "new_path": "/skins/037/Reaper_Fever/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/037/PartyBanner.png",
    "new_path": "/skins/037/Gentry_Knight/Banner.png"
  },
  {
    "old_path": "/images/skins/037/PartyIcon.png",
    "new_path": "/skins/037/Gentry_Knight/Icon.png"
  },
  {
    "old_path": "/images/skins/037/PartyChibiIcon.png",
    "new_path": "/skins/037/Gentry_Knight/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/037/PartyShipyardIcon.png",
    "new_path": "/skins/037/Gentry_Knight/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/037/RoadtripBanner.png",
    "new_path": "/skins/037/Road_Trip/Banner.png"
  },
  {
    "old_path": "/images/skins/037/RoadtripIcon.png",
    "new_path": "/skins/037/Road_Trip/Icon.png"
  },
  {
    "old_path": "/images/skins/037/RoadtripChibiIcon.png",
    "new_path": "/skins/037/Road_Trip/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/037/RoadtripShipyardIcon.png",
    "new_path": "/skins/037/Road_Trip/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/037/New_YearBanner.png",
    "new_path": "/skins/037/New_Years_Challenge/Banner.png"
  },
  {
    "old_path": "/images/skins/037/New_YearIcon.png",
    "new_path": "/skins/037/New_Years_Challenge/Icon.png"
  },
  {
    "old_path": "/images/skins/037/New_YearChibiIcon.png",
    "new_path": "/skins/037/New_Years_Challenge/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/037/New_YearShipyardIcon.png",
    "new_path": "/skins/037/New_Years_Challenge/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/420/Banner.png",
    "new_path": "/skins/420/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/420/Icon.png",
    "new_path": "/skins/420/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/420/ChibiIcon.png",
    "new_path": "/skins/420/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/420/ShipyardIcon.png",
    "new_path": "/skins/420/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/060/Banner.png",
    "new_path": "/skins/060/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/060/Icon.png",
    "new_path": "/skins/060/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/060/ChibiIcon.png",
    "new_path": "/skins/060/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/060/ShipyardIcon.png",
    "new_path": "/skins/060/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/060/OriginalBanner.png",
    "new_path": "/skins/060/Original_Art/Banner.png"
  },
  {
    "old_path": "/images/skins/060/OriginalIcon.png",
    "new_path": "/skins/060/Original_Art/Icon.png"
  },
  {
    "old_path": "/images/skins/060/OriginalChibiIcon.png",
    "new_path": "/skins/060/Original_Art/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/060/OriginalShipyardIcon.png",
    "new_path": "/skins/060/Original_Art/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/060/TravelBanner.png",
    "new_path": "/skins/060/Traveling_Melody/Banner.png"
  },
  {
    "old_path": "/images/skins/060/TravelIcon.png",
    "new_path": "/skins/060/Traveling_Melody/Icon.png"
  },
  {
    "old_path": "/images/skins/060/TravelChibiIcon.png",
    "new_path": "/skins/060/Traveling_Melody/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/060/TravelShipyardIcon.png",
    "new_path": "/skins/060/Traveling_Melody/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/038/Banner.png",
    "new_path": "/skins/038/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/038/Icon.png",
    "new_path": "/skins/038/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/038/ChibiIcon.png",
    "new_path": "/skins/038/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/038/ShipyardIcon.png",
    "new_path": "/skins/038/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/038/SchoolBanner.png",
    "new_path": "/skins/038/AfterSchool_Odette/Banner.png"
  },
  {
    "old_path": "/images/skins/038/SchoolIcon.png",
    "new_path": "/skins/038/AfterSchool_Odette/Icon.png"
  },
  {
    "old_path": "/images/skins/038/SchoolChibiIcon.png",
    "new_path": "/skins/038/AfterSchool_Odette/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/038/SchoolShipyardIcon.png",
    "new_path": "/skins/038/AfterSchool_Odette/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/038/TravelBanner.png",
    "new_path": "/skins/038/Across_the_Vast_Prairies/Banner.png"
  },
  {
    "old_path": "/images/skins/038/TravelIcon.png",
    "new_path": "/skins/038/Across_the_Vast_Prairies/Icon.png"
  },
  {
    "old_path": "/images/skins/038/TravelChibiIcon.png",
    "new_path": "/skins/038/Across_the_Vast_Prairies/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/038/TravelShipyardIcon.png",
    "new_path": "/skins/038/Across_the_Vast_Prairies/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/088/Banner.png",
    "new_path": "/skins/088/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/088/Icon.png",
    "new_path": "/skins/088/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/088/ChibiIcon.png",
    "new_path": "/skins/088/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/088/ShipyardIcon.png",
    "new_path": "/skins/088/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/088/KaiBanner.png",
    "new_path": "/skins/088/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/088/KaiIcon.png",
    "new_path": "/skins/088/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/088/KaiChibiIcon.png",
    "new_path": "/skins/088/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/088/KaiShipyardIcon.png",
    "new_path": "/skins/088/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/366/Banner.png",
    "new_path": "/skins/366/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/366/Icon.png",
    "new_path": "/skins/366/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/366/ChibiIcon.png",
    "new_path": "/skins/366/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/366/ShipyardIcon.png",
    "new_path": "/skins/366/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/366/New_YearBanner.png",
    "new_path": "/skins/366/Red_Apple_Candy/Banner.png"
  },
  {
    "old_path": "/images/skins/366/New_YearIcon.png",
    "new_path": "/skins/366/Red_Apple_Candy/Icon.png"
  },
  {
    "old_path": "/images/skins/366/New_YearChibiIcon.png",
    "new_path": "/skins/366/Red_Apple_Candy/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/366/New_YearShipyardIcon.png",
    "new_path": "/skins/366/Red_Apple_Candy/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/366/ChristmasBanner.png",
    "new_path": "/skins/366/SweetChristmas/Banner.png"
  },
  {
    "old_path": "/images/skins/366/ChristmasIcon.png",
    "new_path": "/skins/366/SweetChristmas/Icon.png"
  },
  {
    "old_path": "/images/skins/366/ChristmasChibiIcon.png",
    "new_path": "/skins/366/SweetChristmas/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/366/ChristmasShipyardIcon.png",
    "new_path": "/skins/366/SweetChristmas/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/411/Banner.png",
    "new_path": "/skins/411/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/411/Icon.png",
    "new_path": "/skins/411/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/411/ChibiIcon.png",
    "new_path": "/skins/411/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/411/ShipyardIcon.png",
    "new_path": "/skins/411/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/411/SummerBanner.png",
    "new_path": "/skins/411/Fierce_Beachside_Battle/Banner.png"
  },
  {
    "old_path": "/images/skins/411/SummerIcon.png",
    "new_path": "/skins/411/Fierce_Beachside_Battle/Icon.png"
  },
  {
    "old_path": "/images/skins/411/SummerChibiIcon.png",
    "new_path": "/skins/411/Fierce_Beachside_Battle/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/411/SummerShipyardIcon.png",
    "new_path": "/skins/411/Fierce_Beachside_Battle/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/444/Banner.png",
    "new_path": "/skins/444/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/444/Icon.png",
    "new_path": "/skins/444/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/444/ChibiIcon.png",
    "new_path": "/skins/444/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/444/ShipyardIcon.png",
    "new_path": "/skins/444/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/444/SportBanner.png",
    "new_path": "/skins/444/Blazing_Tennis_Battle/Banner.png"
  },
  {
    "old_path": "/images/skins/444/SportIcon.png",
    "new_path": "/skins/444/Blazing_Tennis_Battle/Icon.png"
  },
  {
    "old_path": "/images/skins/444/SportChibiIcon.png",
    "new_path": "/skins/444/Blazing_Tennis_Battle/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/444/SportShipyardIcon.png",
    "new_path": "/skins/444/Blazing_Tennis_Battle/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/444/ChristmasBanner.png",
    "new_path": "/skins/444/Heartwarming_Holiday_Hearth/Banner.png"
  },
  {
    "old_path": "/images/skins/444/ChristmasIcon.png",
    "new_path": "/skins/444/Heartwarming_Holiday_Hearth/Icon.png"
  },
  {
    "old_path": "/images/skins/444/ChristmasChibiIcon.png",
    "new_path": "/skins/444/Heartwarming_Holiday_Hearth/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/444/ChristmasShipyardIcon.png",
    "new_path": "/skins/444/Heartwarming_Holiday_Hearth/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/008/Banner.png",
    "new_path": "/skins/008/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/008/Icon.png",
    "new_path": "/skins/008/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/008/ChibiIcon.png",
    "new_path": "/skins/008/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/008/ShipyardIcon.png",
    "new_path": "/skins/008/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/008/SchoolBanner.png",
    "new_path": "/skins/008/Cheerleader_On_The_Playground/Banner.png"
  },
  {
    "old_path": "/images/skins/008/SchoolIcon.png",
    "new_path": "/skins/008/Cheerleader_On_The_Playground/Icon.png"
  },
  {
    "old_path": "/images/skins/008/SchoolChibiIcon.png",
    "new_path": "/skins/008/Cheerleader_On_The_Playground/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/008/SchoolShipyardIcon.png",
    "new_path": "/skins/008/Cheerleader_On_The_Playground/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/089/Banner.png",
    "new_path": "/skins/089/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/089/Icon.png",
    "new_path": "/skins/089/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/089/ChibiIcon.png",
    "new_path": "/skins/089/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/089/ShipyardIcon.png",
    "new_path": "/skins/089/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/089/KaiBanner.png",
    "new_path": "/skins/089/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/089/KaiIcon.png",
    "new_path": "/skins/089/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/089/KaiChibiIcon.png",
    "new_path": "/skins/089/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/089/KaiShipyardIcon.png",
    "new_path": "/skins/089/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/372/Banner.png",
    "new_path": "/skins/372/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/372/Icon.png",
    "new_path": "/skins/372/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/372/ChibiIcon.png",
    "new_path": "/skins/372/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/372/ShipyardIcon.png",
    "new_path": "/skins/372/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/372/KaiBanner.png",
    "new_path": "/skins/372/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/372/KaiIcon.png",
    "new_path": "/skins/372/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/372/KaiChibiIcon.png",
    "new_path": "/skins/372/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/372/KaiShipyardIcon.png",
    "new_path": "/skins/372/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/372/SpringBanner.png",
    "new_path": "/skins/372/Eastern_Grace/Banner.png"
  },
  {
    "old_path": "/images/skins/372/SpringIcon.png",
    "new_path": "/skins/372/Eastern_Grace/Icon.png"
  },
  {
    "old_path": "/images/skins/372/SpringChibiIcon.png",
    "new_path": "/skins/372/Eastern_Grace/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/372/SpringShipyardIcon.png",
    "new_path": "/skins/372/Eastern_Grace/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/373/Banner.png",
    "new_path": "/skins/373/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/373/Icon.png",
    "new_path": "/skins/373/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/373/ChibiIcon.png",
    "new_path": "/skins/373/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/373/ShipyardIcon.png",
    "new_path": "/skins/373/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/373/KaiBanner.png",
    "new_path": "/skins/373/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/373/KaiIcon.png",
    "new_path": "/skins/373/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/373/KaiChibiIcon.png",
    "new_path": "/skins/373/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/373/KaiShipyardIcon.png",
    "new_path": "/skins/373/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/373/SpringBanner.png",
    "new_path": "/skins/373/Rhythm_of_the_Dragon_Empery/Banner.png"
  },
  {
    "old_path": "/images/skins/373/SpringIcon.png",
    "new_path": "/skins/373/Rhythm_of_the_Dragon_Empery/Icon.png"
  },
  {
    "old_path": "/images/skins/373/SpringChibiIcon.png",
    "new_path": "/skins/373/Rhythm_of_the_Dragon_Empery/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/373/SpringShipyardIcon.png",
    "new_path": "/skins/373/Rhythm_of_the_Dragon_Empery/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/090/Banner.png",
    "new_path": "/skins/090/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/090/Icon.png",
    "new_path": "/skins/090/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/090/ChibiIcon.png",
    "new_path": "/skins/090/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/090/ShipyardIcon.png",
    "new_path": "/skins/090/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/090/KaiBanner.png",
    "new_path": "/skins/090/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/090/KaiIcon.png",
    "new_path": "/skins/090/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/090/KaiChibiIcon.png",
    "new_path": "/skins/090/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/090/KaiShipyardIcon.png",
    "new_path": "/skins/090/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/090/SummerBanner.png",
    "new_path": "/skins/090/Sea_Star_on_Shore/Banner.png"
  },
  {
    "old_path": "/images/skins/090/SummerIcon.png",
    "new_path": "/skins/090/Sea_Star_on_Shore/Icon.png"
  },
  {
    "old_path": "/images/skins/090/SummerChibiIcon.png",
    "new_path": "/skins/090/Sea_Star_on_Shore/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/090/SummerShipyardIcon.png",
    "new_path": "/skins/090/Sea_Star_on_Shore/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/090/ChristmasBanner.png",
    "new_path": "/skins/090/Holy_Nights_Hymn/Banner.png"
  },
  {
    "old_path": "/images/skins/090/ChristmasIcon.png",
    "new_path": "/skins/090/Holy_Nights_Hymn/Icon.png"
  },
  {
    "old_path": "/images/skins/090/ChristmasChibiIcon.png",
    "new_path": "/skins/090/Holy_Nights_Hymn/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/090/ChristmasShipyardIcon.png",
    "new_path": "/skins/090/Holy_Nights_Hymn/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/090/New_YearBanner.png",
    "new_path": "/skins/090/Winter_Date/Banner.png"
  },
  {
    "old_path": "/images/skins/090/New_YearIcon.png",
    "new_path": "/skins/090/Winter_Date/Icon.png"
  },
  {
    "old_path": "/images/skins/090/New_YearChibiIcon.png",
    "new_path": "/skins/090/Winter_Date/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/090/New_YearShipyardIcon.png",
    "new_path": "/skins/090/Winter_Date/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/090/MaidBanner.png",
    "new_path": "/skins/090/An_Offer_To_Be_Maid/Banner.png"
  },
  {
    "old_path": "/images/skins/090/MaidIcon.png",
    "new_path": "/skins/090/An_Offer_To_Be_Maid/Icon.png"
  },
  {
    "old_path": "/images/skins/090/MaidChibiIcon.png",
    "new_path": "/skins/090/An_Offer_To_Be_Maid/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/090/MaidShipyardIcon.png",
    "new_path": "/skins/090/An_Offer_To_Be_Maid/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/090/SportBanner.png",
    "new_path": "/skins/090/Royal_Fanfare/Banner.png"
  },
  {
    "old_path": "/images/skins/090/SportIcon.png",
    "new_path": "/skins/090/Royal_Fanfare/Icon.png"
  },
  {
    "old_path": "/images/skins/090/SportChibiIcon.png",
    "new_path": "/skins/090/Royal_Fanfare/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/090/SportShipyardIcon.png",
    "new_path": "/skins/090/Royal_Fanfare/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/342/Banner.png",
    "new_path": "/skins/342/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/342/Icon.png",
    "new_path": "/skins/342/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/342/ChibiIcon.png",
    "new_path": "/skins/342/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/342/ShipyardIcon.png",
    "new_path": "/skins/342/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/330/Banner.png",
    "new_path": "/skins/330/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/330/Icon.png",
    "new_path": "/skins/330/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/330/ChibiIcon.png",
    "new_path": "/skins/330/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/330/ShipyardIcon.png",
    "new_path": "/skins/330/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/245/Banner.png",
    "new_path": "/skins/245/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/245/Icon.png",
    "new_path": "/skins/245/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/245/ChibiIcon.png",
    "new_path": "/skins/245/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/245/ShipyardIcon.png",
    "new_path": "/skins/245/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/245/EventIcon.png",
    "new_path": "/skins/245/Dark_Demon_Princess/Icon.png"
  },
  {
    "old_path": "/images/skins/245/EventChibiIcon.png",
    "new_path": "/skins/245/Dark_Demon_Princess/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/245/EventShipyardIcon.png",
    "new_path": "/skins/245/Dark_Demon_Princess/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/245/SummerBanner.png",
    "new_path": "/skins/245/Service_Time/Banner.png"
  },
  {
    "old_path": "/images/skins/245/SummerIcon.png",
    "new_path": "/skins/245/Service_Time/Icon.png"
  },
  {
    "old_path": "/images/skins/245/SummerChibiIcon.png",
    "new_path": "/skins/245/Service_Time/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/245/SummerShipyardIcon.png",
    "new_path": "/skins/245/Service_Time/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/245/PartyBanner.png",
    "new_path": "/skins/245/Demon_Princess_Dark_Hour_Banquet/Banner.png"
  },
  {
    "old_path": "/images/skins/245/PartyIcon.png",
    "new_path": "/skins/245/Demon_Princess_Dark_Hour_Banquet/Icon.png"
  },
  {
    "old_path": "/images/skins/245/PartyChibiIcon.png",
    "new_path": "/skins/245/Demon_Princess_Dark_Hour_Banquet/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/245/PartyShipyardIcon.png",
    "new_path": "/skins/245/Demon_Princess_Dark_Hour_Banquet/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/245/SpringBanner.png",
    "new_path": "/skins/245/LanternLit_Ruler/Banner.png"
  },
  {
    "old_path": "/images/skins/245/SpringIcon.png",
    "new_path": "/skins/245/LanternLit_Ruler/Icon.png"
  },
  {
    "old_path": "/images/skins/245/SpringChibiIcon.png",
    "new_path": "/skins/245/LanternLit_Ruler/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/245/SpringShipyardIcon.png",
    "new_path": "/skins/245/LanternLit_Ruler/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/004/Banner.png",
    "new_path": "/skins/004/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/004/Icon.png",
    "new_path": "/skins/004/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/004/ChibiIcon.png",
    "new_path": "/skins/004/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/004/ShipyardIcon.png",
    "new_path": "/skins/004/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/004/SummerBanner.png",
    "new_path": "/skins/004/Summer_Longing/Banner.png"
  },
  {
    "old_path": "/images/skins/004/SummerIcon.png",
    "new_path": "/skins/004/Summer_Longing/Icon.png"
  },
  {
    "old_path": "/images/skins/004/SummerChibiIcon.png",
    "new_path": "/skins/004/Summer_Longing/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/004/SummerShipyardIcon.png",
    "new_path": "/skins/004/Summer_Longing/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/004/ChristmasBanner.png",
    "new_path": "/skins/004/A_Christmas_ThankYou/Banner.png"
  },
  {
    "old_path": "/images/skins/004/ChristmasIcon.png",
    "new_path": "/skins/004/A_Christmas_ThankYou/Icon.png"
  },
  {
    "old_path": "/images/skins/004/ChristmasChibiIcon.png",
    "new_path": "/skins/004/A_Christmas_ThankYou/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/004/ChristmasShipyardIcon.png",
    "new_path": "/skins/004/A_Christmas_ThankYou/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/107/Banner.png",
    "new_path": "/skins/107/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/107/Icon.png",
    "new_path": "/skins/107/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/107/ChibiIcon.png",
    "new_path": "/skins/107/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/107/ShipyardIcon.png",
    "new_path": "/skins/107/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/107/PartyBanner.png",
    "new_path": "/skins/107/Anxious_Bisque_Doll/Banner.png"
  },
  {
    "old_path": "/images/skins/107/PartyIcon.png",
    "new_path": "/skins/107/Anxious_Bisque_Doll/Icon.png"
  },
  {
    "old_path": "/images/skins/107/PartyChibiIcon.png",
    "new_path": "/skins/107/Anxious_Bisque_Doll/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/107/PartyShipyardIcon.png",
    "new_path": "/skins/107/Anxious_Bisque_Doll/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/476/Banner.png",
    "new_path": "/skins/476/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/476/Icon.png",
    "new_path": "/skins/476/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/476/ChibiIcon.png",
    "new_path": "/skins/476/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/476/ShipyardIcon.png",
    "new_path": "/skins/476/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/124/Banner.png",
    "new_path": "/skins/124/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/124/Icon.png",
    "new_path": "/skins/124/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/124/ChibiIcon.png",
    "new_path": "/skins/124/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/124/ShipyardIcon.png",
    "new_path": "/skins/124/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/006/Banner.png",
    "new_path": "/skins/006/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/006/Icon.png",
    "new_path": "/skins/006/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/006/ChibiIcon.png",
    "new_path": "/skins/006/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/006/ShipyardIcon.png",
    "new_path": "/skins/006/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/006/KaiBanner.png",
    "new_path": "/skins/006/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/006/KaiIcon.png",
    "new_path": "/skins/006/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/006/KaiChibiIcon.png",
    "new_path": "/skins/006/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/006/KaiShipyardIcon.png",
    "new_path": "/skins/006/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/006/SchoolBanner.png",
    "new_path": "/skins/006/PartTime_Bomber/Banner.png"
  },
  {
    "old_path": "/images/skins/006/SchoolIcon.png",
    "new_path": "/skins/006/PartTime_Bomber/Icon.png"
  },
  {
    "old_path": "/images/skins/006/SchoolChibiIcon.png",
    "new_path": "/skins/006/PartTime_Bomber/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/006/SchoolShipyardIcon.png",
    "new_path": "/skins/006/PartTime_Bomber/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Plan014/Banner.png",
    "new_path": "/skins/Plan014/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/Plan014/Icon.png",
    "new_path": "/skins/Plan014/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/Plan014/ChibiIcon.png",
    "new_path": "/skins/Plan014/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Plan014/ShipyardIcon.png",
    "new_path": "/skins/Plan014/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Plan014/SummerBanner.png",
    "new_path": "/skins/Plan014/The_Golden_Hinds_Respite/Banner.png"
  },
  {
    "old_path": "/images/skins/Plan014/SummerIcon.png",
    "new_path": "/skins/Plan014/The_Golden_Hinds_Respite/Icon.png"
  },
  {
    "old_path": "/images/skins/Plan014/SummerChibiIcon.png",
    "new_path": "/skins/Plan014/The_Golden_Hinds_Respite/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Plan014/SummerShipyardIcon.png",
    "new_path": "/skins/Plan014/The_Golden_Hinds_Respite/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/501/Banner.png",
    "new_path": "/skins/501/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/501/Icon.png",
    "new_path": "/skins/501/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/501/ChibiIcon.png",
    "new_path": "/skins/501/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/501/ShipyardIcon.png",
    "new_path": "/skins/501/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/501/SummerBanner.png",
    "new_path": "/skins/501/Lustrous_Onyx_Sirenetta/Banner.png"
  },
  {
    "old_path": "/images/skins/501/SummerIcon.png",
    "new_path": "/skins/501/Lustrous_Onyx_Sirenetta/Icon.png"
  },
  {
    "old_path": "/images/skins/501/SummerChibiIcon.png",
    "new_path": "/skins/501/Lustrous_Onyx_Sirenetta/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/501/SummerShipyardIcon.png",
    "new_path": "/skins/501/Lustrous_Onyx_Sirenetta/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/136/Banner.png",
    "new_path": "/skins/136/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/136/Icon.png",
    "new_path": "/skins/136/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/136/ChibiIcon.png",
    "new_path": "/skins/136/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/136/ShipyardIcon.png",
    "new_path": "/skins/136/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/136/PartyBanner.png",
    "new_path": "/skins/136/Eternal_Nights_Carola/Banner.png"
  },
  {
    "old_path": "/images/skins/136/PartyIcon.png",
    "new_path": "/skins/136/Eternal_Nights_Carola/Icon.png"
  },
  {
    "old_path": "/images/skins/136/PartyChibiIcon.png",
    "new_path": "/skins/136/Eternal_Nights_Carola/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/136/PartyShipyardIcon.png",
    "new_path": "/skins/136/Eternal_Nights_Carola/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/136/RaceQueenBanner.png",
    "new_path": "/skins/136/Prestige_of_the_Glorious_Formula/Banner.png"
  },
  {
    "old_path": "/images/skins/136/RaceQueenIcon.png",
    "new_path": "/skins/136/Prestige_of_the_Glorious_Formula/Icon.png"
  },
  {
    "old_path": "/images/skins/136/RaceQueenChibiIcon.png",
    "new_path": "/skins/136/Prestige_of_the_Glorious_Formula/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/136/RaceQueenShipyardIcon.png",
    "new_path": "/skins/136/Prestige_of_the_Glorious_Formula/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/352/Banner.png",
    "new_path": "/skins/352/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/352/Icon.png",
    "new_path": "/skins/352/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/352/ChibiIcon.png",
    "new_path": "/skins/352/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/352/ShipyardIcon.png",
    "new_path": "/skins/352/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/352/SummerBanner.png",
    "new_path": "/skins/352/Summer_Sucr/Banner.png"
  },
  {
    "old_path": "/images/skins/352/SummerIcon.png",
    "new_path": "/skins/352/Summer_Sucr/Icon.png"
  },
  {
    "old_path": "/images/skins/352/SummerChibiIcon.png",
    "new_path": "/skins/352/Summer_Sucr/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/352/SummerShipyardIcon.png",
    "new_path": "/skins/352/Summer_Sucr/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/352/CasualBanner.png",
    "new_path": "/skins/352/Afternoon_Venus/Banner.png"
  },
  {
    "old_path": "/images/skins/352/CasualIcon.png",
    "new_path": "/skins/352/Afternoon_Venus/Icon.png"
  },
  {
    "old_path": "/images/skins/352/CasualChibiIcon.png",
    "new_path": "/skins/352/Afternoon_Venus/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/352/CasualShipyardIcon.png",
    "new_path": "/skins/352/Afternoon_Venus/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/143/Banner.png",
    "new_path": "/skins/143/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/143/Icon.png",
    "new_path": "/skins/143/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/143/ChibiIcon.png",
    "new_path": "/skins/143/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/143/ShipyardIcon.png",
    "new_path": "/skins/143/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/143/HospitalBanner.png",
    "new_path": "/skins/143/Eagles_Clinic/Banner.png"
  },
  {
    "old_path": "/images/skins/143/HospitalIcon.png",
    "new_path": "/skins/143/Eagles_Clinic/Icon.png"
  },
  {
    "old_path": "/images/skins/143/HospitalChibiIcon.png",
    "new_path": "/skins/143/Eagles_Clinic/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/143/HospitalShipyardIcon.png",
    "new_path": "/skins/143/Eagles_Clinic/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/389/Banner.png",
    "new_path": "/skins/389/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/389/Icon.png",
    "new_path": "/skins/389/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/389/ChibiIcon.png",
    "new_path": "/skins/389/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/389/ShipyardIcon.png",
    "new_path": "/skins/389/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/114/Banner.png",
    "new_path": "/skins/114/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/114/Icon.png",
    "new_path": "/skins/114/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/114/ChibiIcon.png",
    "new_path": "/skins/114/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/114/ShipyardIcon.png",
    "new_path": "/skins/114/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/114/SchoolBanner.png",
    "new_path": "/skins/114/The_Library_Fairy/Banner.png"
  },
  {
    "old_path": "/images/skins/114/SchoolIcon.png",
    "new_path": "/skins/114/The_Library_Fairy/Icon.png"
  },
  {
    "old_path": "/images/skins/114/SchoolChibiIcon.png",
    "new_path": "/skins/114/The_Library_Fairy/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/114/SchoolShipyardIcon.png",
    "new_path": "/skins/114/The_Library_Fairy/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/114/HalloweenBanner.png",
    "new_path": "/skins/114/Candy_Maid/Banner.png"
  },
  {
    "old_path": "/images/skins/114/HalloweenIcon.png",
    "new_path": "/skins/114/Candy_Maid/Icon.png"
  },
  {
    "old_path": "/images/skins/114/HalloweenChibiIcon.png",
    "new_path": "/skins/114/Candy_Maid/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/114/HalloweenShipyardIcon.png",
    "new_path": "/skins/114/Candy_Maid/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/526/Banner.png",
    "new_path": "/skins/526/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/526/Icon.png",
    "new_path": "/skins/526/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/526/ChibiIcon.png",
    "new_path": "/skins/526/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/526/ShipyardIcon.png",
    "new_path": "/skins/526/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/526/MaidBanner.png",
    "new_path": "/skins/526/Time_to_Show_Off/Banner.png"
  },
  {
    "old_path": "/images/skins/526/MaidIcon.png",
    "new_path": "/skins/526/Time_to_Show_Off/Icon.png"
  },
  {
    "old_path": "/images/skins/526/MaidChibiIcon.png",
    "new_path": "/skins/526/Time_to_Show_Off/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/526/MaidShipyardIcon.png",
    "new_path": "/skins/526/Time_to_Show_Off/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/028/Banner.png",
    "new_path": "/skins/028/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/028/Icon.png",
    "new_path": "/skins/028/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/028/ChibiIcon.png",
    "new_path": "/skins/028/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/028/ShipyardIcon.png",
    "new_path": "/skins/028/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/028/ChristmasBanner.png",
    "new_path": "/skins/028/Holy_Nights_Embrace/Banner.png"
  },
  {
    "old_path": "/images/skins/028/ChristmasIcon.png",
    "new_path": "/skins/028/Holy_Nights_Embrace/Icon.png"
  },
  {
    "old_path": "/images/skins/028/ChristmasChibiIcon.png",
    "new_path": "/skins/028/Holy_Nights_Embrace/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/028/ChristmasShipyardIcon.png",
    "new_path": "/skins/028/Holy_Nights_Embrace/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/028/SchoolBanner.png",
    "new_path": "/skins/028/The_Inquisitive_Recluse/Banner.png"
  },
  {
    "old_path": "/images/skins/028/SchoolIcon.png",
    "new_path": "/skins/028/The_Inquisitive_Recluse/Icon.png"
  },
  {
    "old_path": "/images/skins/028/SchoolChibiIcon.png",
    "new_path": "/skins/028/The_Inquisitive_Recluse/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/028/SchoolShipyardIcon.png",
    "new_path": "/skins/028/The_Inquisitive_Recluse/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/028/New_YearBanner.png",
    "new_path": "/skins/028/New_Years_Outing/Banner.png"
  },
  {
    "old_path": "/images/skins/028/New_YearIcon.png",
    "new_path": "/skins/028/New_Years_Outing/Icon.png"
  },
  {
    "old_path": "/images/skins/028/New_YearChibiIcon.png",
    "new_path": "/skins/028/New_Years_Outing/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/028/New_YearShipyardIcon.png",
    "new_path": "/skins/028/New_Years_Outing/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/028/IdolBanner.png",
    "new_path": "/skins/028/Kitty_Idol/Banner.png"
  },
  {
    "old_path": "/images/skins/028/IdolIcon.png",
    "new_path": "/skins/028/Kitty_Idol/Icon.png"
  },
  {
    "old_path": "/images/skins/028/IdolChibiIcon.png",
    "new_path": "/skins/028/Kitty_Idol/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/028/IdolShipyardIcon.png",
    "new_path": "/skins/028/Kitty_Idol/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/028/FestivalBanner.png",
    "new_path": "/skins/028/Moon_Festival_Spacewalk/Banner.png"
  },
  {
    "old_path": "/images/skins/028/FestivalIcon.png",
    "new_path": "/skins/028/Moon_Festival_Spacewalk/Icon.png"
  },
  {
    "old_path": "/images/skins/028/FestivalChibiIcon.png",
    "new_path": "/skins/028/Moon_Festival_Spacewalk/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/028/FestivalShipyardIcon.png",
    "new_path": "/skins/028/Moon_Festival_Spacewalk/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Collab042/Banner.png",
    "new_path": "/skins/Collab042/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/Collab042/Icon.png",
    "new_path": "/skins/Collab042/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/Collab042/ChibiIcon.png",
    "new_path": "/skins/Collab042/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Collab042/ShipyardIcon.png",
    "new_path": "/skins/Collab042/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/077/Banner.png",
    "new_path": "/skins/077/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/077/Icon.png",
    "new_path": "/skins/077/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/077/ChibiIcon.png",
    "new_path": "/skins/077/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/077/ShipyardIcon.png",
    "new_path": "/skins/077/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/077/WeddingBanner.png",
    "new_path": "/skins/077/Wedding/Banner.png"
  },
  {
    "old_path": "/images/skins/077/WeddingIcon.png",
    "new_path": "/skins/077/Wedding/Icon.png"
  },
  {
    "old_path": "/images/skins/077/WeddingChibiIcon.png",
    "new_path": "/skins/077/Wedding/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/077/WeddingShipyardIcon.png",
    "new_path": "/skins/077/Wedding/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/077/ChristmasBanner.png",
    "new_path": "/skins/077/Reindeer_Master/Banner.png"
  },
  {
    "old_path": "/images/skins/077/ChristmasIcon.png",
    "new_path": "/skins/077/Reindeer_Master/Icon.png"
  },
  {
    "old_path": "/images/skins/077/ChristmasChibiIcon.png",
    "new_path": "/skins/077/Reindeer_Master/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/077/ChristmasShipyardIcon.png",
    "new_path": "/skins/077/Reindeer_Master/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/077/SpringBanner.png",
    "new_path": "/skins/077/Blooming_Peony/Banner.png"
  },
  {
    "old_path": "/images/skins/077/SpringIcon.png",
    "new_path": "/skins/077/Blooming_Peony/Icon.png"
  },
  {
    "old_path": "/images/skins/077/SpringChibiIcon.png",
    "new_path": "/skins/077/Blooming_Peony/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/077/SpringShipyardIcon.png",
    "new_path": "/skins/077/Blooming_Peony/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/077/RoadtripBanner.png",
    "new_path": "/skins/077/Anniversary_Ride/Banner.png"
  },
  {
    "old_path": "/images/skins/077/RoadtripIcon.png",
    "new_path": "/skins/077/Anniversary_Ride/Icon.png"
  },
  {
    "old_path": "/images/skins/077/RoadtripChibiIcon.png",
    "new_path": "/skins/077/Anniversary_Ride/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/077/RoadtripShipyardIcon.png",
    "new_path": "/skins/077/Anniversary_Ride/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/077/BlurayBanner.png",
    "new_path": "/skins/077/Soaring_Wings_of_Freedom/Banner.png"
  },
  {
    "old_path": "/images/skins/077/BlurayIcon.png",
    "new_path": "/skins/077/Soaring_Wings_of_Freedom/Icon.png"
  },
  {
    "old_path": "/images/skins/077/BlurayChibiIcon.png",
    "new_path": "/skins/077/Soaring_Wings_of_Freedom/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/077/BlurayShipyardIcon.png",
    "new_path": "/skins/077/Soaring_Wings_of_Freedom/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/077/PartyBanner.png",
    "new_path": "/skins/077/Heroic_Finery/Banner.png"
  },
  {
    "old_path": "/images/skins/077/PartyIcon.png",
    "new_path": "/skins/077/Heroic_Finery/Icon.png"
  },
  {
    "old_path": "/images/skins/077/PartyChibiIcon.png",
    "new_path": "/skins/077/Heroic_Finery/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/077/PartyShipyardIcon.png",
    "new_path": "/skins/077/Heroic_Finery/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/077/RaceQueenBanner.png",
    "new_path": "/skins/077/Wind_Catcher/Banner.png"
  },
  {
    "old_path": "/images/skins/077/RaceQueenIcon.png",
    "new_path": "/skins/077/Wind_Catcher/Icon.png"
  },
  {
    "old_path": "/images/skins/077/RaceQueenChibiIcon.png",
    "new_path": "/skins/077/Wind_Catcher/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/077/RaceQueenShipyardIcon.png",
    "new_path": "/skins/077/Wind_Catcher/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/149/Banner.png",
    "new_path": "/skins/149/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/149/Icon.png",
    "new_path": "/skins/149/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/149/ChibiIcon.png",
    "new_path": "/skins/149/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/149/ShipyardIcon.png",
    "new_path": "/skins/149/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/149/FestivalBanner.png",
    "new_path": "/skins/149/Illusory_Happiness/Banner.png"
  },
  {
    "old_path": "/images/skins/149/FestivalIcon.png",
    "new_path": "/skins/149/Illusory_Happiness/Icon.png"
  },
  {
    "old_path": "/images/skins/149/FestivalChibiIcon.png",
    "new_path": "/skins/149/Illusory_Happiness/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/149/FestivalShipyardIcon.png",
    "new_path": "/skins/149/Illusory_Happiness/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/149/HalloweenBanner.png",
    "new_path": "/skins/149/Wardrobe_Witchery/Banner.png"
  },
  {
    "old_path": "/images/skins/149/HalloweenIcon.png",
    "new_path": "/skins/149/Wardrobe_Witchery/Icon.png"
  },
  {
    "old_path": "/images/skins/149/HalloweenChibiIcon.png",
    "new_path": "/skins/149/Wardrobe_Witchery/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/149/HalloweenShipyardIcon.png",
    "new_path": "/skins/149/Wardrobe_Witchery/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/460/Banner.png",
    "new_path": "/skins/460/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/460/Icon.png",
    "new_path": "/skins/460/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/460/ChibiIcon.png",
    "new_path": "/skins/460/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/460/ShipyardIcon.png",
    "new_path": "/skins/460/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/460/SummerBanner.png",
    "new_path": "/skins/460/Parkaless_Prankster/Banner.png"
  },
  {
    "old_path": "/images/skins/460/SummerIcon.png",
    "new_path": "/skins/460/Parkaless_Prankster/Icon.png"
  },
  {
    "old_path": "/images/skins/460/SummerChibiIcon.png",
    "new_path": "/skins/460/Parkaless_Prankster/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/460/SummerShipyardIcon.png",
    "new_path": "/skins/460/Parkaless_Prankster/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/357/Banner.png",
    "new_path": "/skins/357/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/357/Icon.png",
    "new_path": "/skins/357/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/357/ChibiIcon.png",
    "new_path": "/skins/357/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/357/ShipyardIcon.png",
    "new_path": "/skins/357/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/357/CasualBanner.png",
    "new_path": "/skins/357/A_Trip_Down_Route_66/Banner.png"
  },
  {
    "old_path": "/images/skins/357/CasualIcon.png",
    "new_path": "/skins/357/A_Trip_Down_Route_66/Icon.png"
  },
  {
    "old_path": "/images/skins/357/CasualChibiIcon.png",
    "new_path": "/skins/357/A_Trip_Down_Route_66/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/357/CasualShipyardIcon.png",
    "new_path": "/skins/357/A_Trip_Down_Route_66/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/357/PartyBanner.png",
    "new_path": "/skins/357/Craft_Fairytail/Banner.png"
  },
  {
    "old_path": "/images/skins/357/PartyIcon.png",
    "new_path": "/skins/357/Craft_Fairytail/Icon.png"
  },
  {
    "old_path": "/images/skins/357/PartyChibiIcon.png",
    "new_path": "/skins/357/Craft_Fairytail/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/357/PartyShipyardIcon.png",
    "new_path": "/skins/357/Craft_Fairytail/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/357/SpringBanner.png",
    "new_path": "/skins/357/Brush_and_Ink/Banner.png"
  },
  {
    "old_path": "/images/skins/357/SpringIcon.png",
    "new_path": "/skins/357/Brush_and_Ink/Icon.png"
  },
  {
    "old_path": "/images/skins/357/SpringChibiIcon.png",
    "new_path": "/skins/357/Brush_and_Ink/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/357/SpringShipyardIcon.png",
    "new_path": "/skins/357/Brush_and_Ink/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/126/Banner.png",
    "new_path": "/skins/126/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/126/Icon.png",
    "new_path": "/skins/126/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/126/ChibiIcon.png",
    "new_path": "/skins/126/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/126/ShipyardIcon.png",
    "new_path": "/skins/126/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/126/KaiBanner.png",
    "new_path": "/skins/126/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/126/KaiIcon.png",
    "new_path": "/skins/126/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/126/KaiChibiIcon.png",
    "new_path": "/skins/126/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/126/KaiShipyardIcon.png",
    "new_path": "/skins/126/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/126/PartyBanner.png",
    "new_path": "/skins/126/A_Glorious_Toast/Banner.png"
  },
  {
    "old_path": "/images/skins/126/PartyIcon.png",
    "new_path": "/skins/126/A_Glorious_Toast/Icon.png"
  },
  {
    "old_path": "/images/skins/126/PartyChibiIcon.png",
    "new_path": "/skins/126/A_Glorious_Toast/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/126/PartyShipyardIcon.png",
    "new_path": "/skins/126/A_Glorious_Toast/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/327/Banner.png",
    "new_path": "/skins/327/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/327/Icon.png",
    "new_path": "/skins/327/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/327/ChibiIcon.png",
    "new_path": "/skins/327/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/327/ShipyardIcon.png",
    "new_path": "/skins/327/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/327/CasualBanner.png",
    "new_path": "/skins/327/Trendy_and_Vogue/Banner.png"
  },
  {
    "old_path": "/images/skins/327/CasualIcon.png",
    "new_path": "/skins/327/Trendy_and_Vogue/Icon.png"
  },
  {
    "old_path": "/images/skins/327/CasualChibiIcon.png",
    "new_path": "/skins/327/Trendy_and_Vogue/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/327/CasualShipyardIcon.png",
    "new_path": "/skins/327/Trendy_and_Vogue/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/011/Banner.png",
    "new_path": "/skins/011/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/011/Icon.png",
    "new_path": "/skins/011/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/011/ChibiIcon.png",
    "new_path": "/skins/011/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/011/ShipyardIcon.png",
    "new_path": "/skins/011/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/524/Banner.png",
    "new_path": "/skins/524/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/524/Icon.png",
    "new_path": "/skins/524/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/524/ChibiIcon.png",
    "new_path": "/skins/524/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/524/ShipyardIcon.png",
    "new_path": "/skins/524/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/524/CasualBanner.png",
    "new_path": "/skins/524/Rainbow_Rendezvous/Banner.png"
  },
  {
    "old_path": "/images/skins/524/CasualIcon.png",
    "new_path": "/skins/524/Rainbow_Rendezvous/Icon.png"
  },
  {
    "old_path": "/images/skins/524/CasualChibiIcon.png",
    "new_path": "/skins/524/Rainbow_Rendezvous/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/524/CasualShipyardIcon.png",
    "new_path": "/skins/524/Rainbow_Rendezvous/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/016/Banner.png",
    "new_path": "/skins/016/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/016/Icon.png",
    "new_path": "/skins/016/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/016/ChibiIcon.png",
    "new_path": "/skins/016/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/016/ShipyardIcon.png",
    "new_path": "/skins/016/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/348/Banner.png",
    "new_path": "/skins/348/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/348/Icon.png",
    "new_path": "/skins/348/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/348/ChibiIcon.png",
    "new_path": "/skins/348/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/348/ShipyardIcon.png",
    "new_path": "/skins/348/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/348/KaiBanner.png",
    "new_path": "/skins/348/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/348/KaiIcon.png",
    "new_path": "/skins/348/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/348/KaiChibiIcon.png",
    "new_path": "/skins/348/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/348/KaiShipyardIcon.png",
    "new_path": "/skins/348/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/348/MiscBanner.png",
    "new_path": "/skins/348/Fleur_Blanche/Banner.png"
  },
  {
    "old_path": "/images/skins/348/MiscIcon.png",
    "new_path": "/skins/348/Fleur_Blanche/Icon.png"
  },
  {
    "old_path": "/images/skins/348/MiscChibiIcon.png",
    "new_path": "/skins/348/Fleur_Blanche/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/348/MiscShipyardIcon.png",
    "new_path": "/skins/348/Fleur_Blanche/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/348/SchoolBanner.png",
    "new_path": "/skins/348/cole_de_Chevalier/Banner.png"
  },
  {
    "old_path": "/images/skins/348/SchoolIcon.png",
    "new_path": "/skins/348/cole_de_Chevalier/Icon.png"
  },
  {
    "old_path": "/images/skins/348/SchoolChibiIcon.png",
    "new_path": "/skins/348/cole_de_Chevalier/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/348/SchoolShipyardIcon.png",
    "new_path": "/skins/348/cole_de_Chevalier/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/348/PartyBanner.png",
    "new_path": "/skins/348/Feast_of_Champagne/Banner.png"
  },
  {
    "old_path": "/images/skins/348/PartyIcon.png",
    "new_path": "/skins/348/Feast_of_Champagne/Icon.png"
  },
  {
    "old_path": "/images/skins/348/PartyChibiIcon.png",
    "new_path": "/skins/348/Feast_of_Champagne/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/348/PartyShipyardIcon.png",
    "new_path": "/skins/348/Feast_of_Champagne/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/147/Banner.png",
    "new_path": "/skins/147/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/147/Icon.png",
    "new_path": "/skins/147/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/147/ChibiIcon.png",
    "new_path": "/skins/147/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/147/ShipyardIcon.png",
    "new_path": "/skins/147/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/147/SummerBanner.png",
    "new_path": "/skins/147/The_Lady_of_the_Beach/Banner.png"
  },
  {
    "old_path": "/images/skins/147/SummerIcon.png",
    "new_path": "/skins/147/The_Lady_of_the_Beach/Icon.png"
  },
  {
    "old_path": "/images/skins/147/SummerChibiIcon.png",
    "new_path": "/skins/147/The_Lady_of_the_Beach/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/147/SummerShipyardIcon.png",
    "new_path": "/skins/147/The_Lady_of_the_Beach/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/147/PartyBanner.png",
    "new_path": "/skins/147/Timeless_Classics/Banner.png"
  },
  {
    "old_path": "/images/skins/147/PartyIcon.png",
    "new_path": "/skins/147/Timeless_Classics/Icon.png"
  },
  {
    "old_path": "/images/skins/147/PartyChibiIcon.png",
    "new_path": "/skins/147/Timeless_Classics/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/147/PartyShipyardIcon.png",
    "new_path": "/skins/147/Timeless_Classics/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/092/Banner.png",
    "new_path": "/skins/092/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/092/Icon.png",
    "new_path": "/skins/092/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/092/ChibiIcon.png",
    "new_path": "/skins/092/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/092/ShipyardIcon.png",
    "new_path": "/skins/092/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/092/KaiBanner.png",
    "new_path": "/skins/092/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/092/KaiIcon.png",
    "new_path": "/skins/092/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/092/KaiChibiIcon.png",
    "new_path": "/skins/092/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/092/KaiShipyardIcon.png",
    "new_path": "/skins/092/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/092/PartyBanner.png",
    "new_path": "/skins/092/Seraphic_Sunshine/Banner.png"
  },
  {
    "old_path": "/images/skins/092/PartyIcon.png",
    "new_path": "/skins/092/Seraphic_Sunshine/Icon.png"
  },
  {
    "old_path": "/images/skins/092/PartyChibiIcon.png",
    "new_path": "/skins/092/Seraphic_Sunshine/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/092/PartyShipyardIcon.png",
    "new_path": "/skins/092/Seraphic_Sunshine/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/091/Banner.png",
    "new_path": "/skins/091/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/091/Icon.png",
    "new_path": "/skins/091/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/091/ChibiIcon.png",
    "new_path": "/skins/091/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/091/ShipyardIcon.png",
    "new_path": "/skins/091/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/091/KaiBanner.png",
    "new_path": "/skins/091/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/091/KaiIcon.png",
    "new_path": "/skins/091/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/091/KaiChibiIcon.png",
    "new_path": "/skins/091/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/091/KaiShipyardIcon.png",
    "new_path": "/skins/091/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Plan011/Banner.png",
    "new_path": "/skins/Plan011/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/Plan011/Icon.png",
    "new_path": "/skins/Plan011/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/Plan011/ChibiIcon.png",
    "new_path": "/skins/Plan011/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Plan011/ShipyardIcon.png",
    "new_path": "/skins/Plan011/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Plan011/WeddingBanner.png",
    "new_path": "/skins/Plan011/Wedding/Banner.png"
  },
  {
    "old_path": "/images/skins/Plan011/WeddingIcon.png",
    "new_path": "/skins/Plan011/Wedding/Icon.png"
  },
  {
    "old_path": "/images/skins/Plan011/WeddingChibiIcon.png",
    "new_path": "/skins/Plan011/Wedding/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Plan011/WeddingShipyardIcon.png",
    "new_path": "/skins/Plan011/Wedding/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Plan011/New_YearBanner.png",
    "new_path": "/skins/Plan011/Dark_Raiments_of_Gagaku/Banner.png"
  },
  {
    "old_path": "/images/skins/Plan011/New_YearIcon.png",
    "new_path": "/skins/Plan011/Dark_Raiments_of_Gagaku/Icon.png"
  },
  {
    "old_path": "/images/skins/Plan011/New_YearChibiIcon.png",
    "new_path": "/skins/Plan011/Dark_Raiments_of_Gagaku/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Plan011/New_YearShipyardIcon.png",
    "new_path": "/skins/Plan011/Dark_Raiments_of_Gagaku/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/254/Banner.png",
    "new_path": "/skins/254/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/254/Icon.png",
    "new_path": "/skins/254/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/254/ChibiIcon.png",
    "new_path": "/skins/254/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/254/ShipyardIcon.png",
    "new_path": "/skins/254/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/151/Banner.png",
    "new_path": "/skins/151/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/151/Icon.png",
    "new_path": "/skins/151/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/151/ChibiIcon.png",
    "new_path": "/skins/151/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/151/ShipyardIcon.png",
    "new_path": "/skins/151/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/151/SchoolBanner.png",
    "new_path": "/skins/151/5_Minutes_Till_Im_Late/Banner.png"
  },
  {
    "old_path": "/images/skins/151/SchoolIcon.png",
    "new_path": "/skins/151/5_Minutes_Till_Im_Late/Icon.png"
  },
  {
    "old_path": "/images/skins/151/SchoolChibiIcon.png",
    "new_path": "/skins/151/5_Minutes_Till_Im_Late/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/151/SchoolShipyardIcon.png",
    "new_path": "/skins/151/5_Minutes_Till_Im_Late/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/151/AtreBanner.png",
    "new_path": "/skins/151/Mascot_Bucky/Banner.png"
  },
  {
    "old_path": "/images/skins/151/AtreIcon.png",
    "new_path": "/skins/151/Mascot_Bucky/Icon.png"
  },
  {
    "old_path": "/images/skins/151/AtreChibiIcon.png",
    "new_path": "/skins/151/Mascot_Bucky/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/151/AtreShipyardIcon.png",
    "new_path": "/skins/151/Mascot_Bucky/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/151/PartyBanner.png",
    "new_path": "/skins/151/Music_Pixy/Banner.png"
  },
  {
    "old_path": "/images/skins/151/PartyIcon.png",
    "new_path": "/skins/151/Music_Pixy/Icon.png"
  },
  {
    "old_path": "/images/skins/151/PartyChibiIcon.png",
    "new_path": "/skins/151/Music_Pixy/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/151/PartyShipyardIcon.png",
    "new_path": "/skins/151/Music_Pixy/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/151/IdolBanner.png",
    "new_path": "/skins/151/Fubuki_Halation/Banner.png"
  },
  {
    "old_path": "/images/skins/151/IdolIcon.png",
    "new_path": "/skins/151/Fubuki_Halation/Icon.png"
  },
  {
    "old_path": "/images/skins/151/IdolChibiIcon.png",
    "new_path": "/skins/151/Fubuki_Halation/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/151/IdolShipyardIcon.png",
    "new_path": "/skins/151/Fubuki_Halation/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/151/PizzaBanner.png",
    "new_path": "/skins/151/Stormy_WaitressinTraining/Banner.png"
  },
  {
    "old_path": "/images/skins/151/PizzaIcon.png",
    "new_path": "/skins/151/Stormy_WaitressinTraining/Icon.png"
  },
  {
    "old_path": "/images/skins/151/PizzaChibiIcon.png",
    "new_path": "/skins/151/Stormy_WaitressinTraining/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/151/PizzaShipyardIcon.png",
    "new_path": "/skins/151/Stormy_WaitressinTraining/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Collab036/Banner.png",
    "new_path": "/skins/Collab036/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/Collab036/Icon.png",
    "new_path": "/skins/Collab036/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/Collab036/ChibiIcon.png",
    "new_path": "/skins/Collab036/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Collab036/ShipyardIcon.png",
    "new_path": "/skins/Collab036/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Collab036/CollabBanner.png",
    "new_path": "/skins/Collab036/Fumiruiru_Utawarerumono/Banner.png"
  },
  {
    "old_path": "/images/skins/Collab036/CollabIcon.png",
    "new_path": "/skins/Collab036/Fumiruiru_Utawarerumono/Icon.png"
  },
  {
    "old_path": "/images/skins/Collab036/CollabChibiIcon.png",
    "new_path": "/skins/Collab036/Fumiruiru_Utawarerumono/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Collab036/CollabShipyardIcon.png",
    "new_path": "/skins/Collab036/Fumiruiru_Utawarerumono/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/277/Banner.png",
    "new_path": "/skins/277/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/277/Icon.png",
    "new_path": "/skins/277/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/277/ChibiIcon.png",
    "new_path": "/skins/277/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/277/ShipyardIcon.png",
    "new_path": "/skins/277/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/277/SleepyChibiIcon.png",
    "new_path": "/skins/277/Sleepy_Fairy/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/277/SleepyShipyardIcon.png",
    "new_path": "/skins/277/Sleepy_Fairy/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/190/Banner.png",
    "new_path": "/skins/190/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/190/Icon.png",
    "new_path": "/skins/190/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/190/ChibiIcon.png",
    "new_path": "/skins/190/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/190/ShipyardIcon.png",
    "new_path": "/skins/190/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/190/KaiBanner.png",
    "new_path": "/skins/190/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/190/KaiIcon.png",
    "new_path": "/skins/190/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/190/KaiChibiIcon.png",
    "new_path": "/skins/190/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/190/KaiShipyardIcon.png",
    "new_path": "/skins/190/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/208/Banner.png",
    "new_path": "/skins/208/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/208/Icon.png",
    "new_path": "/skins/208/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/208/ChibiIcon.png",
    "new_path": "/skins/208/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/208/ShipyardIcon.png",
    "new_path": "/skins/208/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/208/KaiBanner.png",
    "new_path": "/skins/208/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/208/KaiIcon.png",
    "new_path": "/skins/208/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/208/KaiChibiIcon.png",
    "new_path": "/skins/208/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/208/KaiShipyardIcon.png",
    "new_path": "/skins/208/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/208/SpringBanner.png",
    "new_path": "/skins/208/The_Celebration_of_Spring/Banner.png"
  },
  {
    "old_path": "/images/skins/208/SpringIcon.png",
    "new_path": "/skins/208/The_Celebration_of_Spring/Icon.png"
  },
  {
    "old_path": "/images/skins/208/SpringChibiIcon.png",
    "new_path": "/skins/208/The_Celebration_of_Spring/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/208/SpringShipyardIcon.png",
    "new_path": "/skins/208/The_Celebration_of_Spring/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/208/CasualBanner.png",
    "new_path": "/skins/208/Perfect_Partner/Banner.png"
  },
  {
    "old_path": "/images/skins/208/CasualIcon.png",
    "new_path": "/skins/208/Perfect_Partner/Icon.png"
  },
  {
    "old_path": "/images/skins/208/CasualChibiIcon.png",
    "new_path": "/skins/208/Perfect_Partner/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/208/CasualShipyardIcon.png",
    "new_path": "/skins/208/Perfect_Partner/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/30005/Banner.png",
    "new_path": "/skins/30005/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/30005/Icon.png",
    "new_path": "/skins/30005/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/30005/ChibiIcon.png",
    "new_path": "/skins/30005/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/30005/ShipyardIcon.png",
    "new_path": "/skins/30005/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/117/Banner.png",
    "new_path": "/skins/117/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/117/Icon.png",
    "new_path": "/skins/117/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/117/ChibiIcon.png",
    "new_path": "/skins/117/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/117/ShipyardIcon.png",
    "new_path": "/skins/117/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/437/Banner.png",
    "new_path": "/skins/437/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/437/Icon.png",
    "new_path": "/skins/437/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/437/ChibiIcon.png",
    "new_path": "/skins/437/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/437/ShipyardIcon.png",
    "new_path": "/skins/437/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/437/PrisonBanner.png",
    "new_path": "/skins/437/Imposing_Warden/Banner.png"
  },
  {
    "old_path": "/images/skins/437/PrisonIcon.png",
    "new_path": "/skins/437/Imposing_Warden/Icon.png"
  },
  {
    "old_path": "/images/skins/437/PrisonChibiIcon.png",
    "new_path": "/skins/437/Imposing_Warden/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/437/PrisonShipyardIcon.png",
    "new_path": "/skins/437/Imposing_Warden/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/437/CasualBanner.png",
    "new_path": "/skins/437/Keeper_of_the_Firewater/Banner.png"
  },
  {
    "old_path": "/images/skins/437/CasualIcon.png",
    "new_path": "/skins/437/Keeper_of_the_Firewater/Icon.png"
  },
  {
    "old_path": "/images/skins/437/CasualChibiIcon.png",
    "new_path": "/skins/437/Keeper_of_the_Firewater/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/437/CasualShipyardIcon.png",
    "new_path": "/skins/437/Keeper_of_the_Firewater/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Plan012/Banner.png",
    "new_path": "/skins/Plan012/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/Plan012/Icon.png",
    "new_path": "/skins/Plan012/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/Plan012/ChibiIcon.png",
    "new_path": "/skins/Plan012/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Plan012/ShipyardIcon.png",
    "new_path": "/skins/Plan012/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Plan012/SummerBanner.png",
    "new_path": "/skins/Plan012/Tropical_Environs_Acclimation_Service_Equipment/Banner.png"
  },
  {
    "old_path": "/images/skins/Plan012/SummerIcon.png",
    "new_path": "/skins/Plan012/Tropical_Environs_Acclimation_Service_Equipment/Icon.png"
  },
  {
    "old_path": "/images/skins/Plan012/SummerChibiIcon.png",
    "new_path": "/skins/Plan012/Tropical_Environs_Acclimation_Service_Equipment/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Plan012/SummerShipyardIcon.png",
    "new_path": "/skins/Plan012/Tropical_Environs_Acclimation_Service_Equipment/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/418/Banner.png",
    "new_path": "/skins/418/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/418/Icon.png",
    "new_path": "/skins/418/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/418/ChibiIcon.png",
    "new_path": "/skins/418/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/418/ShipyardIcon.png",
    "new_path": "/skins/418/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Plan008/Banner.png",
    "new_path": "/skins/Plan008/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/Plan008/Icon.png",
    "new_path": "/skins/Plan008/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/Plan008/ChibiIcon.png",
    "new_path": "/skins/Plan008/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Plan008/ShipyardIcon.png",
    "new_path": "/skins/Plan008/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Plan008/PartyBanner.png",
    "new_path": "/skins/Plan008/South_Town_Pearl/Banner.png"
  },
  {
    "old_path": "/images/skins/Plan008/PartyIcon.png",
    "new_path": "/skins/Plan008/South_Town_Pearl/Icon.png"
  },
  {
    "old_path": "/images/skins/Plan008/PartyChibiIcon.png",
    "new_path": "/skins/Plan008/South_Town_Pearl/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Plan008/PartyShipyardIcon.png",
    "new_path": "/skins/Plan008/South_Town_Pearl/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Plan008/SummerBanner.png",
    "new_path": "/skins/Plan008/Lanier_Swan/Banner.png"
  },
  {
    "old_path": "/images/skins/Plan008/SummerIcon.png",
    "new_path": "/skins/Plan008/Lanier_Swan/Icon.png"
  },
  {
    "old_path": "/images/skins/Plan008/SummerChibiIcon.png",
    "new_path": "/skins/Plan008/Lanier_Swan/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Plan008/SummerShipyardIcon.png",
    "new_path": "/skins/Plan008/Lanier_Swan/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Plan008/New_YearBanner.png",
    "new_path": "/skins/Plan008/Exalted_Vibrance/Banner.png"
  },
  {
    "old_path": "/images/skins/Plan008/New_YearIcon.png",
    "new_path": "/skins/Plan008/Exalted_Vibrance/Icon.png"
  },
  {
    "old_path": "/images/skins/Plan008/New_YearChibiIcon.png",
    "new_path": "/skins/Plan008/Exalted_Vibrance/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Plan008/New_YearShipyardIcon.png",
    "new_path": "/skins/Plan008/Exalted_Vibrance/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/412/Banner.png",
    "new_path": "/skins/412/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/412/Icon.png",
    "new_path": "/skins/412/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/412/ChibiIcon.png",
    "new_path": "/skins/412/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/412/ShipyardIcon.png",
    "new_path": "/skins/412/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/412/CasualBanner.png",
    "new_path": "/skins/412/Fitness_Master/Banner.png"
  },
  {
    "old_path": "/images/skins/412/CasualIcon.png",
    "new_path": "/skins/412/Fitness_Master/Icon.png"
  },
  {
    "old_path": "/images/skins/412/CasualChibiIcon.png",
    "new_path": "/skins/412/Fitness_Master/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/412/CasualShipyardIcon.png",
    "new_path": "/skins/412/Fitness_Master/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/412/SummerBanner.png",
    "new_path": "/skins/412/High_Tide_Under_the_Sunlight/Banner.png"
  },
  {
    "old_path": "/images/skins/412/SummerIcon.png",
    "new_path": "/skins/412/High_Tide_Under_the_Sunlight/Icon.png"
  },
  {
    "old_path": "/images/skins/412/SummerChibiIcon.png",
    "new_path": "/skins/412/High_Tide_Under_the_Sunlight/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/412/SummerShipyardIcon.png",
    "new_path": "/skins/412/High_Tide_Under_the_Sunlight/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/423/Banner.png",
    "new_path": "/skins/423/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/423/Icon.png",
    "new_path": "/skins/423/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/423/ChibiIcon.png",
    "new_path": "/skins/423/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/423/ShipyardIcon.png",
    "new_path": "/skins/423/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/423/SchoolBanner.png",
    "new_path": "/skins/423/A_Maid_in_Class/Banner.png"
  },
  {
    "old_path": "/images/skins/423/SchoolIcon.png",
    "new_path": "/skins/423/A_Maid_in_Class/Icon.png"
  },
  {
    "old_path": "/images/skins/423/SchoolChibiIcon.png",
    "new_path": "/skins/423/A_Maid_in_Class/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/423/SchoolShipyardIcon.png",
    "new_path": "/skins/423/A_Maid_in_Class/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/148/Banner.png",
    "new_path": "/skins/148/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/148/Icon.png",
    "new_path": "/skins/148/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/148/ChibiIcon.png",
    "new_path": "/skins/148/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/148/ShipyardIcon.png",
    "new_path": "/skins/148/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/148/SchoolBanner.png",
    "new_path": "/skins/148/Glorious_School_Life/Banner.png"
  },
  {
    "old_path": "/images/skins/148/SchoolChibiIcon.png",
    "new_path": "/skins/148/Glorious_School_Life/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/148/SchoolShipyardIcon.png",
    "new_path": "/skins/148/Glorious_School_Life/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/148/SpringBanner.png",
    "new_path": "/skins/148/Pungent_Plum/Banner.png"
  },
  {
    "old_path": "/images/skins/148/SpringIcon.png",
    "new_path": "/skins/148/Pungent_Plum/Icon.png"
  },
  {
    "old_path": "/images/skins/148/SpringChibiIcon.png",
    "new_path": "/skins/148/Pungent_Plum/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/148/SpringShipyardIcon.png",
    "new_path": "/skins/148/Pungent_Plum/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/113/Banner.png",
    "new_path": "/skins/113/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/113/Icon.png",
    "new_path": "/skins/113/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/113/ChibiIcon.png",
    "new_path": "/skins/113/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/113/ShipyardIcon.png",
    "new_path": "/skins/113/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/113/SpringBanner.png",
    "new_path": "/skins/113/Brilliance_in_Purple/Banner.png"
  },
  {
    "old_path": "/images/skins/113/SpringIcon.png",
    "new_path": "/skins/113/Brilliance_in_Purple/Icon.png"
  },
  {
    "old_path": "/images/skins/113/SpringChibiIcon.png",
    "new_path": "/skins/113/Brilliance_in_Purple/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/113/SpringShipyardIcon.png",
    "new_path": "/skins/113/Brilliance_in_Purple/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/094/Banner.png",
    "new_path": "/skins/094/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/094/Icon.png",
    "new_path": "/skins/094/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/094/ChibiIcon.png",
    "new_path": "/skins/094/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/094/ShipyardIcon.png",
    "new_path": "/skins/094/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/094/SpringBanner.png",
    "new_path": "/skins/094/Jokey_Adjudicator/Banner.png"
  },
  {
    "old_path": "/images/skins/094/SpringIcon.png",
    "new_path": "/skins/094/Jokey_Adjudicator/Icon.png"
  },
  {
    "old_path": "/images/skins/094/SpringChibiIcon.png",
    "new_path": "/skins/094/Jokey_Adjudicator/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/094/SpringShipyardIcon.png",
    "new_path": "/skins/094/Jokey_Adjudicator/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/249/Banner.png",
    "new_path": "/skins/249/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/249/Icon.png",
    "new_path": "/skins/249/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/249/ChibiIcon.png",
    "new_path": "/skins/249/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/249/ShipyardIcon.png",
    "new_path": "/skins/249/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/249/HalloweenBanner.png",
    "new_path": "/skins/249/Nightmarish_Succubus/Banner.png"
  },
  {
    "old_path": "/images/skins/249/HalloweenIcon.png",
    "new_path": "/skins/249/Nightmarish_Succubus/Icon.png"
  },
  {
    "old_path": "/images/skins/249/HalloweenChibiIcon.png",
    "new_path": "/skins/249/Nightmarish_Succubus/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/249/HalloweenShipyardIcon.png",
    "new_path": "/skins/249/Nightmarish_Succubus/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/30007/Banner.png",
    "new_path": "/skins/30007/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/30007/Icon.png",
    "new_path": "/skins/30007/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/30007/ChibiIcon.png",
    "new_path": "/skins/30007/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/30007/ShipyardIcon.png",
    "new_path": "/skins/30007/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/252/Banner.png",
    "new_path": "/skins/252/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/252/Icon.png",
    "new_path": "/skins/252/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/252/ChibiIcon.png",
    "new_path": "/skins/252/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/252/ShipyardIcon.png",
    "new_path": "/skins/252/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/252/SummerBanner.png",
    "new_path": "/skins/252/Beachside_Urd/Banner.png"
  },
  {
    "old_path": "/images/skins/252/SummerIcon.png",
    "new_path": "/skins/252/Beachside_Urd/Icon.png"
  },
  {
    "old_path": "/images/skins/252/SummerChibiIcon.png",
    "new_path": "/skins/252/Beachside_Urd/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/252/SummerShipyardIcon.png",
    "new_path": "/skins/252/Beachside_Urd/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Collab008/Banner.png",
    "new_path": "/skins/Collab008/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/Collab008/Icon.png",
    "new_path": "/skins/Collab008/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/Collab008/ChibiIcon.png",
    "new_path": "/skins/Collab008/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Collab008/ShipyardIcon.png",
    "new_path": "/skins/Collab008/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Collab008/CollabChibiIcon.png",
    "new_path": "/skins/Collab008/Goddesses_Moment/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Collab008/CollabShipyardIcon.png",
    "new_path": "/skins/Collab008/Goddesses_Moment/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/497/Banner.png",
    "new_path": "/skins/497/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/497/Icon.png",
    "new_path": "/skins/497/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/497/ChibiIcon.png",
    "new_path": "/skins/497/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/497/ShipyardIcon.png",
    "new_path": "/skins/497/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/497/CasualBanner.png",
    "new_path": "/skins/497/A_Daytime_Delight_is_in_a_Book/Banner.png"
  },
  {
    "old_path": "/images/skins/497/CasualIcon.png",
    "new_path": "/skins/497/A_Daytime_Delight_is_in_a_Book/Icon.png"
  },
  {
    "old_path": "/images/skins/497/CasualChibiIcon.png",
    "new_path": "/skins/497/A_Daytime_Delight_is_in_a_Book/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/497/CasualShipyardIcon.png",
    "new_path": "/skins/497/A_Daytime_Delight_is_in_a_Book/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/093/Banner.png",
    "new_path": "/skins/093/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/093/Icon.png",
    "new_path": "/skins/093/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/093/ChibiIcon.png",
    "new_path": "/skins/093/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/093/ShipyardIcon.png",
    "new_path": "/skins/093/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/007/Banner.png",
    "new_path": "/skins/007/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/007/Icon.png",
    "new_path": "/skins/007/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/007/ChibiIcon.png",
    "new_path": "/skins/007/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/007/ShipyardIcon.png",
    "new_path": "/skins/007/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/007/ChristmasBanner.png",
    "new_path": "/skins/007/Christmas_Photoshoot/Banner.png"
  },
  {
    "old_path": "/images/skins/007/ChristmasIcon.png",
    "new_path": "/skins/007/Christmas_Photoshoot/Icon.png"
  },
  {
    "old_path": "/images/skins/007/ChristmasChibiIcon.png",
    "new_path": "/skins/007/Christmas_Photoshoot/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/007/ChristmasShipyardIcon.png",
    "new_path": "/skins/007/Christmas_Photoshoot/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/499/Banner.png",
    "new_path": "/skins/499/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/499/Icon.png",
    "new_path": "/skins/499/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/499/ChibiIcon.png",
    "new_path": "/skins/499/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/499/ShipyardIcon.png",
    "new_path": "/skins/499/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/499/CasualBanner.png",
    "new_path": "/skins/499/Mornings_Beckoning/Banner.png"
  },
  {
    "old_path": "/images/skins/499/CasualIcon.png",
    "new_path": "/skins/499/Mornings_Beckoning/Icon.png"
  },
  {
    "old_path": "/images/skins/499/CasualChibiIcon.png",
    "new_path": "/skins/499/Mornings_Beckoning/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/499/CasualShipyardIcon.png",
    "new_path": "/skins/499/Mornings_Beckoning/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/431/Banner.png",
    "new_path": "/skins/431/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/431/Icon.png",
    "new_path": "/skins/431/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/431/ChibiIcon.png",
    "new_path": "/skins/431/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/431/ShipyardIcon.png",
    "new_path": "/skins/431/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/431/PrisonBanner.png",
    "new_path": "/skins/431/Bad_Bunny_Behind_Bars/Banner.png"
  },
  {
    "old_path": "/images/skins/431/PrisonIcon.png",
    "new_path": "/skins/431/Bad_Bunny_Behind_Bars/Icon.png"
  },
  {
    "old_path": "/images/skins/431/PrisonChibiIcon.png",
    "new_path": "/skins/431/Bad_Bunny_Behind_Bars/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/431/PrisonShipyardIcon.png",
    "new_path": "/skins/431/Bad_Bunny_Behind_Bars/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/431/CasualBanner.png",
    "new_path": "/skins/431/Bunny_Remodeling_Plan/Banner.png"
  },
  {
    "old_path": "/images/skins/431/CasualIcon.png",
    "new_path": "/skins/431/Bunny_Remodeling_Plan/Icon.png"
  },
  {
    "old_path": "/images/skins/431/CasualChibiIcon.png",
    "new_path": "/skins/431/Bunny_Remodeling_Plan/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/431/CasualShipyardIcon.png",
    "new_path": "/skins/431/Bunny_Remodeling_Plan/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/431/Banner.png",
    "new_path": "/skins/431/Shadowy_Syndicate_Showdown/Banner.png"
  },
  {
    "old_path": "/images/skins/431/Icon.png",
    "new_path": "/skins/431/Shadowy_Syndicate_Showdown/Icon.png"
  },
  {
    "old_path": "/images/skins/431/ChibiIcon.png",
    "new_path": "/skins/431/Shadowy_Syndicate_Showdown/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/431/ShipyardIcon.png",
    "new_path": "/skins/431/Shadowy_Syndicate_Showdown/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/431/Special_ExerciseBanner.png",
    "new_path": "/skins/431/Shadowy_Syndicate_Showdown/Banner.png"
  },
  {
    "old_path": "/images/skins/431/Special_ExerciseIcon.png",
    "new_path": "/skins/431/Shadowy_Syndicate_Showdown/Icon.png"
  },
  {
    "old_path": "/images/skins/431/Special_ExerciseChibiIcon.png",
    "new_path": "/skins/431/Shadowy_Syndicate_Showdown/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/431/Special_ExerciseShipyardIcon.png",
    "new_path": "/skins/431/Shadowy_Syndicate_Showdown/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/532/Banner.png",
    "new_path": "/skins/532/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/532/Icon.png",
    "new_path": "/skins/532/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/532/ChibiIcon.png",
    "new_path": "/skins/532/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/532/ShipyardIcon.png",
    "new_path": "/skins/532/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/532/SpringBanner.png",
    "new_path": "/skins/532/A_Dance_Among_the_Lotuses/Banner.png"
  },
  {
    "old_path": "/images/skins/532/SpringIcon.png",
    "new_path": "/skins/532/A_Dance_Among_the_Lotuses/Icon.png"
  },
  {
    "old_path": "/images/skins/532/SpringChibiIcon.png",
    "new_path": "/skins/532/A_Dance_Among_the_Lotuses/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/532/SpringShipyardIcon.png",
    "new_path": "/skins/532/A_Dance_Among_the_Lotuses/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/531/Banner.png",
    "new_path": "/skins/531/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/531/Icon.png",
    "new_path": "/skins/531/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/531/ChibiIcon.png",
    "new_path": "/skins/531/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/531/ShipyardIcon.png",
    "new_path": "/skins/531/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/531/SpringBanner.png",
    "new_path": "/skins/531/VerseWeaver_at_the_Waters_Edge/Banner.png"
  },
  {
    "old_path": "/images/skins/531/SpringIcon.png",
    "new_path": "/skins/531/VerseWeaver_at_the_Waters_Edge/Icon.png"
  },
  {
    "old_path": "/images/skins/531/SpringChibiIcon.png",
    "new_path": "/skins/531/VerseWeaver_at_the_Waters_Edge/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/531/SpringShipyardIcon.png",
    "new_path": "/skins/531/VerseWeaver_at_the_Waters_Edge/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Plan019/Banner.png",
    "new_path": "/skins/Plan019/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/Plan019/Icon.png",
    "new_path": "/skins/Plan019/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/Plan019/ChibiIcon.png",
    "new_path": "/skins/Plan019/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Plan019/ShipyardIcon.png",
    "new_path": "/skins/Plan019/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Plan019/MaidBanner.png",
    "new_path": "/skins/Plan019/Slice_Dice_and_Serve/Banner.png"
  },
  {
    "old_path": "/images/skins/Plan019/MaidIcon.png",
    "new_path": "/skins/Plan019/Slice_Dice_and_Serve/Icon.png"
  },
  {
    "old_path": "/images/skins/Plan019/MaidChibiIcon.png",
    "new_path": "/skins/Plan019/Slice_Dice_and_Serve/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Plan019/MaidShipyardIcon.png",
    "new_path": "/skins/Plan019/Slice_Dice_and_Serve/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/427/Banner.png",
    "new_path": "/skins/427/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/427/Icon.png",
    "new_path": "/skins/427/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/427/ChibiIcon.png",
    "new_path": "/skins/427/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/427/ShipyardIcon.png",
    "new_path": "/skins/427/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/427/SpringBanner.png",
    "new_path": "/skins/427/Springs_Lucky_Star/Banner.png"
  },
  {
    "old_path": "/images/skins/427/SpringIcon.png",
    "new_path": "/skins/427/Springs_Lucky_Star/Icon.png"
  },
  {
    "old_path": "/images/skins/427/SpringChibiIcon.png",
    "new_path": "/skins/427/Springs_Lucky_Star/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/427/SpringShipyardIcon.png",
    "new_path": "/skins/427/Springs_Lucky_Star/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/318/Banner.png",
    "new_path": "/skins/318/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/318/Icon.png",
    "new_path": "/skins/318/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/318/ChibiIcon.png",
    "new_path": "/skins/318/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/318/ShipyardIcon.png",
    "new_path": "/skins/318/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/318/KaiBanner.png",
    "new_path": "/skins/318/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/318/KaiIcon.png",
    "new_path": "/skins/318/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/318/KaiChibiIcon.png",
    "new_path": "/skins/318/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/318/KaiShipyardIcon.png",
    "new_path": "/skins/318/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/318/SchoolBanner.png",
    "new_path": "/skins/318/The_Honors_Student/Banner.png"
  },
  {
    "old_path": "/images/skins/318/SchoolIcon.png",
    "new_path": "/skins/318/The_Honors_Student/Icon.png"
  },
  {
    "old_path": "/images/skins/318/SchoolChibiIcon.png",
    "new_path": "/skins/318/The_Honors_Student/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/318/SchoolShipyardIcon.png",
    "new_path": "/skins/318/The_Honors_Student/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/027/Banner.png",
    "new_path": "/skins/027/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/027/Icon.png",
    "new_path": "/skins/027/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/027/ChibiIcon.png",
    "new_path": "/skins/027/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/027/ShipyardIcon.png",
    "new_path": "/skins/027/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/027/KaiBanner.png",
    "new_path": "/skins/027/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/027/KaiIcon.png",
    "new_path": "/skins/027/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/027/KaiChibiIcon.png",
    "new_path": "/skins/027/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/027/KaiShipyardIcon.png",
    "new_path": "/skins/027/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/027/SummerBanner.png",
    "new_path": "/skins/027/Rebellious_Summer/Banner.png"
  },
  {
    "old_path": "/images/skins/027/SummerIcon.png",
    "new_path": "/skins/027/Rebellious_Summer/Icon.png"
  },
  {
    "old_path": "/images/skins/027/SummerChibiIcon.png",
    "new_path": "/skins/027/Rebellious_Summer/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/027/SummerShipyardIcon.png",
    "new_path": "/skins/027/Rebellious_Summer/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/027/PartyBanner.png",
    "new_path": "/skins/027/Prideful_Fairy_of_the_Ballroom/Banner.png"
  },
  {
    "old_path": "/images/skins/027/PartyIcon.png",
    "new_path": "/skins/027/Prideful_Fairy_of_the_Ballroom/Icon.png"
  },
  {
    "old_path": "/images/skins/027/PartyChibiIcon.png",
    "new_path": "/skins/027/Prideful_Fairy_of_the_Ballroom/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/027/PartyShipyardIcon.png",
    "new_path": "/skins/027/Prideful_Fairy_of_the_Ballroom/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/027/IdolBanner.png",
    "new_path": "/skins/027/Hammanyan_Pawnch/Banner.png"
  },
  {
    "old_path": "/images/skins/027/IdolIcon.png",
    "new_path": "/skins/027/Hammanyan_Pawnch/Icon.png"
  },
  {
    "old_path": "/images/skins/027/IdolChibiIcon.png",
    "new_path": "/skins/027/Hammanyan_Pawnch/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/027/IdolShipyardIcon.png",
    "new_path": "/skins/027/Hammanyan_Pawnch/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/027/ChristmasBanner.png",
    "new_path": "/skins/027/Holy_Night_Surprise/Banner.png"
  },
  {
    "old_path": "/images/skins/027/ChristmasIcon.png",
    "new_path": "/skins/027/Holy_Night_Surprise/Icon.png"
  },
  {
    "old_path": "/images/skins/027/ChristmasChibiIcon.png",
    "new_path": "/skins/027/Holy_Night_Surprise/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/027/ChristmasShipyardIcon.png",
    "new_path": "/skins/027/Holy_Night_Surprise/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/449/Banner.png",
    "new_path": "/skins/449/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/449/Icon.png",
    "new_path": "/skins/449/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/449/ChibiIcon.png",
    "new_path": "/skins/449/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/449/ShipyardIcon.png",
    "new_path": "/skins/449/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/449/SummerBanner.png",
    "new_path": "/skins/449/Morning_Moon_Beachside_Flower/Banner.png"
  },
  {
    "old_path": "/images/skins/449/SummerIcon.png",
    "new_path": "/skins/449/Morning_Moon_Beachside_Flower/Icon.png"
  },
  {
    "old_path": "/images/skins/449/SummerChibiIcon.png",
    "new_path": "/skins/449/Morning_Moon_Beachside_Flower/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/449/SummerShipyardIcon.png",
    "new_path": "/skins/449/Morning_Moon_Beachside_Flower/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/449/SpringBanner.png",
    "new_path": "/skins/449/Blossoming_Spring_Resplendent_Moon/Banner.png"
  },
  {
    "old_path": "/images/skins/449/SpringIcon.png",
    "new_path": "/skins/449/Blossoming_Spring_Resplendent_Moon/Icon.png"
  },
  {
    "old_path": "/images/skins/449/SpringChibiIcon.png",
    "new_path": "/skins/449/Blossoming_Spring_Resplendent_Moon/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/449/SpringShipyardIcon.png",
    "new_path": "/skins/449/Blossoming_Spring_Resplendent_Moon/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/096/Banner.png",
    "new_path": "/skins/096/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/096/Icon.png",
    "new_path": "/skins/096/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/096/ChibiIcon.png",
    "new_path": "/skins/096/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/096/ShipyardIcon.png",
    "new_path": "/skins/096/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/10071/Banner.png",
    "new_path": "/skins/10071/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/10071/Icon.png",
    "new_path": "/skins/10071/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/10071/ChibiIcon.png",
    "new_path": "/skins/10071/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/10071/ShipyardIcon.png",
    "new_path": "/skins/10071/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/10071/FestivalBanner.png",
    "new_path": "/skins/10071/A_Taste_of_Tranquility/Banner.png"
  },
  {
    "old_path": "/images/skins/10071/FestivalIcon.png",
    "new_path": "/skins/10071/A_Taste_of_Tranquility/Icon.png"
  },
  {
    "old_path": "/images/skins/10071/FestivalChibiIcon.png",
    "new_path": "/skins/10071/A_Taste_of_Tranquility/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/10071/FestivalShipyardIcon.png",
    "new_path": "/skins/10071/A_Taste_of_Tranquility/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/206/Banner.png",
    "new_path": "/skins/206/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/206/Icon.png",
    "new_path": "/skins/206/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/206/ChibiIcon.png",
    "new_path": "/skins/206/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/206/ShipyardIcon.png",
    "new_path": "/skins/206/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/206/OriginalShipyardIcon.png",
    "new_path": "/skins/206/Original_Art/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/206/SchoolChibiIcon.png",
    "new_path": "/skins/206/Free_Time_Before_Class/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/206/SchoolShipyardIcon.png",
    "new_path": "/skins/206/Free_Time_Before_Class/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/206/PartyBanner.png",
    "new_path": "/skins/206/Scarlet_Innocence/Banner.png"
  },
  {
    "old_path": "/images/skins/206/PartyIcon.png",
    "new_path": "/skins/206/Scarlet_Innocence/Icon.png"
  },
  {
    "old_path": "/images/skins/206/PartyChibiIcon.png",
    "new_path": "/skins/206/Scarlet_Innocence/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/206/PartyShipyardIcon.png",
    "new_path": "/skins/206/Scarlet_Innocence/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/206/New_YearBanner.png",
    "new_path": "/skins/206/The_Elegant_Lotus/Banner.png"
  },
  {
    "old_path": "/images/skins/206/New_YearIcon.png",
    "new_path": "/skins/206/The_Elegant_Lotus/Icon.png"
  },
  {
    "old_path": "/images/skins/206/New_YearChibiIcon.png",
    "new_path": "/skins/206/The_Elegant_Lotus/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/206/New_YearShipyardIcon.png",
    "new_path": "/skins/206/The_Elegant_Lotus/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/296/Banner.png",
    "new_path": "/skins/296/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/296/Icon.png",
    "new_path": "/skins/296/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/296/ChibiIcon.png",
    "new_path": "/skins/296/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/296/ShipyardIcon.png",
    "new_path": "/skins/296/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/296/New_YearBanner.png",
    "new_path": "/skins/296/A_Dance_for_the_Coming_Spring/Banner.png"
  },
  {
    "old_path": "/images/skins/296/New_YearIcon.png",
    "new_path": "/skins/296/A_Dance_for_the_Coming_Spring/Icon.png"
  },
  {
    "old_path": "/images/skins/296/New_YearChibiIcon.png",
    "new_path": "/skins/296/A_Dance_for_the_Coming_Spring/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/296/New_YearShipyardIcon.png",
    "new_path": "/skins/296/A_Dance_for_the_Coming_Spring/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/10083/Banner.png",
    "new_path": "/skins/10083/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/10083/Icon.png",
    "new_path": "/skins/10083/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/10083/ChibiIcon.png",
    "new_path": "/skins/10083/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/10083/ShipyardIcon.png",
    "new_path": "/skins/10083/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/10083/CasualBanner.png",
    "new_path": "/skins/10083/Seaside_Scoop/Banner.png"
  },
  {
    "old_path": "/images/skins/10083/CasualIcon.png",
    "new_path": "/skins/10083/Seaside_Scoop/Icon.png"
  },
  {
    "old_path": "/images/skins/10083/CasualChibiIcon.png",
    "new_path": "/skins/10083/Seaside_Scoop/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/10083/CasualShipyardIcon.png",
    "new_path": "/skins/10083/Seaside_Scoop/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/369/Banner.png",
    "new_path": "/skins/369/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/369/Icon.png",
    "new_path": "/skins/369/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/369/ChibiIcon.png",
    "new_path": "/skins/369/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/369/ShipyardIcon.png",
    "new_path": "/skins/369/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/171/Banner.png",
    "new_path": "/skins/171/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/171/Icon.png",
    "new_path": "/skins/171/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/171/ChibiIcon.png",
    "new_path": "/skins/171/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/171/ShipyardIcon.png",
    "new_path": "/skins/171/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/171/KaiBanner.png",
    "new_path": "/skins/171/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/171/KaiIcon.png",
    "new_path": "/skins/171/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/171/KaiChibiIcon.png",
    "new_path": "/skins/171/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/171/KaiShipyardIcon.png",
    "new_path": "/skins/171/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/171/SnowBanner.png",
    "new_path": "/skins/171/Snow_Day_Hatsuharu/Banner.png"
  },
  {
    "old_path": "/images/skins/171/SnowIcon.png",
    "new_path": "/skins/171/Snow_Day_Hatsuharu/Icon.png"
  },
  {
    "old_path": "/images/skins/171/SnowChibiIcon.png",
    "new_path": "/skins/171/Snow_Day_Hatsuharu/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/171/SnowShipyardIcon.png",
    "new_path": "/skins/171/Snow_Day_Hatsuharu/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/171/PartyBanner.png",
    "new_path": "/skins/171/Hatsuharu_in_the_Limelight/Banner.png"
  },
  {
    "old_path": "/images/skins/171/PartyIcon.png",
    "new_path": "/skins/171/Hatsuharu_in_the_Limelight/Icon.png"
  },
  {
    "old_path": "/images/skins/171/PartyChibiIcon.png",
    "new_path": "/skins/171/Hatsuharu_in_the_Limelight/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/171/PartyShipyardIcon.png",
    "new_path": "/skins/171/Hatsuharu_in_the_Limelight/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/174/Banner.png",
    "new_path": "/skins/174/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/174/Icon.png",
    "new_path": "/skins/174/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/174/ChibiIcon.png",
    "new_path": "/skins/174/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/174/ShipyardIcon.png",
    "new_path": "/skins/174/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/174/KaiBanner.png",
    "new_path": "/skins/174/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/174/KaiIcon.png",
    "new_path": "/skins/174/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/174/KaiChibiIcon.png",
    "new_path": "/skins/174/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/174/KaiShipyardIcon.png",
    "new_path": "/skins/174/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/174/PartyBanner.png",
    "new_path": "/skins/174/Perennial_Joy/Banner.png"
  },
  {
    "old_path": "/images/skins/174/PartyIcon.png",
    "new_path": "/skins/174/Perennial_Joy/Icon.png"
  },
  {
    "old_path": "/images/skins/174/PartyChibiIcon.png",
    "new_path": "/skins/174/Perennial_Joy/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/174/PartyShipyardIcon.png",
    "new_path": "/skins/174/Perennial_Joy/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/365/Banner.png",
    "new_path": "/skins/365/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/365/Icon.png",
    "new_path": "/skins/365/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/365/ChibiIcon.png",
    "new_path": "/skins/365/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/365/ShipyardIcon.png",
    "new_path": "/skins/365/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/033/Banner.png",
    "new_path": "/skins/033/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/033/Icon.png",
    "new_path": "/skins/033/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/033/ChibiIcon.png",
    "new_path": "/skins/033/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/033/ShipyardIcon.png",
    "new_path": "/skins/033/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/033/KaiBanner.png",
    "new_path": "/skins/033/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/033/KaiIcon.png",
    "new_path": "/skins/033/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/033/KaiChibiIcon.png",
    "new_path": "/skins/033/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/033/KaiShipyardIcon.png",
    "new_path": "/skins/033/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/033/New_YearBanner.png",
    "new_path": "/skins/033/New_Years_Bluebird/Banner.png"
  },
  {
    "old_path": "/images/skins/033/New_YearIcon.png",
    "new_path": "/skins/033/New_Years_Bluebird/Icon.png"
  },
  {
    "old_path": "/images/skins/033/New_YearChibiIcon.png",
    "new_path": "/skins/033/New_Years_Bluebird/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/033/New_YearShipyardIcon.png",
    "new_path": "/skins/033/New_Years_Bluebird/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/033/PartyBanner.png",
    "new_path": "/skins/033/May_I_Have_this_Dance/Banner.png"
  },
  {
    "old_path": "/images/skins/033/PartyIcon.png",
    "new_path": "/skins/033/May_I_Have_this_Dance/Icon.png"
  },
  {
    "old_path": "/images/skins/033/PartyChibiIcon.png",
    "new_path": "/skins/033/May_I_Have_this_Dance/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/033/PartyShipyardIcon.png",
    "new_path": "/skins/033/May_I_Have_this_Dance/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/30003/Banner.png",
    "new_path": "/skins/30003/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/30003/Icon.png",
    "new_path": "/skins/30003/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/30003/ChibiIcon.png",
    "new_path": "/skins/30003/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/30003/ShipyardIcon.png",
    "new_path": "/skins/30003/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/140/Banner.png",
    "new_path": "/skins/140/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/140/Icon.png",
    "new_path": "/skins/140/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/140/ChibiIcon.png",
    "new_path": "/skins/140/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/140/ShipyardIcon.png",
    "new_path": "/skins/140/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/140/KaiBanner.png",
    "new_path": "/skins/140/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/140/KaiIcon.png",
    "new_path": "/skins/140/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/140/KaiChibiIcon.png",
    "new_path": "/skins/140/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/140/KaiShipyardIcon.png",
    "new_path": "/skins/140/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/463/Banner.png",
    "new_path": "/skins/463/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/463/Icon.png",
    "new_path": "/skins/463/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/463/ChibiIcon.png",
    "new_path": "/skins/463/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/463/ShipyardIcon.png",
    "new_path": "/skins/463/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/463/HospitalBanner.png",
    "new_path": "/skins/463/Pure_White_Angel/Banner.png"
  },
  {
    "old_path": "/images/skins/463/HospitalIcon.png",
    "new_path": "/skins/463/Pure_White_Angel/Icon.png"
  },
  {
    "old_path": "/images/skins/463/HospitalChibiIcon.png",
    "new_path": "/skins/463/Pure_White_Angel/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/463/HospitalShipyardIcon.png",
    "new_path": "/skins/463/Pure_White_Angel/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/463/SummerBanner.png",
    "new_path": "/skins/463/Pure_White_Holiday/Banner.png"
  },
  {
    "old_path": "/images/skins/463/SummerIcon.png",
    "new_path": "/skins/463/Pure_White_Holiday/Icon.png"
  },
  {
    "old_path": "/images/skins/463/SummerChibiIcon.png",
    "new_path": "/skins/463/Pure_White_Holiday/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/463/SummerShipyardIcon.png",
    "new_path": "/skins/463/Pure_White_Holiday/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/463/PartyBanner.png",
    "new_path": "/skins/463/Graceful_Afternoon_Tea/Banner.png"
  },
  {
    "old_path": "/images/skins/463/PartyIcon.png",
    "new_path": "/skins/463/Graceful_Afternoon_Tea/Icon.png"
  },
  {
    "old_path": "/images/skins/463/PartyChibiIcon.png",
    "new_path": "/skins/463/Graceful_Afternoon_Tea/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/463/PartyShipyardIcon.png",
    "new_path": "/skins/463/Graceful_Afternoon_Tea/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/463/SpringBanner.png",
    "new_path": "/skins/463/Pristine_Herbalist/Banner.png"
  },
  {
    "old_path": "/images/skins/463/SpringIcon.png",
    "new_path": "/skins/463/Pristine_Herbalist/Icon.png"
  },
  {
    "old_path": "/images/skins/463/SpringChibiIcon.png",
    "new_path": "/skins/463/Pristine_Herbalist/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/463/SpringShipyardIcon.png",
    "new_path": "/skins/463/Pristine_Herbalist/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/160/Banner.png",
    "new_path": "/skins/160/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/160/Icon.png",
    "new_path": "/skins/160/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/160/ChibiIcon.png",
    "new_path": "/skins/160/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/160/ShipyardIcon.png",
    "new_path": "/skins/160/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/160/New_YearBanner.png",
    "new_path": "/skins/160/New_Years_Little_Imp/Banner.png"
  },
  {
    "old_path": "/images/skins/160/New_YearIcon.png",
    "new_path": "/skins/160/New_Years_Little_Imp/Icon.png"
  },
  {
    "old_path": "/images/skins/160/New_YearChibiIcon.png",
    "new_path": "/skins/160/New_Years_Little_Imp/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/160/New_YearShipyardIcon.png",
    "new_path": "/skins/160/New_Years_Little_Imp/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/205/Banner.png",
    "new_path": "/skins/205/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/205/Icon.png",
    "new_path": "/skins/205/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/205/ChibiIcon.png",
    "new_path": "/skins/205/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/205/ShipyardIcon.png",
    "new_path": "/skins/205/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/205/OriginalShipyardIcon.png",
    "new_path": "/skins/205/Original_Art/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/205/SleepyBanner.png",
    "new_path": "/skins/205/Moonlit_Cruise/Banner.png"
  },
  {
    "old_path": "/images/skins/205/SleepyIcon.png",
    "new_path": "/skins/205/Moonlit_Cruise/Icon.png"
  },
  {
    "old_path": "/images/skins/205/SleepyChibiIcon.png",
    "new_path": "/skins/205/Moonlit_Cruise/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/205/SleepyShipyardIcon.png",
    "new_path": "/skins/205/Moonlit_Cruise/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/205/SpringBanner.png",
    "new_path": "/skins/205/Fragrant_Red_Plum/Banner.png"
  },
  {
    "old_path": "/images/skins/205/SpringIcon.png",
    "new_path": "/skins/205/Fragrant_Red_Plum/Icon.png"
  },
  {
    "old_path": "/images/skins/205/SpringChibiIcon.png",
    "new_path": "/skins/205/Fragrant_Red_Plum/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/205/SpringShipyardIcon.png",
    "new_path": "/skins/205/Fragrant_Red_Plum/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/205/SummerBanner.png",
    "new_path": "/skins/205/Beauty_of_the_White_Sands/Banner.png"
  },
  {
    "old_path": "/images/skins/205/SummerIcon.png",
    "new_path": "/skins/205/Beauty_of_the_White_Sands/Icon.png"
  },
  {
    "old_path": "/images/skins/205/SummerChibiIcon.png",
    "new_path": "/skins/205/Beauty_of_the_White_Sands/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/205/SummerShipyardIcon.png",
    "new_path": "/skins/205/Beauty_of_the_White_Sands/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/383/Banner.png",
    "new_path": "/skins/383/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/383/Icon.png",
    "new_path": "/skins/383/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/383/ChibiIcon.png",
    "new_path": "/skins/383/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/383/ShipyardIcon.png",
    "new_path": "/skins/383/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/30001/Banner.png",
    "new_path": "/skins/30001/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/30001/Icon.png",
    "new_path": "/skins/30001/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/30001/ChibiIcon.png",
    "new_path": "/skins/30001/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/30001/ShipyardIcon.png",
    "new_path": "/skins/30001/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/227/Banner.png",
    "new_path": "/skins/227/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/227/Icon.png",
    "new_path": "/skins/227/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/227/ChibiIcon.png",
    "new_path": "/skins/227/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/227/ShipyardIcon.png",
    "new_path": "/skins/227/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/227/KaiBanner.png",
    "new_path": "/skins/227/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/227/KaiIcon.png",
    "new_path": "/skins/227/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/227/KaiChibiIcon.png",
    "new_path": "/skins/227/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/227/KaiShipyardIcon.png",
    "new_path": "/skins/227/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/227/SchoolBanner.png",
    "new_path": "/skins/227/After_School_Bullies/Banner.png"
  },
  {
    "old_path": "/images/skins/227/SchoolIcon.png",
    "new_path": "/skins/227/After_School_Bullies/Icon.png"
  },
  {
    "old_path": "/images/skins/227/SchoolChibiIcon.png",
    "new_path": "/skins/227/After_School_Bullies/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/227/SchoolShipyardIcon.png",
    "new_path": "/skins/227/After_School_Bullies/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/218/Banner.png",
    "new_path": "/skins/218/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/218/Icon.png",
    "new_path": "/skins/218/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/218/ChibiIcon.png",
    "new_path": "/skins/218/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/218/ShipyardIcon.png",
    "new_path": "/skins/218/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/30006/Banner.png",
    "new_path": "/skins/30006/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/30006/Icon.png",
    "new_path": "/skins/30006/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/30006/ChibiIcon.png",
    "new_path": "/skins/30006/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/30006/ShipyardIcon.png",
    "new_path": "/skins/30006/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/362/Banner.png",
    "new_path": "/skins/362/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/362/Icon.png",
    "new_path": "/skins/362/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/362/ChibiIcon.png",
    "new_path": "/skins/362/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/362/ShipyardIcon.png",
    "new_path": "/skins/362/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/362/SchoolBanner.png",
    "new_path": "/skins/362/Little_Idol_Schoolgirl/Banner.png"
  },
  {
    "old_path": "/images/skins/362/SchoolIcon.png",
    "new_path": "/skins/362/Little_Idol_Schoolgirl/Icon.png"
  },
  {
    "old_path": "/images/skins/362/SchoolChibiIcon.png",
    "new_path": "/skins/362/Little_Idol_Schoolgirl/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/362/SchoolShipyardIcon.png",
    "new_path": "/skins/362/Little_Idol_Schoolgirl/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/10062/Banner.png",
    "new_path": "/skins/10062/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/10062/Icon.png",
    "new_path": "/skins/10062/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/10062/ChibiIcon.png",
    "new_path": "/skins/10062/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/10062/ShipyardIcon.png",
    "new_path": "/skins/10062/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/10062/SummerBanner.png",
    "new_path": "/skins/10062/Summer_Angel_on_the_Shore/Banner.png"
  },
  {
    "old_path": "/images/skins/10062/SummerIcon.png",
    "new_path": "/skins/10062/Summer_Angel_on_the_Shore/Icon.png"
  },
  {
    "old_path": "/images/skins/10062/SummerChibiIcon.png",
    "new_path": "/skins/10062/Summer_Angel_on_the_Shore/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/10062/SummerShipyardIcon.png",
    "new_path": "/skins/10062/Summer_Angel_on_the_Shore/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/304/Banner.png",
    "new_path": "/skins/304/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/304/Icon.png",
    "new_path": "/skins/304/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/304/ChibiIcon.png",
    "new_path": "/skins/304/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/304/ShipyardIcon.png",
    "new_path": "/skins/304/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/304/SchoolBanner.png",
    "new_path": "/skins/304/Umbrella_Girl/Banner.png"
  },
  {
    "old_path": "/images/skins/304/SchoolIcon.png",
    "new_path": "/skins/304/Umbrella_Girl/Icon.png"
  },
  {
    "old_path": "/images/skins/304/SchoolChibiIcon.png",
    "new_path": "/skins/304/Umbrella_Girl/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/304/SchoolShipyardIcon.png",
    "new_path": "/skins/304/Umbrella_Girl/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/304/SummerBanner.png",
    "new_path": "/skins/304/Summer_Accident/Banner.png"
  },
  {
    "old_path": "/images/skins/304/SummerIcon.png",
    "new_path": "/skins/304/Summer_Accident/Icon.png"
  },
  {
    "old_path": "/images/skins/304/SummerChibiIcon.png",
    "new_path": "/skins/304/Summer_Accident/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/304/SummerShipyardIcon.png",
    "new_path": "/skins/304/Summer_Accident/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/304/ChristmasBanner.png",
    "new_path": "/skins/304/Manjuu_Mischief/Banner.png"
  },
  {
    "old_path": "/images/skins/304/ChristmasIcon.png",
    "new_path": "/skins/304/Manjuu_Mischief/Icon.png"
  },
  {
    "old_path": "/images/skins/304/ChristmasChibiIcon.png",
    "new_path": "/skins/304/Manjuu_Mischief/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/304/ChristmasShipyardIcon.png",
    "new_path": "/skins/304/Manjuu_Mischief/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/304/FestivalBanner.png",
    "new_path": "/skins/304/Among_the_Stalls/Banner.png"
  },
  {
    "old_path": "/images/skins/304/FestivalIcon.png",
    "new_path": "/skins/304/Among_the_Stalls/Icon.png"
  },
  {
    "old_path": "/images/skins/304/FestivalChibiIcon.png",
    "new_path": "/skins/304/Among_the_Stalls/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/304/FestivalShipyardIcon.png",
    "new_path": "/skins/304/Among_the_Stalls/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/129/Banner.png",
    "new_path": "/skins/129/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/129/Icon.png",
    "new_path": "/skins/129/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/129/ChibiIcon.png",
    "new_path": "/skins/129/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/129/ShipyardIcon.png",
    "new_path": "/skins/129/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/129/OriginalShipyardIcon.png",
    "new_path": "/skins/129/Original_Art/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/129/WeddingBanner.png",
    "new_path": "/skins/129/Wedding/Banner.png"
  },
  {
    "old_path": "/images/skins/129/WeddingIcon.png",
    "new_path": "/skins/129/Wedding/Icon.png"
  },
  {
    "old_path": "/images/skins/129/WeddingChibiIcon.png",
    "new_path": "/skins/129/Wedding/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/129/WeddingShipyardIcon.png",
    "new_path": "/skins/129/Wedding/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/129/SummerBanner.png",
    "new_path": "/skins/129/Lady_of_the_Shining_Sun/Banner.png"
  },
  {
    "old_path": "/images/skins/129/SummerIcon.png",
    "new_path": "/skins/129/Lady_of_the_Shining_Sun/Icon.png"
  },
  {
    "old_path": "/images/skins/129/SummerChibiIcon.png",
    "new_path": "/skins/129/Lady_of_the_Shining_Sun/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/129/SummerShipyardIcon.png",
    "new_path": "/skins/129/Lady_of_the_Shining_Sun/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/129/New_YearBanner.png",
    "new_path": "/skins/129/Porcelain_Grace/Banner.png"
  },
  {
    "old_path": "/images/skins/129/New_YearIcon.png",
    "new_path": "/skins/129/Porcelain_Grace/Icon.png"
  },
  {
    "old_path": "/images/skins/129/New_YearChibiIcon.png",
    "new_path": "/skins/129/Porcelain_Grace/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/129/New_YearShipyardIcon.png",
    "new_path": "/skins/129/Porcelain_Grace/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/129/PartyBanner.png",
    "new_path": "/skins/129/Dawnlights_Dame/Banner.png"
  },
  {
    "old_path": "/images/skins/129/PartyIcon.png",
    "new_path": "/skins/129/Dawnlights_Dame/Icon.png"
  },
  {
    "old_path": "/images/skins/129/PartyChibiIcon.png",
    "new_path": "/skins/129/Dawnlights_Dame/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/129/PartyShipyardIcon.png",
    "new_path": "/skins/129/Dawnlights_Dame/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/078/Banner.png",
    "new_path": "/skins/078/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/078/Icon.png",
    "new_path": "/skins/078/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/078/ChibiIcon.png",
    "new_path": "/skins/078/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/078/ShipyardIcon.png",
    "new_path": "/skins/078/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/078/PartyBanner.png",
    "new_path": "/skins/078/Bubbly_Anniversary/Banner.png"
  },
  {
    "old_path": "/images/skins/078/PartyIcon.png",
    "new_path": "/skins/078/Bubbly_Anniversary/Icon.png"
  },
  {
    "old_path": "/images/skins/078/PartyChibiIcon.png",
    "new_path": "/skins/078/Bubbly_Anniversary/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/078/PartyShipyardIcon.png",
    "new_path": "/skins/078/Bubbly_Anniversary/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/078/PizzaBanner.png",
    "new_path": "/skins/078/FreshlyBaked_Bonding/Banner.png"
  },
  {
    "old_path": "/images/skins/078/PizzaIcon.png",
    "new_path": "/skins/078/FreshlyBaked_Bonding/Icon.png"
  },
  {
    "old_path": "/images/skins/078/PizzaChibiIcon.png",
    "new_path": "/skins/078/FreshlyBaked_Bonding/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/078/PizzaShipyardIcon.png",
    "new_path": "/skins/078/FreshlyBaked_Bonding/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/220/Banner.png",
    "new_path": "/skins/220/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/220/Icon.png",
    "new_path": "/skins/220/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/220/ChibiIcon.png",
    "new_path": "/skins/220/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/220/ShipyardIcon.png",
    "new_path": "/skins/220/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/220/FestivalBanner.png",
    "new_path": "/skins/220/The_Dream_of_the_Autumn_Pillow/Banner.png"
  },
  {
    "old_path": "/images/skins/220/FestivalIcon.png",
    "new_path": "/skins/220/The_Dream_of_the_Autumn_Pillow/Icon.png"
  },
  {
    "old_path": "/images/skins/220/FestivalChibiIcon.png",
    "new_path": "/skins/220/The_Dream_of_the_Autumn_Pillow/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/220/FestivalShipyardIcon.png",
    "new_path": "/skins/220/The_Dream_of_the_Autumn_Pillow/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/043/Banner.png",
    "new_path": "/skins/043/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/043/Icon.png",
    "new_path": "/skins/043/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/043/ChibiIcon.png",
    "new_path": "/skins/043/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/043/ShipyardIcon.png",
    "new_path": "/skins/043/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/461/Banner.png",
    "new_path": "/skins/461/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/461/Icon.png",
    "new_path": "/skins/461/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/461/ChibiIcon.png",
    "new_path": "/skins/461/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/461/ShipyardIcon.png",
    "new_path": "/skins/461/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/461/CasualBanner.png",
    "new_path": "/skins/461/Noble_Rouge/Banner.png"
  },
  {
    "old_path": "/images/skins/461/CasualIcon.png",
    "new_path": "/skins/461/Noble_Rouge/Icon.png"
  },
  {
    "old_path": "/images/skins/461/CasualChibiIcon.png",
    "new_path": "/skins/461/Noble_Rouge/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/461/CasualShipyardIcon.png",
    "new_path": "/skins/461/Noble_Rouge/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/461/MaidBanner.png",
    "new_path": "/skins/461/Pastry_Princess/Banner.png"
  },
  {
    "old_path": "/images/skins/461/MaidIcon.png",
    "new_path": "/skins/461/Pastry_Princess/Icon.png"
  },
  {
    "old_path": "/images/skins/461/MaidChibiIcon.png",
    "new_path": "/skins/461/Pastry_Princess/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/461/MaidShipyardIcon.png",
    "new_path": "/skins/461/Pastry_Princess/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/100/Banner.png",
    "new_path": "/skins/100/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/100/Icon.png",
    "new_path": "/skins/100/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/100/ChibiIcon.png",
    "new_path": "/skins/100/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/100/ShipyardIcon.png",
    "new_path": "/skins/100/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/211/Banner.png",
    "new_path": "/skins/211/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/211/Icon.png",
    "new_path": "/skins/211/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/211/ChibiIcon.png",
    "new_path": "/skins/211/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/211/ShipyardIcon.png",
    "new_path": "/skins/211/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/211/KaiBanner.png",
    "new_path": "/skins/211/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/211/KaiIcon.png",
    "new_path": "/skins/211/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/211/KaiChibiIcon.png",
    "new_path": "/skins/211/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/211/KaiShipyardIcon.png",
    "new_path": "/skins/211/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/381/Banner.png",
    "new_path": "/skins/381/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/381/Icon.png",
    "new_path": "/skins/381/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/381/ChibiIcon.png",
    "new_path": "/skins/381/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/381/ShipyardIcon.png",
    "new_path": "/skins/381/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/398/Banner.png",
    "new_path": "/skins/398/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/398/Icon.png",
    "new_path": "/skins/398/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/398/ChibiIcon.png",
    "new_path": "/skins/398/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/398/ShipyardIcon.png",
    "new_path": "/skins/398/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/398/FestivalBanner.png",
    "new_path": "/skins/398/Festive_Mood/Banner.png"
  },
  {
    "old_path": "/images/skins/398/FestivalIcon.png",
    "new_path": "/skins/398/Festive_Mood/Icon.png"
  },
  {
    "old_path": "/images/skins/398/FestivalChibiIcon.png",
    "new_path": "/skins/398/Festive_Mood/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/398/FestivalShipyardIcon.png",
    "new_path": "/skins/398/Festive_Mood/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/338/Banner.png",
    "new_path": "/skins/338/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/338/Icon.png",
    "new_path": "/skins/338/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/338/ChibiIcon.png",
    "new_path": "/skins/338/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/338/ShipyardIcon.png",
    "new_path": "/skins/338/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/338/SchoolChibiIcon.png",
    "new_path": "/skins/338/Departures_Gentle_Breeze/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/338/SchoolShipyardIcon.png",
    "new_path": "/skins/338/Departures_Gentle_Breeze/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/338/SleepyBanner.png",
    "new_path": "/skins/338/Pillowy_Paradise/Banner.png"
  },
  {
    "old_path": "/images/skins/338/SleepyIcon.png",
    "new_path": "/skins/338/Pillowy_Paradise/Icon.png"
  },
  {
    "old_path": "/images/skins/338/SleepyChibiIcon.png",
    "new_path": "/skins/338/Pillowy_Paradise/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/338/SleepyShipyardIcon.png",
    "new_path": "/skins/338/Pillowy_Paradise/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/338/BunnyBanner.png",
    "new_path": "/skins/338/Blossoming_Bunny/Banner.png"
  },
  {
    "old_path": "/images/skins/338/BunnyIcon.png",
    "new_path": "/skins/338/Blossoming_Bunny/Icon.png"
  },
  {
    "old_path": "/images/skins/338/BunnyChibiIcon.png",
    "new_path": "/skins/338/Blossoming_Bunny/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/338/BunnyShipyardIcon.png",
    "new_path": "/skins/338/Blossoming_Bunny/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/396/Banner.png",
    "new_path": "/skins/396/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/396/Icon.png",
    "new_path": "/skins/396/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/396/ChibiIcon.png",
    "new_path": "/skins/396/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/396/ShipyardIcon.png",
    "new_path": "/skins/396/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/396/SchoolBanner.png",
    "new_path": "/skins/396/Coral_Reef_Bunny/Banner.png"
  },
  {
    "old_path": "/images/skins/396/SchoolIcon.png",
    "new_path": "/skins/396/Coral_Reef_Bunny/Icon.png"
  },
  {
    "old_path": "/images/skins/396/SchoolChibiIcon.png",
    "new_path": "/skins/396/Coral_Reef_Bunny/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/396/SchoolShipyardIcon.png",
    "new_path": "/skins/396/Coral_Reef_Bunny/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/396/SpringBanner.png",
    "new_path": "/skins/396/Sweet_Wine_of_Celebration/Banner.png"
  },
  {
    "old_path": "/images/skins/396/SpringIcon.png",
    "new_path": "/skins/396/Sweet_Wine_of_Celebration/Icon.png"
  },
  {
    "old_path": "/images/skins/396/SpringChibiIcon.png",
    "new_path": "/skins/396/Sweet_Wine_of_Celebration/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/396/SpringShipyardIcon.png",
    "new_path": "/skins/396/Sweet_Wine_of_Celebration/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/339/Banner.png",
    "new_path": "/skins/339/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/339/Icon.png",
    "new_path": "/skins/339/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/339/ChibiIcon.png",
    "new_path": "/skins/339/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/339/ShipyardIcon.png",
    "new_path": "/skins/339/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/339/SchoolChibiIcon.png",
    "new_path": "/skins/339/DeepSea_Rabbit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/339/SchoolShipyardIcon.png",
    "new_path": "/skins/339/DeepSea_Rabbit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/339/FestivalBanner.png",
    "new_path": "/skins/339/Shortly_Before_the_Fireworks/Banner.png"
  },
  {
    "old_path": "/images/skins/339/FestivalIcon.png",
    "new_path": "/skins/339/Shortly_Before_the_Fireworks/Icon.png"
  },
  {
    "old_path": "/images/skins/339/FestivalChibiIcon.png",
    "new_path": "/skins/339/Shortly_Before_the_Fireworks/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/339/FestivalShipyardIcon.png",
    "new_path": "/skins/339/Shortly_Before_the_Fireworks/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/397/Banner.png",
    "new_path": "/skins/397/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/397/Icon.png",
    "new_path": "/skins/397/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/397/ChibiIcon.png",
    "new_path": "/skins/397/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/397/ShipyardIcon.png",
    "new_path": "/skins/397/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/397/SchoolBanner.png",
    "new_path": "/skins/397/Wallflower_in_the_Corner/Banner.png"
  },
  {
    "old_path": "/images/skins/397/SchoolIcon.png",
    "new_path": "/skins/397/Wallflower_in_the_Corner/Icon.png"
  },
  {
    "old_path": "/images/skins/397/SchoolChibiIcon.png",
    "new_path": "/skins/397/Wallflower_in_the_Corner/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/397/SchoolShipyardIcon.png",
    "new_path": "/skins/397/Wallflower_in_the_Corner/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/340/Banner.png",
    "new_path": "/skins/340/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/340/Icon.png",
    "new_path": "/skins/340/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/340/ChibiIcon.png",
    "new_path": "/skins/340/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/340/ShipyardIcon.png",
    "new_path": "/skins/340/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Plan003/Banner.png",
    "new_path": "/skins/Plan003/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/Plan003/Icon.png",
    "new_path": "/skins/Plan003/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/Plan003/ChibiIcon.png",
    "new_path": "/skins/Plan003/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Plan003/ShipyardIcon.png",
    "new_path": "/skins/Plan003/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Plan003/New_YearBanner.png",
    "new_path": "/skins/Plan003/Winter_Sylphs_Reverie/Banner.png"
  },
  {
    "old_path": "/images/skins/Plan003/New_YearIcon.png",
    "new_path": "/skins/Plan003/Winter_Sylphs_Reverie/Icon.png"
  },
  {
    "old_path": "/images/skins/Plan003/New_YearChibiIcon.png",
    "new_path": "/skins/Plan003/Winter_Sylphs_Reverie/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Plan003/New_YearShipyardIcon.png",
    "new_path": "/skins/Plan003/Winter_Sylphs_Reverie/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Plan003/PartyBanner.png",
    "new_path": "/skins/Plan003/Snow_on_the_Wind/Banner.png"
  },
  {
    "old_path": "/images/skins/Plan003/PartyIcon.png",
    "new_path": "/skins/Plan003/Snow_on_the_Wind/Icon.png"
  },
  {
    "old_path": "/images/skins/Plan003/PartyChibiIcon.png",
    "new_path": "/skins/Plan003/Snow_on_the_Wind/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Plan003/PartyShipyardIcon.png",
    "new_path": "/skins/Plan003/Snow_on_the_Wind/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Plan003/SpringBanner.png",
    "new_path": "/skins/Plan003/Arrival_of_Spring/Banner.png"
  },
  {
    "old_path": "/images/skins/Plan003/SpringIcon.png",
    "new_path": "/skins/Plan003/Arrival_of_Spring/Icon.png"
  },
  {
    "old_path": "/images/skins/Plan003/SpringChibiIcon.png",
    "new_path": "/skins/Plan003/Arrival_of_Spring/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Plan003/SpringShipyardIcon.png",
    "new_path": "/skins/Plan003/Arrival_of_Spring/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Plan003/CasualBanner.png",
    "new_path": "/skins/Plan003/Tranquil_Sunya/Banner.png"
  },
  {
    "old_path": "/images/skins/Plan003/CasualIcon.png",
    "new_path": "/skins/Plan003/Tranquil_Sunya/Icon.png"
  },
  {
    "old_path": "/images/skins/Plan003/CasualChibiIcon.png",
    "new_path": "/skins/Plan003/Tranquil_Sunya/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Plan003/CasualShipyardIcon.png",
    "new_path": "/skins/Plan003/Tranquil_Sunya/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/465/Banner.png",
    "new_path": "/skins/465/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/465/Icon.png",
    "new_path": "/skins/465/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/465/ChibiIcon.png",
    "new_path": "/skins/465/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/465/ShipyardIcon.png",
    "new_path": "/skins/465/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/465/HospitalBanner.png",
    "new_path": "/skins/465/OneWeek_Medical_Experience/Banner.png"
  },
  {
    "old_path": "/images/skins/465/HospitalIcon.png",
    "new_path": "/skins/465/OneWeek_Medical_Experience/Icon.png"
  },
  {
    "old_path": "/images/skins/465/HospitalChibiIcon.png",
    "new_path": "/skins/465/OneWeek_Medical_Experience/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/465/HospitalShipyardIcon.png",
    "new_path": "/skins/465/OneWeek_Medical_Experience/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/465/SummerBanner.png",
    "new_path": "/skins/465/Nereids_Discovery/Banner.png"
  },
  {
    "old_path": "/images/skins/465/SummerIcon.png",
    "new_path": "/skins/465/Nereids_Discovery/Icon.png"
  },
  {
    "old_path": "/images/skins/465/SummerChibiIcon.png",
    "new_path": "/skins/465/Nereids_Discovery/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/465/SummerShipyardIcon.png",
    "new_path": "/skins/465/Nereids_Discovery/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/465/MaidBanner.png",
    "new_path": "/skins/465/At_Your_Service/Banner.png"
  },
  {
    "old_path": "/images/skins/465/MaidIcon.png",
    "new_path": "/skins/465/At_Your_Service/Icon.png"
  },
  {
    "old_path": "/images/skins/465/MaidChibiIcon.png",
    "new_path": "/skins/465/At_Your_Service/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/465/MaidShipyardIcon.png",
    "new_path": "/skins/465/At_Your_Service/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/161/Banner.png",
    "new_path": "/skins/161/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/161/Icon.png",
    "new_path": "/skins/161/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/161/ChibiIcon.png",
    "new_path": "/skins/161/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/161/ShipyardIcon.png",
    "new_path": "/skins/161/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/161/Tea_PartyBanner.png",
    "new_path": "/skins/161/Sakura_Tea/Banner.png"
  },
  {
    "old_path": "/images/skins/161/Tea_PartyIcon.png",
    "new_path": "/skins/161/Sakura_Tea/Icon.png"
  },
  {
    "old_path": "/images/skins/161/Tea_PartyChibiIcon.png",
    "new_path": "/skins/161/Sakura_Tea/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/161/Tea_PartyShipyardIcon.png",
    "new_path": "/skins/161/Sakura_Tea/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/161/FestivalBanner.png",
    "new_path": "/skins/161/Thunderous_Festival/Banner.png"
  },
  {
    "old_path": "/images/skins/161/FestivalIcon.png",
    "new_path": "/skins/161/Thunderous_Festival/Icon.png"
  },
  {
    "old_path": "/images/skins/161/FestivalChibiIcon.png",
    "new_path": "/skins/161/Thunderous_Festival/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/161/FestivalShipyardIcon.png",
    "new_path": "/skins/161/Thunderous_Festival/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/161/PartyBanner.png",
    "new_path": "/skins/161/Dawns_Thunder/Banner.png"
  },
  {
    "old_path": "/images/skins/161/PartyIcon.png",
    "new_path": "/skins/161/Dawns_Thunder/Icon.png"
  },
  {
    "old_path": "/images/skins/161/PartyChibiIcon.png",
    "new_path": "/skins/161/Dawns_Thunder/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/161/PartyShipyardIcon.png",
    "new_path": "/skins/161/Dawns_Thunder/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/145/Banner.png",
    "new_path": "/skins/145/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/145/Icon.png",
    "new_path": "/skins/145/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/145/ChibiIcon.png",
    "new_path": "/skins/145/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/145/ShipyardIcon.png",
    "new_path": "/skins/145/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/145/WeddingBanner.png",
    "new_path": "/skins/145/Wedding/Banner.png"
  },
  {
    "old_path": "/images/skins/145/WeddingIcon.png",
    "new_path": "/skins/145/Wedding/Icon.png"
  },
  {
    "old_path": "/images/skins/145/WeddingChibiIcon.png",
    "new_path": "/skins/145/Wedding/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/145/WeddingShipyardIcon.png",
    "new_path": "/skins/145/Wedding/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/145/Tea_PartyBanner.png",
    "new_path": "/skins/145/NeverEnding_Tea_Party/Banner.png"
  },
  {
    "old_path": "/images/skins/145/Tea_PartyIcon.png",
    "new_path": "/skins/145/NeverEnding_Tea_Party/Icon.png"
  },
  {
    "old_path": "/images/skins/145/Tea_PartyChibiIcon.png",
    "new_path": "/skins/145/NeverEnding_Tea_Party/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/145/Tea_PartyShipyardIcon.png",
    "new_path": "/skins/145/NeverEnding_Tea_Party/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/145/PartyBanner.png",
    "new_path": "/skins/145/Illustrious_Ball/Banner.png"
  },
  {
    "old_path": "/images/skins/145/PartyIcon.png",
    "new_path": "/skins/145/Illustrious_Ball/Icon.png"
  },
  {
    "old_path": "/images/skins/145/PartyChibiIcon.png",
    "new_path": "/skins/145/Illustrious_Ball/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/145/PartyShipyardIcon.png",
    "new_path": "/skins/145/Illustrious_Ball/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/145/HanbokBanner.png",
    "new_path": "/skins/145/Resplendent_Hibiscus/Banner.png"
  },
  {
    "old_path": "/images/skins/145/HanbokIcon.png",
    "new_path": "/skins/145/Resplendent_Hibiscus/Icon.png"
  },
  {
    "old_path": "/images/skins/145/HanbokChibiIcon.png",
    "new_path": "/skins/145/Resplendent_Hibiscus/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/145/HanbokShipyardIcon.png",
    "new_path": "/skins/145/Resplendent_Hibiscus/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/145/SpringBanner.png",
    "new_path": "/skins/145/Maiden_Lilys_Radiance/Banner.png"
  },
  {
    "old_path": "/images/skins/145/SpringIcon.png",
    "new_path": "/skins/145/Maiden_Lilys_Radiance/Icon.png"
  },
  {
    "old_path": "/images/skins/145/SpringChibiIcon.png",
    "new_path": "/skins/145/Maiden_Lilys_Radiance/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/145/SpringShipyardIcon.png",
    "new_path": "/skins/145/Maiden_Lilys_Radiance/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/480/Banner.png",
    "new_path": "/skins/480/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/480/Icon.png",
    "new_path": "/skins/480/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/480/ChibiIcon.png",
    "new_path": "/skins/480/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/480/ShipyardIcon.png",
    "new_path": "/skins/480/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/162/Banner.png",
    "new_path": "/skins/162/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/162/Icon.png",
    "new_path": "/skins/162/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/162/ChibiIcon.png",
    "new_path": "/skins/162/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/162/ShipyardIcon.png",
    "new_path": "/skins/162/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/162/Tea_PartyBanner.png",
    "new_path": "/skins/162/Vanilla_Pudding/Banner.png"
  },
  {
    "old_path": "/images/skins/162/Tea_PartyIcon.png",
    "new_path": "/skins/162/Vanilla_Pudding/Icon.png"
  },
  {
    "old_path": "/images/skins/162/Tea_PartyChibiIcon.png",
    "new_path": "/skins/162/Vanilla_Pudding/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/162/Tea_PartyShipyardIcon.png",
    "new_path": "/skins/162/Vanilla_Pudding/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/162/FestivalBanner.png",
    "new_path": "/skins/162/Flash_of_Fireworks/Banner.png"
  },
  {
    "old_path": "/images/skins/162/FestivalIcon.png",
    "new_path": "/skins/162/Flash_of_Fireworks/Icon.png"
  },
  {
    "old_path": "/images/skins/162/FestivalChibiIcon.png",
    "new_path": "/skins/162/Flash_of_Fireworks/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/162/FestivalShipyardIcon.png",
    "new_path": "/skins/162/Flash_of_Fireworks/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/162/PartyBanner.png",
    "new_path": "/skins/162/Dusks_Lightning/Banner.png"
  },
  {
    "old_path": "/images/skins/162/PartyIcon.png",
    "new_path": "/skins/162/Dusks_Lightning/Icon.png"
  },
  {
    "old_path": "/images/skins/162/PartyChibiIcon.png",
    "new_path": "/skins/162/Dusks_Lightning/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/162/PartyShipyardIcon.png",
    "new_path": "/skins/162/Dusks_Lightning/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/377/Banner.png",
    "new_path": "/skins/377/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/377/Icon.png",
    "new_path": "/skins/377/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/377/ChibiIcon.png",
    "new_path": "/skins/377/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/377/ShipyardIcon.png",
    "new_path": "/skins/377/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/377/KaiBanner.png",
    "new_path": "/skins/377/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/377/KaiIcon.png",
    "new_path": "/skins/377/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/377/KaiChibiIcon.png",
    "new_path": "/skins/377/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/377/KaiShipyardIcon.png",
    "new_path": "/skins/377/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/377/SchoolBanner.png",
    "new_path": "/skins/377/Transfer_Student_From_Afar/Banner.png"
  },
  {
    "old_path": "/images/skins/377/SchoolIcon.png",
    "new_path": "/skins/377/Transfer_Student_From_Afar/Icon.png"
  },
  {
    "old_path": "/images/skins/377/SchoolChibiIcon.png",
    "new_path": "/skins/377/Transfer_Student_From_Afar/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/377/SchoolShipyardIcon.png",
    "new_path": "/skins/377/Transfer_Student_From_Afar/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/377/PartyBanner.png",
    "new_path": "/skins/377/The_Independent_Line/Banner.png"
  },
  {
    "old_path": "/images/skins/377/PartyIcon.png",
    "new_path": "/skins/377/The_Independent_Line/Icon.png"
  },
  {
    "old_path": "/images/skins/377/PartyChibiIcon.png",
    "new_path": "/skins/377/The_Independent_Line/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/377/PartyShipyardIcon.png",
    "new_path": "/skins/377/The_Independent_Line/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/377/CasualBanner.png",
    "new_path": "/skins/377/Liberty_and_Leisure/Banner.png"
  },
  {
    "old_path": "/images/skins/377/CasualIcon.png",
    "new_path": "/skins/377/Liberty_and_Leisure/Icon.png"
  },
  {
    "old_path": "/images/skins/377/CasualChibiIcon.png",
    "new_path": "/skins/377/Liberty_and_Leisure/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/377/CasualShipyardIcon.png",
    "new_path": "/skins/377/Liberty_and_Leisure/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/377/Casual2Banner.png",
    "new_path": "/skins/377/The_Tailwind_of_Opportunity/Banner.png"
  },
  {
    "old_path": "/images/skins/377/Casual2Icon.png",
    "new_path": "/skins/377/The_Tailwind_of_Opportunity/Icon.png"
  },
  {
    "old_path": "/images/skins/377/Casual2ChibiIcon.png",
    "new_path": "/skins/377/The_Tailwind_of_Opportunity/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/377/Casual2ShipyardIcon.png",
    "new_path": "/skins/377/The_Tailwind_of_Opportunity/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/045/Banner.png",
    "new_path": "/skins/045/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/045/Icon.png",
    "new_path": "/skins/045/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/045/ChibiIcon.png",
    "new_path": "/skins/045/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/045/ShipyardIcon.png",
    "new_path": "/skins/045/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/045/OriginalShipyardIcon.png",
    "new_path": "/skins/045/Original_Art/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/045/SchoolBanner.png",
    "new_path": "/skins/045/At_School_With_My_Sister/Banner.png"
  },
  {
    "old_path": "/images/skins/045/SchoolIcon.png",
    "new_path": "/skins/045/At_School_With_My_Sister/Icon.png"
  },
  {
    "old_path": "/images/skins/045/SchoolChibiIcon.png",
    "new_path": "/skins/045/At_School_With_My_Sister/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/045/SchoolShipyardIcon.png",
    "new_path": "/skins/045/At_School_With_My_Sister/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/045/PartyBanner.png",
    "new_path": "/skins/045/The_Light_of_Circle_City/Banner.png"
  },
  {
    "old_path": "/images/skins/045/PartyIcon.png",
    "new_path": "/skins/045/The_Light_of_Circle_City/Icon.png"
  },
  {
    "old_path": "/images/skins/045/PartyChibiIcon.png",
    "new_path": "/skins/045/The_Light_of_Circle_City/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/045/PartyShipyardIcon.png",
    "new_path": "/skins/045/The_Light_of_Circle_City/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/518/Banner.png",
    "new_path": "/skins/518/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/518/Icon.png",
    "new_path": "/skins/518/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/518/ChibiIcon.png",
    "new_path": "/skins/518/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/518/ShipyardIcon.png",
    "new_path": "/skins/518/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/518/BunnyBanner.png",
    "new_path": "/skins/518/Fixin_for_a_Mixin/Banner.png"
  },
  {
    "old_path": "/images/skins/518/BunnyIcon.png",
    "new_path": "/skins/518/Fixin_for_a_Mixin/Icon.png"
  },
  {
    "old_path": "/images/skins/518/BunnyChibiIcon.png",
    "new_path": "/skins/518/Fixin_for_a_Mixin/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/518/BunnyShipyardIcon.png",
    "new_path": "/skins/518/Fixin_for_a_Mixin/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/442/Banner.png",
    "new_path": "/skins/442/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/442/Icon.png",
    "new_path": "/skins/442/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/442/ChibiIcon.png",
    "new_path": "/skins/442/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/442/ShipyardIcon.png",
    "new_path": "/skins/442/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/442/SportBanner.png",
    "new_path": "/skins/442/One_Intrepid_Pitch/Banner.png"
  },
  {
    "old_path": "/images/skins/442/SportIcon.png",
    "new_path": "/skins/442/One_Intrepid_Pitch/Icon.png"
  },
  {
    "old_path": "/images/skins/442/SportChibiIcon.png",
    "new_path": "/skins/442/One_Intrepid_Pitch/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/442/SportShipyardIcon.png",
    "new_path": "/skins/442/One_Intrepid_Pitch/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/10073/Banner.png",
    "new_path": "/skins/10073/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/10073/Icon.png",
    "new_path": "/skins/10073/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/10073/ChibiIcon.png",
    "new_path": "/skins/10073/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/10073/ShipyardIcon.png",
    "new_path": "/skins/10073/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/10073/FestivalBanner.png",
    "new_path": "/skins/10073/A_Little_Evening_Secret/Banner.png"
  },
  {
    "old_path": "/images/skins/10073/FestivalIcon.png",
    "new_path": "/skins/10073/A_Little_Evening_Secret/Icon.png"
  },
  {
    "old_path": "/images/skins/10073/FestivalChibiIcon.png",
    "new_path": "/skins/10073/A_Little_Evening_Secret/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/10073/FestivalShipyardIcon.png",
    "new_path": "/skins/10073/A_Little_Evening_Secret/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/210/Banner.png",
    "new_path": "/skins/210/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/210/Icon.png",
    "new_path": "/skins/210/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/210/ChibiIcon.png",
    "new_path": "/skins/210/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/210/ShipyardIcon.png",
    "new_path": "/skins/210/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/210/KaiBanner.png",
    "new_path": "/skins/210/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/210/KaiIcon.png",
    "new_path": "/skins/210/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/210/KaiChibiIcon.png",
    "new_path": "/skins/210/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/210/KaiShipyardIcon.png",
    "new_path": "/skins/210/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/317/Banner.png",
    "new_path": "/skins/317/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/317/Icon.png",
    "new_path": "/skins/317/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/317/ChibiIcon.png",
    "new_path": "/skins/317/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/317/ShipyardIcon.png",
    "new_path": "/skins/317/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/317/New_YearBanner.png",
    "new_path": "/skins/317/New_Years_Campaign/Banner.png"
  },
  {
    "old_path": "/images/skins/317/New_YearIcon.png",
    "new_path": "/skins/317/New_Years_Campaign/Icon.png"
  },
  {
    "old_path": "/images/skins/317/New_YearChibiIcon.png",
    "new_path": "/skins/317/New_Years_Campaign/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/317/New_YearShipyardIcon.png",
    "new_path": "/skins/317/New_Years_Campaign/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/317/IdolBanner.png",
    "new_path": "/skins/317/SengokuSmasher/Banner.png"
  },
  {
    "old_path": "/images/skins/317/IdolIcon.png",
    "new_path": "/skins/317/SengokuSmasher/Icon.png"
  },
  {
    "old_path": "/images/skins/317/IdolChibiIcon.png",
    "new_path": "/skins/317/SengokuSmasher/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/317/IdolShipyardIcon.png",
    "new_path": "/skins/317/SengokuSmasher/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/183/Banner.png",
    "new_path": "/skins/183/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/183/Icon.png",
    "new_path": "/skins/183/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/183/ChibiIcon.png",
    "new_path": "/skins/183/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/183/ShipyardIcon.png",
    "new_path": "/skins/183/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/183/KaiBanner.png",
    "new_path": "/skins/183/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/183/KaiIcon.png",
    "new_path": "/skins/183/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/183/KaiChibiIcon.png",
    "new_path": "/skins/183/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/183/KaiShipyardIcon.png",
    "new_path": "/skins/183/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/183/HalloweenBanner.png",
    "new_path": "/skins/183/Night_of_Fairy_Tale/Banner.png"
  },
  {
    "old_path": "/images/skins/183/HalloweenIcon.png",
    "new_path": "/skins/183/Night_of_Fairy_Tale/Icon.png"
  },
  {
    "old_path": "/images/skins/183/HalloweenChibiIcon.png",
    "new_path": "/skins/183/Night_of_Fairy_Tale/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/183/HalloweenShipyardIcon.png",
    "new_path": "/skins/183/Night_of_Fairy_Tale/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/183/ChristmasBanner.png",
    "new_path": "/skins/183/Cozy_Christmas_Eve/Banner.png"
  },
  {
    "old_path": "/images/skins/183/ChristmasIcon.png",
    "new_path": "/skins/183/Cozy_Christmas_Eve/Icon.png"
  },
  {
    "old_path": "/images/skins/183/ChristmasChibiIcon.png",
    "new_path": "/skins/183/Cozy_Christmas_Eve/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/183/ChristmasShipyardIcon.png",
    "new_path": "/skins/183/Cozy_Christmas_Eve/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/183/BunnyBanner.png",
    "new_path": "/skins/183/Accidental_Overheat/Banner.png"
  },
  {
    "old_path": "/images/skins/183/BunnyIcon.png",
    "new_path": "/skins/183/Accidental_Overheat/Icon.png"
  },
  {
    "old_path": "/images/skins/183/BunnyChibiIcon.png",
    "new_path": "/skins/183/Accidental_Overheat/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/183/BunnyShipyardIcon.png",
    "new_path": "/skins/183/Accidental_Overheat/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Plan004/Banner.png",
    "new_path": "/skins/Plan004/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/Plan004/Icon.png",
    "new_path": "/skins/Plan004/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/Plan004/ChibiIcon.png",
    "new_path": "/skins/Plan004/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Plan004/ShipyardIcon.png",
    "new_path": "/skins/Plan004/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Plan004/New_YearBanner.png",
    "new_path": "/skins/Plan004/Izumos_Thousand_Cherry_Trees/Banner.png"
  },
  {
    "old_path": "/images/skins/Plan004/New_YearIcon.png",
    "new_path": "/skins/Plan004/Izumos_Thousand_Cherry_Trees/Icon.png"
  },
  {
    "old_path": "/images/skins/Plan004/New_YearChibiIcon.png",
    "new_path": "/skins/Plan004/Izumos_Thousand_Cherry_Trees/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Plan004/New_YearShipyardIcon.png",
    "new_path": "/skins/Plan004/Izumos_Thousand_Cherry_Trees/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/328/Banner.png",
    "new_path": "/skins/328/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/328/Icon.png",
    "new_path": "/skins/328/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/328/ChibiIcon.png",
    "new_path": "/skins/328/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/328/ShipyardIcon.png",
    "new_path": "/skins/328/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/328/BikeBanner.png",
    "new_path": "/skins/328/Dark_Bolt/Banner.png"
  },
  {
    "old_path": "/images/skins/328/BikeIcon.png",
    "new_path": "/skins/328/Dark_Bolt/Icon.png"
  },
  {
    "old_path": "/images/skins/328/BikeChibiIcon.png",
    "new_path": "/skins/328/Dark_Bolt/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/328/BikeShipyardIcon.png",
    "new_path": "/skins/328/Dark_Bolt/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/328/RoadtripBanner.png",
    "new_path": "/skins/328/Highway_Star/Banner.png"
  },
  {
    "old_path": "/images/skins/328/RoadtripIcon.png",
    "new_path": "/skins/328/Highway_Star/Icon.png"
  },
  {
    "old_path": "/images/skins/328/RoadtripChibiIcon.png",
    "new_path": "/skins/328/Highway_Star/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/328/RoadtripShipyardIcon.png",
    "new_path": "/skins/328/Highway_Star/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/101/Banner.png",
    "new_path": "/skins/101/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/101/Icon.png",
    "new_path": "/skins/101/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/101/ChibiIcon.png",
    "new_path": "/skins/101/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/101/ShipyardIcon.png",
    "new_path": "/skins/101/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/101/KaiBanner.png",
    "new_path": "/skins/101/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/101/KaiIcon.png",
    "new_path": "/skins/101/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/101/KaiChibiIcon.png",
    "new_path": "/skins/101/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/101/KaiShipyardIcon.png",
    "new_path": "/skins/101/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/101/WeddingBanner.png",
    "new_path": "/skins/101/Wedding/Banner.png"
  },
  {
    "old_path": "/images/skins/101/WeddingIcon.png",
    "new_path": "/skins/101/Wedding/Icon.png"
  },
  {
    "old_path": "/images/skins/101/WeddingChibiIcon.png",
    "new_path": "/skins/101/Wedding/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/101/WeddingShipyardIcon.png",
    "new_path": "/skins/101/Wedding/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/101/BilibiliBanner.png",
    "new_path": "/skins/101/Bili_Girl_22/Banner.png"
  },
  {
    "old_path": "/images/skins/101/BilibiliIcon.png",
    "new_path": "/skins/101/Bili_Girl_22/Icon.png"
  },
  {
    "old_path": "/images/skins/101/BilibiliChibiIcon.png",
    "new_path": "/skins/101/Bili_Girl_22/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/101/BilibiliShipyardIcon.png",
    "new_path": "/skins/101/Bili_Girl_22/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/101/SummerBanner.png",
    "new_path": "/skins/101/Beach_Picnic/Banner.png"
  },
  {
    "old_path": "/images/skins/101/SummerIcon.png",
    "new_path": "/skins/101/Beach_Picnic/Icon.png"
  },
  {
    "old_path": "/images/skins/101/SummerChibiIcon.png",
    "new_path": "/skins/101/Beach_Picnic/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/101/SummerShipyardIcon.png",
    "new_path": "/skins/101/Beach_Picnic/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/101/CoCoBanner.png",
    "new_path": "/skins/101/Lets_Become_Waitresses/Banner.png"
  },
  {
    "old_path": "/images/skins/101/CoCoIcon.png",
    "new_path": "/skins/101/Lets_Become_Waitresses/Icon.png"
  },
  {
    "old_path": "/images/skins/101/CoCoChibiIcon.png",
    "new_path": "/skins/101/Lets_Become_Waitresses/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/101/CoCoShipyardIcon.png",
    "new_path": "/skins/101/Lets_Become_Waitresses/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/101/SchoolBanner.png",
    "new_path": "/skins/101/Slow_Ahead/Banner.png"
  },
  {
    "old_path": "/images/skins/101/SchoolIcon.png",
    "new_path": "/skins/101/Slow_Ahead/Icon.png"
  },
  {
    "old_path": "/images/skins/101/SchoolChibiIcon.png",
    "new_path": "/skins/101/Slow_Ahead/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/101/SchoolShipyardIcon.png",
    "new_path": "/skins/101/Slow_Ahead/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/101/BlurayBanner.png",
    "new_path": "/skins/101/Operation_Pillow_Fight/Banner.png"
  },
  {
    "old_path": "/images/skins/101/BlurayIcon.png",
    "new_path": "/skins/101/Operation_Pillow_Fight/Icon.png"
  },
  {
    "old_path": "/images/skins/101/BlurayChibiIcon.png",
    "new_path": "/skins/101/Operation_Pillow_Fight/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/101/BlurayShipyardIcon.png",
    "new_path": "/skins/101/Operation_Pillow_Fight/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/101/IdolBanner.png",
    "new_path": "/skins/101/Energetic_Idol_120_Motivation/Banner.png"
  },
  {
    "old_path": "/images/skins/101/IdolIcon.png",
    "new_path": "/skins/101/Energetic_Idol_120_Motivation/Icon.png"
  },
  {
    "old_path": "/images/skins/101/IdolChibiIcon.png",
    "new_path": "/skins/101/Energetic_Idol_120_Motivation/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/101/IdolShipyardIcon.png",
    "new_path": "/skins/101/Energetic_Idol_120_Motivation/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/353/Banner.png",
    "new_path": "/skins/353/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/353/Icon.png",
    "new_path": "/skins/353/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/353/ChibiIcon.png",
    "new_path": "/skins/353/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/353/ShipyardIcon.png",
    "new_path": "/skins/353/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/353/PartyBanner.png",
    "new_path": "/skins/353/Uninhibited_Bloodstone/Banner.png"
  },
  {
    "old_path": "/images/skins/353/PartyIcon.png",
    "new_path": "/skins/353/Uninhibited_Bloodstone/Icon.png"
  },
  {
    "old_path": "/images/skins/353/PartyChibiIcon.png",
    "new_path": "/skins/353/Uninhibited_Bloodstone/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/353/PartyShipyardIcon.png",
    "new_path": "/skins/353/Uninhibited_Bloodstone/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/353/SummerBanner.png",
    "new_path": "/skins/353/Private_Aprs_Midi/Banner.png"
  },
  {
    "old_path": "/images/skins/353/SummerIcon.png",
    "new_path": "/skins/353/Private_Aprs_Midi/Icon.png"
  },
  {
    "old_path": "/images/skins/353/SummerChibiIcon.png",
    "new_path": "/skins/353/Private_Aprs_Midi/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/353/SummerShipyardIcon.png",
    "new_path": "/skins/353/Private_Aprs_Midi/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/353/New_YearBanner.png",
    "new_path": "/skins/353/First_Snow_Upon_the_Cutlasss_Edge/Banner.png"
  },
  {
    "old_path": "/images/skins/353/New_YearIcon.png",
    "new_path": "/skins/353/First_Snow_Upon_the_Cutlasss_Edge/Icon.png"
  },
  {
    "old_path": "/images/skins/353/New_YearChibiIcon.png",
    "new_path": "/skins/353/First_Snow_Upon_the_Cutlasss_Edge/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/353/New_YearShipyardIcon.png",
    "new_path": "/skins/353/First_Snow_Upon_the_Cutlasss_Edge/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/454/Banner.png",
    "new_path": "/skins/454/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/454/Icon.png",
    "new_path": "/skins/454/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/454/ChibiIcon.png",
    "new_path": "/skins/454/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/454/ShipyardIcon.png",
    "new_path": "/skins/454/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/454/OriginalShipyardIcon.png",
    "new_path": "/skins/454/Original_Art/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/454/SummerBanner.png",
    "new_path": "/skins/454/Saintess_of_the_Sea/Banner.png"
  },
  {
    "old_path": "/images/skins/454/SummerIcon.png",
    "new_path": "/skins/454/Saintess_of_the_Sea/Icon.png"
  },
  {
    "old_path": "/images/skins/454/SummerChibiIcon.png",
    "new_path": "/skins/454/Saintess_of_the_Sea/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/454/SummerShipyardIcon.png",
    "new_path": "/skins/454/Saintess_of_the_Sea/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/300/Banner.png",
    "new_path": "/skins/300/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/300/Icon.png",
    "new_path": "/skins/300/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/300/ChibiIcon.png",
    "new_path": "/skins/300/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/300/ShipyardIcon.png",
    "new_path": "/skins/300/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/300/ChristmasBanner.png",
    "new_path": "/skins/300/Light_of_the_Holiest_Star/Banner.png"
  },
  {
    "old_path": "/images/skins/300/ChristmasIcon.png",
    "new_path": "/skins/300/Light_of_the_Holiest_Star/Icon.png"
  },
  {
    "old_path": "/images/skins/300/ChristmasChibiIcon.png",
    "new_path": "/skins/300/Light_of_the_Holiest_Star/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/300/ChristmasShipyardIcon.png",
    "new_path": "/skins/300/Light_of_the_Holiest_Star/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/307/Banner.png",
    "new_path": "/skins/307/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/307/Icon.png",
    "new_path": "/skins/307/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/307/ChibiIcon.png",
    "new_path": "/skins/307/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/307/ShipyardIcon.png",
    "new_path": "/skins/307/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/307/OriginalShipyardIcon.png",
    "new_path": "/skins/307/Original_Art/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/309/Banner.png",
    "new_path": "/skins/309/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/309/Icon.png",
    "new_path": "/skins/309/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/309/ChibiIcon.png",
    "new_path": "/skins/309/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/309/ShipyardIcon.png",
    "new_path": "/skins/309/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/309/KaiBanner.png",
    "new_path": "/skins/309/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/309/KaiIcon.png",
    "new_path": "/skins/309/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/309/KaiChibiIcon.png",
    "new_path": "/skins/309/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/309/KaiShipyardIcon.png",
    "new_path": "/skins/309/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/309/SummerBanner.png",
    "new_path": "/skins/309/The_Tacticians_Vacation/Banner.png"
  },
  {
    "old_path": "/images/skins/309/SummerIcon.png",
    "new_path": "/skins/309/The_Tacticians_Vacation/Icon.png"
  },
  {
    "old_path": "/images/skins/309/SummerChibiIcon.png",
    "new_path": "/skins/309/The_Tacticians_Vacation/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/309/SummerShipyardIcon.png",
    "new_path": "/skins/309/The_Tacticians_Vacation/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/035/Banner.png",
    "new_path": "/skins/035/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/035/Icon.png",
    "new_path": "/skins/035/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/035/ChibiIcon.png",
    "new_path": "/skins/035/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/035/ShipyardIcon.png",
    "new_path": "/skins/035/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/102/Banner.png",
    "new_path": "/skins/102/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/102/Icon.png",
    "new_path": "/skins/102/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/102/ChibiIcon.png",
    "new_path": "/skins/102/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/102/ShipyardIcon.png",
    "new_path": "/skins/102/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/102/FestivalBanner.png",
    "new_path": "/skins/102/Fairly_Flavourful_Festival/Banner.png"
  },
  {
    "old_path": "/images/skins/102/FestivalIcon.png",
    "new_path": "/skins/102/Fairly_Flavourful_Festival/Icon.png"
  },
  {
    "old_path": "/images/skins/102/FestivalChibiIcon.png",
    "new_path": "/skins/102/Fairly_Flavourful_Festival/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/102/FestivalShipyardIcon.png",
    "new_path": "/skins/102/Fairly_Flavourful_Festival/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/219/Banner.png",
    "new_path": "/skins/219/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/219/Icon.png",
    "new_path": "/skins/219/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/219/ChibiIcon.png",
    "new_path": "/skins/219/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/219/ShipyardIcon.png",
    "new_path": "/skins/219/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/30008/Banner.png",
    "new_path": "/skins/30008/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/30008/Icon.png",
    "new_path": "/skins/30008/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/30008/ChibiIcon.png",
    "new_path": "/skins/30008/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/30008/ShipyardIcon.png",
    "new_path": "/skins/30008/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/306/Banner.png",
    "new_path": "/skins/306/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/306/Icon.png",
    "new_path": "/skins/306/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/306/ChibiIcon.png",
    "new_path": "/skins/306/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/306/ShipyardIcon.png",
    "new_path": "/skins/306/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/306/CasualBanner.png",
    "new_path": "/skins/306/Fanclub_Sleepover/Banner.png"
  },
  {
    "old_path": "/images/skins/306/CasualIcon.png",
    "new_path": "/skins/306/Fanclub_Sleepover/Icon.png"
  },
  {
    "old_path": "/images/skins/306/CasualChibiIcon.png",
    "new_path": "/skins/306/Fanclub_Sleepover/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/306/CasualShipyardIcon.png",
    "new_path": "/skins/306/Fanclub_Sleepover/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/225/Banner.png",
    "new_path": "/skins/225/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/225/Icon.png",
    "new_path": "/skins/225/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/225/ChibiIcon.png",
    "new_path": "/skins/225/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/225/ShipyardIcon.png",
    "new_path": "/skins/225/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/225/WeddingBanner.png",
    "new_path": "/skins/225/Wedding/Banner.png"
  },
  {
    "old_path": "/images/skins/225/WeddingIcon.png",
    "new_path": "/skins/225/Wedding/Icon.png"
  },
  {
    "old_path": "/images/skins/225/WeddingChibiIcon.png",
    "new_path": "/skins/225/Wedding/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/225/WeddingShipyardIcon.png",
    "new_path": "/skins/225/Wedding/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/225/SummerBanner.png",
    "new_path": "/skins/225/Everlasting_Killing_Stone/Banner.png"
  },
  {
    "old_path": "/images/skins/225/SummerIcon.png",
    "new_path": "/skins/225/Everlasting_Killing_Stone/Icon.png"
  },
  {
    "old_path": "/images/skins/225/SummerChibiIcon.png",
    "new_path": "/skins/225/Everlasting_Killing_Stone/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/225/SummerShipyardIcon.png",
    "new_path": "/skins/225/Everlasting_Killing_Stone/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/225/New_YearBanner.png",
    "new_path": "/skins/225/White_Foxs_New_Year/Banner.png"
  },
  {
    "old_path": "/images/skins/225/New_YearIcon.png",
    "new_path": "/skins/225/White_Foxs_New_Year/Icon.png"
  },
  {
    "old_path": "/images/skins/225/New_YearChibiIcon.png",
    "new_path": "/skins/225/White_Foxs_New_Year/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/225/New_YearShipyardIcon.png",
    "new_path": "/skins/225/White_Foxs_New_Year/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/225/PartyBanner.png",
    "new_path": "/skins/225/Exalted_White_Wings/Banner.png"
  },
  {
    "old_path": "/images/skins/225/PartyIcon.png",
    "new_path": "/skins/225/Exalted_White_Wings/Icon.png"
  },
  {
    "old_path": "/images/skins/225/PartyChibiIcon.png",
    "new_path": "/skins/225/Exalted_White_Wings/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/225/PartyShipyardIcon.png",
    "new_path": "/skins/225/Exalted_White_Wings/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/225/New_Year2Banner.png",
    "new_path": "/skins/225/Gentle_Blossoms_Sigh/Banner.png"
  },
  {
    "old_path": "/images/skins/225/New_Year2Icon.png",
    "new_path": "/skins/225/Gentle_Blossoms_Sigh/Icon.png"
  },
  {
    "old_path": "/images/skins/225/New_Year2ChibiIcon.png",
    "new_path": "/skins/225/Gentle_Blossoms_Sigh/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/225/New_Year2ShipyardIcon.png",
    "new_path": "/skins/225/Gentle_Blossoms_Sigh/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/225/SpringBanner.png",
    "new_path": "/skins/225/DuskSimurghs_Vigil/Banner.png"
  },
  {
    "old_path": "/images/skins/225/SpringIcon.png",
    "new_path": "/skins/225/DuskSimurghs_Vigil/Icon.png"
  },
  {
    "old_path": "/images/skins/225/SpringChibiIcon.png",
    "new_path": "/skins/225/DuskSimurghs_Vigil/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/225/SpringShipyardIcon.png",
    "new_path": "/skins/225/DuskSimurghs_Vigil/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/368/Banner.png",
    "new_path": "/skins/368/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/368/Icon.png",
    "new_path": "/skins/368/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/368/ChibiIcon.png",
    "new_path": "/skins/368/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/368/ShipyardIcon.png",
    "new_path": "/skins/368/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/167/Banner.png",
    "new_path": "/skins/167/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/167/Icon.png",
    "new_path": "/skins/167/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/167/ChibiIcon.png",
    "new_path": "/skins/167/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/167/ShipyardIcon.png",
    "new_path": "/skins/167/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/167/KaiBanner.png",
    "new_path": "/skins/167/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/167/KaiIcon.png",
    "new_path": "/skins/167/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/167/KaiChibiIcon.png",
    "new_path": "/skins/167/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/167/KaiShipyardIcon.png",
    "new_path": "/skins/167/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/167/HalloweenBanner.png",
    "new_path": "/skins/167/Pumpkins_and_Festivities/Banner.png"
  },
  {
    "old_path": "/images/skins/167/HalloweenIcon.png",
    "new_path": "/skins/167/Pumpkins_and_Festivities/Icon.png"
  },
  {
    "old_path": "/images/skins/167/HalloweenChibiIcon.png",
    "new_path": "/skins/167/Pumpkins_and_Festivities/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/167/HalloweenShipyardIcon.png",
    "new_path": "/skins/167/Pumpkins_and_Festivities/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/191/Banner.png",
    "new_path": "/skins/191/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/191/Icon.png",
    "new_path": "/skins/191/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/191/ChibiIcon.png",
    "new_path": "/skins/191/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/191/ShipyardIcon.png",
    "new_path": "/skins/191/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/191/KaiBanner.png",
    "new_path": "/skins/191/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/191/KaiIcon.png",
    "new_path": "/skins/191/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/191/KaiChibiIcon.png",
    "new_path": "/skins/191/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/191/KaiShipyardIcon.png",
    "new_path": "/skins/191/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/363/Banner.png",
    "new_path": "/skins/363/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/363/Icon.png",
    "new_path": "/skins/363/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/363/ChibiIcon.png",
    "new_path": "/skins/363/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/363/ShipyardIcon.png",
    "new_path": "/skins/363/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/363/SchoolBanner.png",
    "new_path": "/skins/363/Snow_Fairy_Schoolgirl/Banner.png"
  },
  {
    "old_path": "/images/skins/363/SchoolIcon.png",
    "new_path": "/skins/363/Snow_Fairy_Schoolgirl/Icon.png"
  },
  {
    "old_path": "/images/skins/363/SchoolChibiIcon.png",
    "new_path": "/skins/363/Snow_Fairy_Schoolgirl/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/363/SchoolShipyardIcon.png",
    "new_path": "/skins/363/Snow_Fairy_Schoolgirl/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/269/Banner.png",
    "new_path": "/skins/269/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/269/Icon.png",
    "new_path": "/skins/269/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/269/ChibiIcon.png",
    "new_path": "/skins/269/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/269/ShipyardIcon.png",
    "new_path": "/skins/269/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/269/KaiBanner.png",
    "new_path": "/skins/269/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/269/KaiIcon.png",
    "new_path": "/skins/269/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/269/KaiChibiIcon.png",
    "new_path": "/skins/269/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/269/KaiShipyardIcon.png",
    "new_path": "/skins/269/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/239/Banner.png",
    "new_path": "/skins/239/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/239/Icon.png",
    "new_path": "/skins/239/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/239/ChibiIcon.png",
    "new_path": "/skins/239/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/239/ShipyardIcon.png",
    "new_path": "/skins/239/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/239/KaiBanner.png",
    "new_path": "/skins/239/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/239/KaiIcon.png",
    "new_path": "/skins/239/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/239/KaiChibiIcon.png",
    "new_path": "/skins/239/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/239/KaiShipyardIcon.png",
    "new_path": "/skins/239/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/472/Banner.png",
    "new_path": "/skins/472/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/472/Icon.png",
    "new_path": "/skins/472/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/472/ChibiIcon.png",
    "new_path": "/skins/472/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/472/ShipyardIcon.png",
    "new_path": "/skins/472/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/472/SummerBanner.png",
    "new_path": "/skins/472/Hot_Springs_Relaxation/Banner.png"
  },
  {
    "old_path": "/images/skins/472/SummerIcon.png",
    "new_path": "/skins/472/Hot_Springs_Relaxation/Icon.png"
  },
  {
    "old_path": "/images/skins/472/SummerChibiIcon.png",
    "new_path": "/skins/472/Hot_Springs_Relaxation/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/472/SummerShipyardIcon.png",
    "new_path": "/skins/472/Hot_Springs_Relaxation/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/424/Banner.png",
    "new_path": "/skins/424/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/424/Icon.png",
    "new_path": "/skins/424/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/424/ChibiIcon.png",
    "new_path": "/skins/424/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/424/ShipyardIcon.png",
    "new_path": "/skins/424/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/424/KaiBanner.png",
    "new_path": "/skins/424/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/424/KaiIcon.png",
    "new_path": "/skins/424/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/424/KaiChibiIcon.png",
    "new_path": "/skins/424/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/424/KaiShipyardIcon.png",
    "new_path": "/skins/424/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/424/New_YearBanner.png",
    "new_path": "/skins/424/New_Years_Comfort/Banner.png"
  },
  {
    "old_path": "/images/skins/424/New_YearIcon.png",
    "new_path": "/skins/424/New_Years_Comfort/Icon.png"
  },
  {
    "old_path": "/images/skins/424/New_YearChibiIcon.png",
    "new_path": "/skins/424/New_Years_Comfort/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/424/New_YearShipyardIcon.png",
    "new_path": "/skins/424/New_Years_Comfort/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/424/SchoolBanner.png",
    "new_path": "/skins/424/At_School_with_Foo/Banner.png"
  },
  {
    "old_path": "/images/skins/424/SchoolIcon.png",
    "new_path": "/skins/424/At_School_with_Foo/Icon.png"
  },
  {
    "old_path": "/images/skins/424/SchoolChibiIcon.png",
    "new_path": "/skins/424/At_School_with_Foo/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/424/SchoolShipyardIcon.png",
    "new_path": "/skins/424/At_School_with_Foo/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/10063/Banner.png",
    "new_path": "/skins/10063/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/10063/Icon.png",
    "new_path": "/skins/10063/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/10063/ChibiIcon.png",
    "new_path": "/skins/10063/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/10063/ShipyardIcon.png",
    "new_path": "/skins/10063/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/10063/SummerBanner.png",
    "new_path": "/skins/10063/Springside_Mist/Banner.png"
  },
  {
    "old_path": "/images/skins/10063/SummerIcon.png",
    "new_path": "/skins/10063/Springside_Mist/Icon.png"
  },
  {
    "old_path": "/images/skins/10063/SummerChibiIcon.png",
    "new_path": "/skins/10063/Springside_Mist/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/10063/SummerShipyardIcon.png",
    "new_path": "/skins/10063/Springside_Mist/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/520/Banner.png",
    "new_path": "/skins/520/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/520/Icon.png",
    "new_path": "/skins/520/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/520/ChibiIcon.png",
    "new_path": "/skins/520/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/520/ShipyardIcon.png",
    "new_path": "/skins/520/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/520/BunnyBanner.png",
    "new_path": "/skins/520/NightIlluminating_Festival/Banner.png"
  },
  {
    "old_path": "/images/skins/520/BunnyIcon.png",
    "new_path": "/skins/520/NightIlluminating_Festival/Icon.png"
  },
  {
    "old_path": "/images/skins/520/BunnyChibiIcon.png",
    "new_path": "/skins/520/NightIlluminating_Festival/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/520/BunnyShipyardIcon.png",
    "new_path": "/skins/520/NightIlluminating_Festival/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/288/Banner.png",
    "new_path": "/skins/288/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/288/Icon.png",
    "new_path": "/skins/288/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/288/ChibiIcon.png",
    "new_path": "/skins/288/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/288/ShipyardIcon.png",
    "new_path": "/skins/288/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/288/WeddingBanner.png",
    "new_path": "/skins/288/Wedding/Banner.png"
  },
  {
    "old_path": "/images/skins/288/WeddingIcon.png",
    "new_path": "/skins/288/Wedding/Icon.png"
  },
  {
    "old_path": "/images/skins/288/WeddingChibiIcon.png",
    "new_path": "/skins/288/Wedding/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/288/WeddingShipyardIcon.png",
    "new_path": "/skins/288/Wedding/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/288/EventIcon.png",
    "new_path": "/skins/288/Monochromatic_Interlude/Icon.png"
  },
  {
    "old_path": "/images/skins/288/EventChibiIcon.png",
    "new_path": "/skins/288/Monochromatic_Interlude/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/288/EventShipyardIcon.png",
    "new_path": "/skins/288/Monochromatic_Interlude/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/517/Banner.png",
    "new_path": "/skins/517/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/517/Icon.png",
    "new_path": "/skins/517/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/517/ChibiIcon.png",
    "new_path": "/skins/517/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/517/ShipyardIcon.png",
    "new_path": "/skins/517/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/517/SchoolBanner.png",
    "new_path": "/skins/517/AfterSchool_Melody/Banner.png"
  },
  {
    "old_path": "/images/skins/517/SchoolIcon.png",
    "new_path": "/skins/517/AfterSchool_Melody/Icon.png"
  },
  {
    "old_path": "/images/skins/517/SchoolChibiIcon.png",
    "new_path": "/skins/517/AfterSchool_Melody/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/517/SchoolShipyardIcon.png",
    "new_path": "/skins/517/AfterSchool_Melody/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/121/Banner.png",
    "new_path": "/skins/121/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/121/Icon.png",
    "new_path": "/skins/121/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/121/ChibiIcon.png",
    "new_path": "/skins/121/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/121/ShipyardIcon.png",
    "new_path": "/skins/121/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/535/Banner.png",
    "new_path": "/skins/535/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/535/Icon.png",
    "new_path": "/skins/535/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/535/ChibiIcon.png",
    "new_path": "/skins/535/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/535/ShipyardIcon.png",
    "new_path": "/skins/535/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/535/Special_ExerciseBanner.png",
    "new_path": "/skins/535/Backstreet_Silver_Sonata/Banner.png"
  },
  {
    "old_path": "/images/skins/535/Special_ExerciseIcon.png",
    "new_path": "/skins/535/Backstreet_Silver_Sonata/Icon.png"
  },
  {
    "old_path": "/images/skins/535/Special_ExerciseChibiIcon.png",
    "new_path": "/skins/535/Backstreet_Silver_Sonata/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/535/Special_ExerciseShipyardIcon.png",
    "new_path": "/skins/535/Backstreet_Silver_Sonata/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/214/Banner.png",
    "new_path": "/skins/214/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/214/Icon.png",
    "new_path": "/skins/214/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/214/ChibiIcon.png",
    "new_path": "/skins/214/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/214/ShipyardIcon.png",
    "new_path": "/skins/214/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/214/SummerBanner.png",
    "new_path": "/skins/214/Poolside_Persuasion/Banner.png"
  },
  {
    "old_path": "/images/skins/214/SummerIcon.png",
    "new_path": "/skins/214/Poolside_Persuasion/Icon.png"
  },
  {
    "old_path": "/images/skins/214/SummerChibiIcon.png",
    "new_path": "/skins/214/Poolside_Persuasion/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/214/SummerShipyardIcon.png",
    "new_path": "/skins/214/Poolside_Persuasion/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/374/Banner.png",
    "new_path": "/skins/374/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/374/Icon.png",
    "new_path": "/skins/374/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/374/ChibiIcon.png",
    "new_path": "/skins/374/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/374/ShipyardIcon.png",
    "new_path": "/skins/374/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/374/SpringBanner.png",
    "new_path": "/skins/374/Style_of_the_East/Banner.png"
  },
  {
    "old_path": "/images/skins/374/SpringIcon.png",
    "new_path": "/skins/374/Style_of_the_East/Icon.png"
  },
  {
    "old_path": "/images/skins/374/SpringChibiIcon.png",
    "new_path": "/skins/374/Style_of_the_East/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/374/SpringShipyardIcon.png",
    "new_path": "/skins/374/Style_of_the_East/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/134/Banner.png",
    "new_path": "/skins/134/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/134/Icon.png",
    "new_path": "/skins/134/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/134/ChibiIcon.png",
    "new_path": "/skins/134/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/134/ShipyardIcon.png",
    "new_path": "/skins/134/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/134/PartyBanner.png",
    "new_path": "/skins/134/Roses_Regalia/Banner.png"
  },
  {
    "old_path": "/images/skins/134/PartyIcon.png",
    "new_path": "/skins/134/Roses_Regalia/Icon.png"
  },
  {
    "old_path": "/images/skins/134/PartyChibiIcon.png",
    "new_path": "/skins/134/Roses_Regalia/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/134/PartyShipyardIcon.png",
    "new_path": "/skins/134/Roses_Regalia/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/186/Banner.png",
    "new_path": "/skins/186/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/186/Icon.png",
    "new_path": "/skins/186/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/186/ChibiIcon.png",
    "new_path": "/skins/186/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/186/ShipyardIcon.png",
    "new_path": "/skins/186/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/186/KaiBanner.png",
    "new_path": "/skins/186/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/186/KaiIcon.png",
    "new_path": "/skins/186/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/186/KaiChibiIcon.png",
    "new_path": "/skins/186/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/186/KaiShipyardIcon.png",
    "new_path": "/skins/186/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/186/New_YearBanner.png",
    "new_path": "/skins/186/New_Years_Blade_Demon/Banner.png"
  },
  {
    "old_path": "/images/skins/186/New_YearIcon.png",
    "new_path": "/skins/186/New_Years_Blade_Demon/Icon.png"
  },
  {
    "old_path": "/images/skins/186/New_YearChibiIcon.png",
    "new_path": "/skins/186/New_Years_Blade_Demon/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/186/New_YearShipyardIcon.png",
    "new_path": "/skins/186/New_Years_Blade_Demon/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/186/BunnyBanner.png",
    "new_path": "/skins/186/Token_and_Ghost/Banner.png"
  },
  {
    "old_path": "/images/skins/186/BunnyIcon.png",
    "new_path": "/skins/186/Token_and_Ghost/Icon.png"
  },
  {
    "old_path": "/images/skins/186/BunnyChibiIcon.png",
    "new_path": "/skins/186/Token_and_Ghost/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/186/BunnyShipyardIcon.png",
    "new_path": "/skins/186/Token_and_Ghost/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/193/Banner.png",
    "new_path": "/skins/193/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/193/Icon.png",
    "new_path": "/skins/193/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/193/ChibiIcon.png",
    "new_path": "/skins/193/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/193/ShipyardIcon.png",
    "new_path": "/skins/193/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/207/Banner.png",
    "new_path": "/skins/207/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/207/Icon.png",
    "new_path": "/skins/207/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/207/ChibiIcon.png",
    "new_path": "/skins/207/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/207/ShipyardIcon.png",
    "new_path": "/skins/207/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/207/OriginalShipyardIcon.png",
    "new_path": "/skins/207/Original_Art/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/207/EventBanner.png",
    "new_path": "/skins/207/AfterSchool_Cannon_Time/Banner.png"
  },
  {
    "old_path": "/images/skins/207/EventIcon.png",
    "new_path": "/skins/207/AfterSchool_Cannon_Time/Icon.png"
  },
  {
    "old_path": "/images/skins/207/EventChibiIcon.png",
    "new_path": "/skins/207/AfterSchool_Cannon_Time/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/207/EventShipyardIcon.png",
    "new_path": "/skins/207/AfterSchool_Cannon_Time/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/207/CasualBanner.png",
    "new_path": "/skins/207/Summery_Audacity/Banner.png"
  },
  {
    "old_path": "/images/skins/207/CasualIcon.png",
    "new_path": "/skins/207/Summery_Audacity/Icon.png"
  },
  {
    "old_path": "/images/skins/207/CasualChibiIcon.png",
    "new_path": "/skins/207/Summery_Audacity/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/207/CasualShipyardIcon.png",
    "new_path": "/skins/207/Summery_Audacity/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/207/New_YearBanner.png",
    "new_path": "/skins/207/Casual_Dazzle/Banner.png"
  },
  {
    "old_path": "/images/skins/207/New_YearIcon.png",
    "new_path": "/skins/207/Casual_Dazzle/Icon.png"
  },
  {
    "old_path": "/images/skins/207/New_YearChibiIcon.png",
    "new_path": "/skins/207/Casual_Dazzle/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/207/New_YearShipyardIcon.png",
    "new_path": "/skins/207/Casual_Dazzle/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/207/SpringBanner.png",
    "new_path": "/skins/207/Graceful_Ink_Incense/Banner.png"
  },
  {
    "old_path": "/images/skins/207/SpringIcon.png",
    "new_path": "/skins/207/Graceful_Ink_Incense/Icon.png"
  },
  {
    "old_path": "/images/skins/207/SpringChibiIcon.png",
    "new_path": "/skins/207/Graceful_Ink_Incense/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/207/SpringShipyardIcon.png",
    "new_path": "/skins/207/Graceful_Ink_Incense/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/435/Banner.png",
    "new_path": "/skins/435/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/435/Icon.png",
    "new_path": "/skins/435/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/435/ChibiIcon.png",
    "new_path": "/skins/435/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/435/ShipyardIcon.png",
    "new_path": "/skins/435/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/435/OriginalShipyardIcon.png",
    "new_path": "/skins/435/Original_Art/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/435/CasualBanner.png",
    "new_path": "/skins/435/Blend_R/Banner.png"
  },
  {
    "old_path": "/images/skins/435/CasualIcon.png",
    "new_path": "/skins/435/Blend_R/Icon.png"
  },
  {
    "old_path": "/images/skins/435/CasualChibiIcon.png",
    "new_path": "/skins/435/Blend_R/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/435/CasualShipyardIcon.png",
    "new_path": "/skins/435/Blend_R/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/435/Special_ExerciseBanner.png",
    "new_path": "/skins/435/Drifting_Justice/Banner.png"
  },
  {
    "old_path": "/images/skins/435/Special_ExerciseIcon.png",
    "new_path": "/skins/435/Drifting_Justice/Icon.png"
  },
  {
    "old_path": "/images/skins/435/Special_ExerciseChibiIcon.png",
    "new_path": "/skins/435/Drifting_Justice/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/435/Special_ExerciseShipyardIcon.png",
    "new_path": "/skins/435/Drifting_Justice/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/272/Banner.png",
    "new_path": "/skins/272/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/272/Icon.png",
    "new_path": "/skins/272/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/272/ChibiIcon.png",
    "new_path": "/skins/272/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/272/ShipyardIcon.png",
    "new_path": "/skins/272/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/272/KaiBanner.png",
    "new_path": "/skins/272/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/272/KaiIcon.png",
    "new_path": "/skins/272/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/272/KaiChibiIcon.png",
    "new_path": "/skins/272/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/272/KaiShipyardIcon.png",
    "new_path": "/skins/272/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/272/New_YearBanner.png",
    "new_path": "/skins/272/New_Years_Wish/Banner.png"
  },
  {
    "old_path": "/images/skins/272/New_YearIcon.png",
    "new_path": "/skins/272/New_Years_Wish/Icon.png"
  },
  {
    "old_path": "/images/skins/272/New_YearChibiIcon.png",
    "new_path": "/skins/272/New_Years_Wish/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/272/New_YearShipyardIcon.png",
    "new_path": "/skins/272/New_Years_Wish/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Plan009/Banner.png",
    "new_path": "/skins/Plan009/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/Plan009/Icon.png",
    "new_path": "/skins/Plan009/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/Plan009/ChibiIcon.png",
    "new_path": "/skins/Plan009/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Plan009/ShipyardIcon.png",
    "new_path": "/skins/Plan009/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Plan009/FestivalBanner.png",
    "new_path": "/skins/Plan009/Celebration_Conquest/Banner.png"
  },
  {
    "old_path": "/images/skins/Plan009/FestivalIcon.png",
    "new_path": "/skins/Plan009/Celebration_Conquest/Icon.png"
  },
  {
    "old_path": "/images/skins/Plan009/FestivalChibiIcon.png",
    "new_path": "/skins/Plan009/Celebration_Conquest/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Plan009/FestivalShipyardIcon.png",
    "new_path": "/skins/Plan009/Celebration_Conquest/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/293/Banner.png",
    "new_path": "/skins/293/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/293/Icon.png",
    "new_path": "/skins/293/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/293/ChibiIcon.png",
    "new_path": "/skins/293/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/293/ShipyardIcon.png",
    "new_path": "/skins/293/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/293/ChristmasBanner.png",
    "new_path": "/skins/293/Festive_Riding_Hood/Banner.png"
  },
  {
    "old_path": "/images/skins/293/ChristmasIcon.png",
    "new_path": "/skins/293/Festive_Riding_Hood/Icon.png"
  },
  {
    "old_path": "/images/skins/293/ChristmasChibiIcon.png",
    "new_path": "/skins/293/Festive_Riding_Hood/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/293/ChristmasShipyardIcon.png",
    "new_path": "/skins/293/Festive_Riding_Hood/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Collab041/Banner.png",
    "new_path": "/skins/Collab041/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/Collab041/Icon.png",
    "new_path": "/skins/Collab041/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/Collab041/ChibiIcon.png",
    "new_path": "/skins/Collab041/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Collab041/ShipyardIcon.png",
    "new_path": "/skins/Collab041/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Collab041/KizunaBanner.png",
    "new_path": "/skins/Collab041/Festive_Kizuna_AI/Banner.png"
  },
  {
    "old_path": "/images/skins/Collab041/KizunaIcon.png",
    "new_path": "/skins/Collab041/Festive_Kizuna_AI/Icon.png"
  },
  {
    "old_path": "/images/skins/Collab041/KizunaChibiIcon.png",
    "new_path": "/skins/Collab041/Festive_Kizuna_AI/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Collab041/KizunaShipyardIcon.png",
    "new_path": "/skins/Collab041/Festive_Kizuna_AI/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/204/Banner.png",
    "new_path": "/skins/204/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/204/Icon.png",
    "new_path": "/skins/204/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/204/ChibiIcon.png",
    "new_path": "/skins/204/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/204/ShipyardIcon.png",
    "new_path": "/skins/204/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/204/OriginalShipyardIcon.png",
    "new_path": "/skins/204/Original_Art/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/204/FestivalBanner.png",
    "new_path": "/skins/204/The_Beauties_of_Nature/Banner.png"
  },
  {
    "old_path": "/images/skins/204/FestivalIcon.png",
    "new_path": "/skins/204/The_Beauties_of_Nature/Icon.png"
  },
  {
    "old_path": "/images/skins/204/FestivalChibiIcon.png",
    "new_path": "/skins/204/The_Beauties_of_Nature/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/204/FestivalShipyardIcon.png",
    "new_path": "/skins/204/The_Beauties_of_Nature/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/204/HospitalBanner.png",
    "new_path": "/skins/204/Hospital_Talent/Banner.png"
  },
  {
    "old_path": "/images/skins/204/HospitalIcon.png",
    "new_path": "/skins/204/Hospital_Talent/Icon.png"
  },
  {
    "old_path": "/images/skins/204/HospitalChibiIcon.png",
    "new_path": "/skins/204/Hospital_Talent/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/204/HospitalShipyardIcon.png",
    "new_path": "/skins/204/Hospital_Talent/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/539/Banner.png",
    "new_path": "/skins/539/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/539/Icon.png",
    "new_path": "/skins/539/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/539/ChibiIcon.png",
    "new_path": "/skins/539/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/539/ShipyardIcon.png",
    "new_path": "/skins/539/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/539/Special_ExerciseBanner.png",
    "new_path": "/skins/539/Begin_the_Rush/Banner.png"
  },
  {
    "old_path": "/images/skins/539/Special_ExerciseIcon.png",
    "new_path": "/skins/539/Begin_the_Rush/Icon.png"
  },
  {
    "old_path": "/images/skins/539/Special_ExerciseChibiIcon.png",
    "new_path": "/skins/539/Begin_the_Rush/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/539/Special_ExerciseShipyardIcon.png",
    "new_path": "/skins/539/Begin_the_Rush/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/469/Banner.png",
    "new_path": "/skins/469/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/469/Icon.png",
    "new_path": "/skins/469/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/469/ChibiIcon.png",
    "new_path": "/skins/469/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/469/ShipyardIcon.png",
    "new_path": "/skins/469/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/469/SummerBanner.png",
    "new_path": "/skins/469/Fancy_Waves/Banner.png"
  },
  {
    "old_path": "/images/skins/469/SummerIcon.png",
    "new_path": "/skins/469/Fancy_Waves/Icon.png"
  },
  {
    "old_path": "/images/skins/469/SummerChibiIcon.png",
    "new_path": "/skins/469/Fancy_Waves/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/469/SummerShipyardIcon.png",
    "new_path": "/skins/469/Fancy_Waves/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/469/CasualBanner.png",
    "new_path": "/skins/469/PJ_Poker_Party/Banner.png"
  },
  {
    "old_path": "/images/skins/469/CasualIcon.png",
    "new_path": "/skins/469/PJ_Poker_Party/Icon.png"
  },
  {
    "old_path": "/images/skins/469/CasualChibiIcon.png",
    "new_path": "/skins/469/PJ_Poker_Party/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/469/CasualShipyardIcon.png",
    "new_path": "/skins/469/PJ_Poker_Party/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Collab031/Banner.png",
    "new_path": "/skins/Collab031/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/Collab031/Icon.png",
    "new_path": "/skins/Collab031/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/Collab031/ChibiIcon.png",
    "new_path": "/skins/Collab031/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Collab031/ShipyardIcon.png",
    "new_path": "/skins/Collab031/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Collab031/CollabBanner.png",
    "new_path": "/skins/Collab031/Kuon_Utawarerumono/Banner.png"
  },
  {
    "old_path": "/images/skins/Collab031/CollabIcon.png",
    "new_path": "/skins/Collab031/Kuon_Utawarerumono/Icon.png"
  },
  {
    "old_path": "/images/skins/Collab031/CollabChibiIcon.png",
    "new_path": "/skins/Collab031/Kuon_Utawarerumono/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Collab031/CollabShipyardIcon.png",
    "new_path": "/skins/Collab031/Kuon_Utawarerumono/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/177/Banner.png",
    "new_path": "/skins/177/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/177/Icon.png",
    "new_path": "/skins/177/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/177/ChibiIcon.png",
    "new_path": "/skins/177/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/177/ShipyardIcon.png",
    "new_path": "/skins/177/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/240/Banner.png",
    "new_path": "/skins/240/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/240/Icon.png",
    "new_path": "/skins/240/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/240/ChibiIcon.png",
    "new_path": "/skins/240/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/240/ShipyardIcon.png",
    "new_path": "/skins/240/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/240/KaiBanner.png",
    "new_path": "/skins/240/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/240/KaiIcon.png",
    "new_path": "/skins/240/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/240/KaiChibiIcon.png",
    "new_path": "/skins/240/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/240/KaiShipyardIcon.png",
    "new_path": "/skins/240/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/238/Banner.png",
    "new_path": "/skins/238/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/238/Icon.png",
    "new_path": "/skins/238/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/238/ChibiIcon.png",
    "new_path": "/skins/238/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/238/ShipyardIcon.png",
    "new_path": "/skins/238/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/395/Banner.png",
    "new_path": "/skins/395/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/395/Icon.png",
    "new_path": "/skins/395/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/395/ChibiIcon.png",
    "new_path": "/skins/395/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/395/ShipyardIcon.png",
    "new_path": "/skins/395/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/395/SummerBanner.png",
    "new_path": "/skins/395/Beachside_Magician/Banner.png"
  },
  {
    "old_path": "/images/skins/395/SummerIcon.png",
    "new_path": "/skins/395/Beachside_Magician/Icon.png"
  },
  {
    "old_path": "/images/skins/395/SummerChibiIcon.png",
    "new_path": "/skins/395/Beachside_Magician/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/395/SummerShipyardIcon.png",
    "new_path": "/skins/395/Beachside_Magician/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/456/Banner.png",
    "new_path": "/skins/456/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/456/Icon.png",
    "new_path": "/skins/456/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/456/ChibiIcon.png",
    "new_path": "/skins/456/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/456/ShipyardIcon.png",
    "new_path": "/skins/456/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/456/SummerBanner.png",
    "new_path": "/skins/456/Pristine_Piscene/Banner.png"
  },
  {
    "old_path": "/images/skins/456/SummerIcon.png",
    "new_path": "/skins/456/Pristine_Piscene/Icon.png"
  },
  {
    "old_path": "/images/skins/456/SummerChibiIcon.png",
    "new_path": "/skins/456/Pristine_Piscene/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/456/SummerShipyardIcon.png",
    "new_path": "/skins/456/Pristine_Piscene/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/456/SpringBanner.png",
    "new_path": "/skins/456/Lush_Spring_Dreams/Banner.png"
  },
  {
    "old_path": "/images/skins/456/SpringIcon.png",
    "new_path": "/skins/456/Lush_Spring_Dreams/Icon.png"
  },
  {
    "old_path": "/images/skins/456/SpringChibiIcon.png",
    "new_path": "/skins/456/Lush_Spring_Dreams/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/456/SpringShipyardIcon.png",
    "new_path": "/skins/456/Lush_Spring_Dreams/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/456/HalloweenBanner.png",
    "new_path": "/skins/456/Black_Cat_of_All_Hallows_Eve/Banner.png"
  },
  {
    "old_path": "/images/skins/456/HalloweenIcon.png",
    "new_path": "/skins/456/Black_Cat_of_All_Hallows_Eve/Icon.png"
  },
  {
    "old_path": "/images/skins/456/HalloweenChibiIcon.png",
    "new_path": "/skins/456/Black_Cat_of_All_Hallows_Eve/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/456/HalloweenShipyardIcon.png",
    "new_path": "/skins/456/Black_Cat_of_All_Hallows_Eve/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/019/Banner.png",
    "new_path": "/skins/019/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/019/Icon.png",
    "new_path": "/skins/019/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/019/ChibiIcon.png",
    "new_path": "/skins/019/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/019/ShipyardIcon.png",
    "new_path": "/skins/019/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/019/KaiBanner.png",
    "new_path": "/skins/019/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/019/KaiIcon.png",
    "new_path": "/skins/019/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/019/KaiChibiIcon.png",
    "new_path": "/skins/019/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/019/KaiShipyardIcon.png",
    "new_path": "/skins/019/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/019/OriginalShipyardIcon.png",
    "new_path": "/skins/019/Original_Art/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/019/WeddingBanner.png",
    "new_path": "/skins/019/Wedding/Banner.png"
  },
  {
    "old_path": "/images/skins/019/WeddingIcon.png",
    "new_path": "/skins/019/Wedding/Icon.png"
  },
  {
    "old_path": "/images/skins/019/WeddingChibiIcon.png",
    "new_path": "/skins/019/Wedding/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/019/WeddingShipyardIcon.png",
    "new_path": "/skins/019/Wedding/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/019/BilibiliBanner.png",
    "new_path": "/skins/019/Bili_Girl_33/Banner.png"
  },
  {
    "old_path": "/images/skins/019/BilibiliIcon.png",
    "new_path": "/skins/019/Bili_Girl_33/Icon.png"
  },
  {
    "old_path": "/images/skins/019/BilibiliChibiIcon.png",
    "new_path": "/skins/019/Bili_Girl_33/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/019/BilibiliShipyardIcon.png",
    "new_path": "/skins/019/Bili_Girl_33/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/019/New_YearBanner.png",
    "new_path": "/skins/019/Snow_Rabbit_and_Candy_Apple/Banner.png"
  },
  {
    "old_path": "/images/skins/019/New_YearIcon.png",
    "new_path": "/skins/019/Snow_Rabbit_and_Candy_Apple/Icon.png"
  },
  {
    "old_path": "/images/skins/019/New_YearChibiIcon.png",
    "new_path": "/skins/019/Snow_Rabbit_and_Candy_Apple/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/019/New_YearShipyardIcon.png",
    "new_path": "/skins/019/Snow_Rabbit_and_Candy_Apple/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/019/SpringBanner.png",
    "new_path": "/skins/019/White_Rabbit_Welcomes_the_Spring/Banner.png"
  },
  {
    "old_path": "/images/skins/019/SpringIcon.png",
    "new_path": "/skins/019/White_Rabbit_Welcomes_the_Spring/Icon.png"
  },
  {
    "old_path": "/images/skins/019/SpringChibiIcon.png",
    "new_path": "/skins/019/White_Rabbit_Welcomes_the_Spring/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/019/SpringShipyardIcon.png",
    "new_path": "/skins/019/White_Rabbit_Welcomes_the_Spring/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/019/CoCoBanner.png",
    "new_path": "/skins/019/Bunny_Clerk/Banner.png"
  },
  {
    "old_path": "/images/skins/019/CoCoIcon.png",
    "new_path": "/skins/019/Bunny_Clerk/Icon.png"
  },
  {
    "old_path": "/images/skins/019/CoCoChibiIcon.png",
    "new_path": "/skins/019/Bunny_Clerk/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/019/CoCoShipyardIcon.png",
    "new_path": "/skins/019/Bunny_Clerk/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/019/BlurayBanner.png",
    "new_path": "/skins/019/Picnic_Adventure/Banner.png"
  },
  {
    "old_path": "/images/skins/019/BlurayIcon.png",
    "new_path": "/skins/019/Picnic_Adventure/Icon.png"
  },
  {
    "old_path": "/images/skins/019/BlurayChibiIcon.png",
    "new_path": "/skins/019/Picnic_Adventure/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/019/BlurayShipyardIcon.png",
    "new_path": "/skins/019/Picnic_Adventure/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/019/IdolBanner.png",
    "new_path": "/skins/019/Bunny_Idol_Unmotivated/Banner.png"
  },
  {
    "old_path": "/images/skins/019/IdolIcon.png",
    "new_path": "/skins/019/Bunny_Idol_Unmotivated/Icon.png"
  },
  {
    "old_path": "/images/skins/019/IdolChibiIcon.png",
    "new_path": "/skins/019/Bunny_Idol_Unmotivated/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/019/IdolShipyardIcon.png",
    "new_path": "/skins/019/Bunny_Idol_Unmotivated/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/019/Bluray2Banner.png",
    "new_path": "/skins/019/Sleep_to_Clean_Another_Day/Banner.png"
  },
  {
    "old_path": "/images/skins/019/Bluray2Icon.png",
    "new_path": "/skins/019/Sleep_to_Clean_Another_Day/Icon.png"
  },
  {
    "old_path": "/images/skins/019/Bluray2ChibiIcon.png",
    "new_path": "/skins/019/Sleep_to_Clean_Another_Day/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/019/Bluray2ShipyardIcon.png",
    "new_path": "/skins/019/Sleep_to_Clean_Another_Day/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/072/Banner.png",
    "new_path": "/skins/072/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/072/Icon.png",
    "new_path": "/skins/072/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/072/ChibiIcon.png",
    "new_path": "/skins/072/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/072/ShipyardIcon.png",
    "new_path": "/skins/072/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/072/KaiBanner.png",
    "new_path": "/skins/072/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/072/KaiIcon.png",
    "new_path": "/skins/072/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/072/KaiChibiIcon.png",
    "new_path": "/skins/072/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/072/KaiShipyardIcon.png",
    "new_path": "/skins/072/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/394/Banner.png",
    "new_path": "/skins/394/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/394/Icon.png",
    "new_path": "/skins/394/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/394/ChibiIcon.png",
    "new_path": "/skins/394/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/394/ShipyardIcon.png",
    "new_path": "/skins/394/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/394/CasualBanner.png",
    "new_path": "/skins/394/Sleepy_Sunday/Banner.png"
  },
  {
    "old_path": "/images/skins/394/CasualIcon.png",
    "new_path": "/skins/394/Sleepy_Sunday/Icon.png"
  },
  {
    "old_path": "/images/skins/394/CasualChibiIcon.png",
    "new_path": "/skins/394/Sleepy_Sunday/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/394/CasualShipyardIcon.png",
    "new_path": "/skins/394/Sleepy_Sunday/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/394/SummerBanner.png",
    "new_path": "/skins/394/Mercredi_at_the_Secret_Base/Banner.png"
  },
  {
    "old_path": "/images/skins/394/SummerIcon.png",
    "new_path": "/skins/394/Mercredi_at_the_Secret_Base/Icon.png"
  },
  {
    "old_path": "/images/skins/394/SummerChibiIcon.png",
    "new_path": "/skins/394/Mercredi_at_the_Secret_Base/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/394/SummerShipyardIcon.png",
    "new_path": "/skins/394/Mercredi_at_the_Secret_Base/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/394/BunnyBanner.png",
    "new_path": "/skins/394/Listless_Lapin/Banner.png"
  },
  {
    "old_path": "/images/skins/394/BunnyIcon.png",
    "new_path": "/skins/394/Listless_Lapin/Icon.png"
  },
  {
    "old_path": "/images/skins/394/BunnyChibiIcon.png",
    "new_path": "/skins/394/Listless_Lapin/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/394/BunnyShipyardIcon.png",
    "new_path": "/skins/394/Listless_Lapin/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/481/Banner.png",
    "new_path": "/skins/481/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/481/Icon.png",
    "new_path": "/skins/481/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/481/ChibiIcon.png",
    "new_path": "/skins/481/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/481/ShipyardIcon.png",
    "new_path": "/skins/481/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/351/Banner.png",
    "new_path": "/skins/351/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/351/Icon.png",
    "new_path": "/skins/351/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/351/ChibiIcon.png",
    "new_path": "/skins/351/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/351/ShipyardIcon.png",
    "new_path": "/skins/351/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/351/KaiBanner.png",
    "new_path": "/skins/351/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/351/KaiIcon.png",
    "new_path": "/skins/351/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/351/KaiChibiIcon.png",
    "new_path": "/skins/351/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/351/KaiShipyardIcon.png",
    "new_path": "/skins/351/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/351/SummerBanner.png",
    "new_path": "/skins/351/t_Brillant/Banner.png"
  },
  {
    "old_path": "/images/skins/351/SummerIcon.png",
    "new_path": "/skins/351/t_Brillant/Icon.png"
  },
  {
    "old_path": "/images/skins/351/SummerChibiIcon.png",
    "new_path": "/skins/351/t_Brillant/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/351/SummerShipyardIcon.png",
    "new_path": "/skins/351/t_Brillant/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/351/SchoolBanner.png",
    "new_path": "/skins/351/colire_Heureuse/Banner.png"
  },
  {
    "old_path": "/images/skins/351/SchoolIcon.png",
    "new_path": "/skins/351/colire_Heureuse/Icon.png"
  },
  {
    "old_path": "/images/skins/351/SchoolChibiIcon.png",
    "new_path": "/skins/351/colire_Heureuse/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/351/SchoolShipyardIcon.png",
    "new_path": "/skins/351/colire_Heureuse/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/522/Banner.png",
    "new_path": "/skins/522/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/522/Icon.png",
    "new_path": "/skins/522/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/522/ChibiIcon.png",
    "new_path": "/skins/522/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/522/ShipyardIcon.png",
    "new_path": "/skins/522/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/522/CasualBanner.png",
    "new_path": "/skins/522/Sunlight_Seaspray_and_Sanctity/Banner.png"
  },
  {
    "old_path": "/images/skins/522/CasualIcon.png",
    "new_path": "/skins/522/Sunlight_Seaspray_and_Sanctity/Icon.png"
  },
  {
    "old_path": "/images/skins/522/CasualChibiIcon.png",
    "new_path": "/skins/522/Sunlight_Seaspray_and_Sanctity/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/522/CasualShipyardIcon.png",
    "new_path": "/skins/522/Sunlight_Seaspray_and_Sanctity/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/347/Banner.png",
    "new_path": "/skins/347/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/347/Icon.png",
    "new_path": "/skins/347/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/347/ChibiIcon.png",
    "new_path": "/skins/347/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/347/ShipyardIcon.png",
    "new_path": "/skins/347/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/359/Banner.png",
    "new_path": "/skins/359/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/359/Icon.png",
    "new_path": "/skins/359/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/359/ChibiIcon.png",
    "new_path": "/skins/359/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/359/ShipyardIcon.png",
    "new_path": "/skins/359/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/359/SummerBanner.png",
    "new_path": "/skins/359/Summery_Temeraire/Banner.png"
  },
  {
    "old_path": "/images/skins/359/SummerIcon.png",
    "new_path": "/skins/359/Summery_Temeraire/Icon.png"
  },
  {
    "old_path": "/images/skins/359/SummerChibiIcon.png",
    "new_path": "/skins/359/Summery_Temeraire/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/359/SummerShipyardIcon.png",
    "new_path": "/skins/359/Summery_Temeraire/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/359/CasualBanner.png",
    "new_path": "/skins/359/Dreamy_Dolce/Banner.png"
  },
  {
    "old_path": "/images/skins/359/CasualIcon.png",
    "new_path": "/skins/359/Dreamy_Dolce/Icon.png"
  },
  {
    "old_path": "/images/skins/359/CasualChibiIcon.png",
    "new_path": "/skins/359/Dreamy_Dolce/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/359/CasualShipyardIcon.png",
    "new_path": "/skins/359/Dreamy_Dolce/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/104/Banner.png",
    "new_path": "/skins/104/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/104/Icon.png",
    "new_path": "/skins/104/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/104/ChibiIcon.png",
    "new_path": "/skins/104/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/104/ShipyardIcon.png",
    "new_path": "/skins/104/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/104/KaiBanner.png",
    "new_path": "/skins/104/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/104/KaiIcon.png",
    "new_path": "/skins/104/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/104/KaiChibiIcon.png",
    "new_path": "/skins/104/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/104/KaiShipyardIcon.png",
    "new_path": "/skins/104/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/241/Banner.png",
    "new_path": "/skins/241/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/241/Icon.png",
    "new_path": "/skins/241/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/241/ChibiIcon.png",
    "new_path": "/skins/241/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/241/ShipyardIcon.png",
    "new_path": "/skins/241/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/241/KaiBanner.png",
    "new_path": "/skins/241/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/241/KaiIcon.png",
    "new_path": "/skins/241/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/241/KaiChibiIcon.png",
    "new_path": "/skins/241/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/241/KaiShipyardIcon.png",
    "new_path": "/skins/241/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/241/MaidBanner.png",
    "new_path": "/skins/241/Storefront_Training/Banner.png"
  },
  {
    "old_path": "/images/skins/241/MaidIcon.png",
    "new_path": "/skins/241/Storefront_Training/Icon.png"
  },
  {
    "old_path": "/images/skins/241/MaidChibiIcon.png",
    "new_path": "/skins/241/Storefront_Training/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/241/MaidShipyardIcon.png",
    "new_path": "/skins/241/Storefront_Training/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/390/Banner.png",
    "new_path": "/skins/390/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/390/Icon.png",
    "new_path": "/skins/390/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/390/ChibiIcon.png",
    "new_path": "/skins/390/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/390/ShipyardIcon.png",
    "new_path": "/skins/390/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/073/Banner.png",
    "new_path": "/skins/073/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/073/Icon.png",
    "new_path": "/skins/073/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/073/ChibiIcon.png",
    "new_path": "/skins/073/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/073/ShipyardIcon.png",
    "new_path": "/skins/073/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/073/SpringBanner.png",
    "new_path": "/skins/073/The_Beauty_of_Spring/Banner.png"
  },
  {
    "old_path": "/images/skins/073/SpringIcon.png",
    "new_path": "/skins/073/The_Beauty_of_Spring/Icon.png"
  },
  {
    "old_path": "/images/skins/073/SpringChibiIcon.png",
    "new_path": "/skins/073/The_Beauty_of_Spring/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/073/SpringShipyardIcon.png",
    "new_path": "/skins/073/The_Beauty_of_Spring/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/392/Banner.png",
    "new_path": "/skins/392/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/392/Icon.png",
    "new_path": "/skins/392/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/392/ChibiIcon.png",
    "new_path": "/skins/392/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/392/ShipyardIcon.png",
    "new_path": "/skins/392/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/505/Banner.png",
    "new_path": "/skins/505/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/505/Icon.png",
    "new_path": "/skins/505/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/505/ChibiIcon.png",
    "new_path": "/skins/505/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/505/ShipyardIcon.png",
    "new_path": "/skins/505/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/505/SummerBanner.png",
    "new_path": "/skins/505/Beachbound_Southwestern_Wind/Banner.png"
  },
  {
    "old_path": "/images/skins/505/SummerIcon.png",
    "new_path": "/skins/505/Beachbound_Southwestern_Wind/Icon.png"
  },
  {
    "old_path": "/images/skins/505/SummerChibiIcon.png",
    "new_path": "/skins/505/Beachbound_Southwestern_Wind/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/505/SummerShipyardIcon.png",
    "new_path": "/skins/505/Beachbound_Southwestern_Wind/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/335/Banner.png",
    "new_path": "/skins/335/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/335/Icon.png",
    "new_path": "/skins/335/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/335/ChibiIcon.png",
    "new_path": "/skins/335/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/335/ShipyardIcon.png",
    "new_path": "/skins/335/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/516/Banner.png",
    "new_path": "/skins/516/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/516/Icon.png",
    "new_path": "/skins/516/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/516/ChibiIcon.png",
    "new_path": "/skins/516/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/516/ShipyardIcon.png",
    "new_path": "/skins/516/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/459/Banner.png",
    "new_path": "/skins/459/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/459/Icon.png",
    "new_path": "/skins/459/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/459/ChibiIcon.png",
    "new_path": "/skins/459/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/459/ShipyardIcon.png",
    "new_path": "/skins/459/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/451/Banner.png",
    "new_path": "/skins/451/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/451/Icon.png",
    "new_path": "/skins/451/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/451/ChibiIcon.png",
    "new_path": "/skins/451/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/451/ShipyardIcon.png",
    "new_path": "/skins/451/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/410/Banner.png",
    "new_path": "/skins/410/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/410/Icon.png",
    "new_path": "/skins/410/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/410/ChibiIcon.png",
    "new_path": "/skins/410/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/410/ShipyardIcon.png",
    "new_path": "/skins/410/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/410/SummerBanner.png",
    "new_path": "/skins/410/The_Glory_of_Naples/Banner.png"
  },
  {
    "old_path": "/images/skins/410/SummerIcon.png",
    "new_path": "/skins/410/The_Glory_of_Naples/Icon.png"
  },
  {
    "old_path": "/images/skins/410/SummerChibiIcon.png",
    "new_path": "/skins/410/The_Glory_of_Naples/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/410/SummerShipyardIcon.png",
    "new_path": "/skins/410/The_Glory_of_Naples/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/410/PartyBanner.png",
    "new_path": "/skins/410/Calabria_Aurea/Banner.png"
  },
  {
    "old_path": "/images/skins/410/PartyIcon.png",
    "new_path": "/skins/410/Calabria_Aurea/Icon.png"
  },
  {
    "old_path": "/images/skins/410/PartyChibiIcon.png",
    "new_path": "/skins/410/Calabria_Aurea/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/410/PartyShipyardIcon.png",
    "new_path": "/skins/410/Calabria_Aurea/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/410/CasualBanner.png",
    "new_path": "/skins/410/Lounging_Emerald/Banner.png"
  },
  {
    "old_path": "/images/skins/410/CasualIcon.png",
    "new_path": "/skins/410/Lounging_Emerald/Icon.png"
  },
  {
    "old_path": "/images/skins/410/CasualChibiIcon.png",
    "new_path": "/skins/410/Lounging_Emerald/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/410/CasualShipyardIcon.png",
    "new_path": "/skins/410/Lounging_Emerald/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/119/Banner.png",
    "new_path": "/skins/119/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/119/Icon.png",
    "new_path": "/skins/119/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/119/ChibiIcon.png",
    "new_path": "/skins/119/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/119/ShipyardIcon.png",
    "new_path": "/skins/119/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/119/KaiBanner.png",
    "new_path": "/skins/119/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/119/KaiIcon.png",
    "new_path": "/skins/119/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/119/KaiChibiIcon.png",
    "new_path": "/skins/119/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/119/KaiShipyardIcon.png",
    "new_path": "/skins/119/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/070/Banner.png",
    "new_path": "/skins/070/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/070/Icon.png",
    "new_path": "/skins/070/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/070/ChibiIcon.png",
    "new_path": "/skins/070/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/070/ShipyardIcon.png",
    "new_path": "/skins/070/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/070/KaiBanner.png",
    "new_path": "/skins/070/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/070/KaiIcon.png",
    "new_path": "/skins/070/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/070/KaiChibiIcon.png",
    "new_path": "/skins/070/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/070/KaiShipyardIcon.png",
    "new_path": "/skins/070/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/070/BilibiliBanner.png",
    "new_path": "/skins/070/Long_Island_Indoor_Slacker/Banner.png"
  },
  {
    "old_path": "/images/skins/070/BilibiliIcon.png",
    "new_path": "/skins/070/Long_Island_Indoor_Slacker/Icon.png"
  },
  {
    "old_path": "/images/skins/070/BilibiliChibiIcon.png",
    "new_path": "/skins/070/Long_Island_Indoor_Slacker/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/070/BilibiliShipyardIcon.png",
    "new_path": "/skins/070/Long_Island_Indoor_Slacker/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/070/HalloweenBanner.png",
    "new_path": "/skins/070/Long_Islands_Spooky_Stream/Banner.png"
  },
  {
    "old_path": "/images/skins/070/HalloweenIcon.png",
    "new_path": "/skins/070/Long_Islands_Spooky_Stream/Icon.png"
  },
  {
    "old_path": "/images/skins/070/HalloweenChibiIcon.png",
    "new_path": "/skins/070/Long_Islands_Spooky_Stream/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/070/HalloweenShipyardIcon.png",
    "new_path": "/skins/070/Long_Islands_Spooky_Stream/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/504/Banner.png",
    "new_path": "/skins/504/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/504/Icon.png",
    "new_path": "/skins/504/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/504/ChibiIcon.png",
    "new_path": "/skins/504/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/504/ShipyardIcon.png",
    "new_path": "/skins/504/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/504/SummerBanner.png",
    "new_path": "/skins/504/Lonesome_Beachfarer/Banner.png"
  },
  {
    "old_path": "/images/skins/504/SummerIcon.png",
    "new_path": "/skins/504/Lonesome_Beachfarer/Icon.png"
  },
  {
    "old_path": "/images/skins/504/SummerChibiIcon.png",
    "new_path": "/skins/504/Lonesome_Beachfarer/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/504/SummerShipyardIcon.png",
    "new_path": "/skins/504/Lonesome_Beachfarer/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/525/Banner.png",
    "new_path": "/skins/525/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/525/Icon.png",
    "new_path": "/skins/525/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/525/ChibiIcon.png",
    "new_path": "/skins/525/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/525/ShipyardIcon.png",
    "new_path": "/skins/525/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/525/MaidBanner.png",
    "new_path": "/skins/525/Cat_Caf_Cleanup/Banner.png"
  },
  {
    "old_path": "/images/skins/525/MaidIcon.png",
    "new_path": "/skins/525/Cat_Caf_Cleanup/Icon.png"
  },
  {
    "old_path": "/images/skins/525/MaidChibiIcon.png",
    "new_path": "/skins/525/Cat_Caf_Cleanup/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/525/MaidShipyardIcon.png",
    "new_path": "/skins/525/Cat_Caf_Cleanup/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/523/Banner.png",
    "new_path": "/skins/523/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/523/Icon.png",
    "new_path": "/skins/523/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/523/ChibiIcon.png",
    "new_path": "/skins/523/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/523/ShipyardIcon.png",
    "new_path": "/skins/523/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/523/CasualBanner.png",
    "new_path": "/skins/523/The_Noble_Knights_Last_Stand/Banner.png"
  },
  {
    "old_path": "/images/skins/523/CasualIcon.png",
    "new_path": "/skins/523/The_Noble_Knights_Last_Stand/Icon.png"
  },
  {
    "old_path": "/images/skins/523/CasualChibiIcon.png",
    "new_path": "/skins/523/The_Noble_Knights_Last_Stand/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/523/CasualShipyardIcon.png",
    "new_path": "/skins/523/The_Noble_Knights_Last_Stand/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Plan015/Banner.png",
    "new_path": "/skins/Plan015/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/Plan015/Icon.png",
    "new_path": "/skins/Plan015/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/Plan015/ChibiIcon.png",
    "new_path": "/skins/Plan015/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Plan015/ShipyardIcon.png",
    "new_path": "/skins/Plan015/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/370/Banner.png",
    "new_path": "/skins/370/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/370/Icon.png",
    "new_path": "/skins/370/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/370/ChibiIcon.png",
    "new_path": "/skins/370/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/370/ShipyardIcon.png",
    "new_path": "/skins/370/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/370/SchoolBanner.png",
    "new_path": "/skins/370/Time_for_School/Banner.png"
  },
  {
    "old_path": "/images/skins/370/SchoolIcon.png",
    "new_path": "/skins/370/Time_for_School/Icon.png"
  },
  {
    "old_path": "/images/skins/370/SchoolChibiIcon.png",
    "new_path": "/skins/370/Time_for_School/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/370/SchoolShipyardIcon.png",
    "new_path": "/skins/370/Time_for_School/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/10077/Banner.png",
    "new_path": "/skins/10077/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/10077/Icon.png",
    "new_path": "/skins/10077/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/10077/ChibiIcon.png",
    "new_path": "/skins/10077/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/10077/ShipyardIcon.png",
    "new_path": "/skins/10077/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/10077/FestivalBanner.png",
    "new_path": "/skins/10077/Alluring_Festival/Banner.png"
  },
  {
    "old_path": "/images/skins/10077/FestivalIcon.png",
    "new_path": "/skins/10077/Alluring_Festival/Icon.png"
  },
  {
    "old_path": "/images/skins/10077/FestivalChibiIcon.png",
    "new_path": "/skins/10077/Alluring_Festival/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/10077/FestivalShipyardIcon.png",
    "new_path": "/skins/10077/Alluring_Festival/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/448/Banner.png",
    "new_path": "/skins/448/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/448/Icon.png",
    "new_path": "/skins/448/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/448/ChibiIcon.png",
    "new_path": "/skins/448/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/448/ShipyardIcon.png",
    "new_path": "/skins/448/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/448/SportBanner.png",
    "new_path": "/skins/448/Boxing_Girl/Banner.png"
  },
  {
    "old_path": "/images/skins/448/SportIcon.png",
    "new_path": "/skins/448/Boxing_Girl/Icon.png"
  },
  {
    "old_path": "/images/skins/448/SportChibiIcon.png",
    "new_path": "/skins/448/Boxing_Girl/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/448/SportShipyardIcon.png",
    "new_path": "/skins/448/Boxing_Girl/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/448/ChristmasBanner.png",
    "new_path": "/skins/448/Charmer_in_the_Snowy_Reflection/Banner.png"
  },
  {
    "old_path": "/images/skins/448/ChristmasIcon.png",
    "new_path": "/skins/448/Charmer_in_the_Snowy_Reflection/Icon.png"
  },
  {
    "old_path": "/images/skins/448/ChristmasChibiIcon.png",
    "new_path": "/skins/448/Charmer_in_the_Snowy_Reflection/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/448/ChristmasShipyardIcon.png",
    "new_path": "/skins/448/Charmer_in_the_Snowy_Reflection/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/448/FestivalBanner.png",
    "new_path": "/skins/448/Moongazing_on_the_29th/Banner.png"
  },
  {
    "old_path": "/images/skins/448/FestivalIcon.png",
    "new_path": "/skins/448/Moongazing_on_the_29th/Icon.png"
  },
  {
    "old_path": "/images/skins/448/FestivalChibiIcon.png",
    "new_path": "/skins/448/Moongazing_on_the_29th/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/448/FestivalShipyardIcon.png",
    "new_path": "/skins/448/Moongazing_on_the_29th/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Plan022/Banner.png",
    "new_path": "/skins/Plan022/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/Plan022/Icon.png",
    "new_path": "/skins/Plan022/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/Plan022/ChibiIcon.png",
    "new_path": "/skins/Plan022/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Plan022/ShipyardIcon.png",
    "new_path": "/skins/Plan022/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Plan022/MaidBanner.png",
    "new_path": "/skins/Plan022/The_Queen_of_Hearts/Banner.png"
  },
  {
    "old_path": "/images/skins/Plan022/MaidIcon.png",
    "new_path": "/skins/Plan022/The_Queen_of_Hearts/Icon.png"
  },
  {
    "old_path": "/images/skins/Plan022/MaidChibiIcon.png",
    "new_path": "/skins/Plan022/The_Queen_of_Hearts/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Plan022/MaidShipyardIcon.png",
    "new_path": "/skins/Plan022/The_Queen_of_Hearts/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/10061/Banner.png",
    "new_path": "/skins/10061/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/10061/Icon.png",
    "new_path": "/skins/10061/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/10061/ChibiIcon.png",
    "new_path": "/skins/10061/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/10061/ShipyardIcon.png",
    "new_path": "/skins/10061/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/10061/SummerBanner.png",
    "new_path": "/skins/10061/Devilish_Servant_Against_the_Splashing_Waves/Banner.png"
  },
  {
    "old_path": "/images/skins/10061/SummerIcon.png",
    "new_path": "/skins/10061/Devilish_Servant_Against_the_Splashing_Waves/Icon.png"
  },
  {
    "old_path": "/images/skins/10061/SummerChibiIcon.png",
    "new_path": "/skins/10061/Devilish_Servant_Against_the_Splashing_Waves/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/10061/SummerShipyardIcon.png",
    "new_path": "/skins/10061/Devilish_Servant_Against_the_Splashing_Waves/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/061/Banner.png",
    "new_path": "/skins/061/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/061/Icon.png",
    "new_path": "/skins/061/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/061/ChibiIcon.png",
    "new_path": "/skins/061/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/061/ShipyardIcon.png",
    "new_path": "/skins/061/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/061/OriginalBanner.png",
    "new_path": "/skins/061/Original_Art/Banner.png"
  },
  {
    "old_path": "/images/skins/061/OriginalIcon.png",
    "new_path": "/skins/061/Original_Art/Icon.png"
  },
  {
    "old_path": "/images/skins/061/OriginalChibiIcon.png",
    "new_path": "/skins/061/Original_Art/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/061/OriginalShipyardIcon.png",
    "new_path": "/skins/061/Original_Art/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/354/Banner.png",
    "new_path": "/skins/354/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/354/Icon.png",
    "new_path": "/skins/354/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/354/ChibiIcon.png",
    "new_path": "/skins/354/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/354/ShipyardIcon.png",
    "new_path": "/skins/354/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/354/PartyBanner.png",
    "new_path": "/skins/354/Dressed_to_Impress/Banner.png"
  },
  {
    "old_path": "/images/skins/354/PartyIcon.png",
    "new_path": "/skins/354/Dressed_to_Impress/Icon.png"
  },
  {
    "old_path": "/images/skins/354/PartyChibiIcon.png",
    "new_path": "/skins/354/Dressed_to_Impress/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/354/PartyShipyardIcon.png",
    "new_path": "/skins/354/Dressed_to_Impress/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/325/Banner.png",
    "new_path": "/skins/325/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/325/Icon.png",
    "new_path": "/skins/325/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/325/ChibiIcon.png",
    "new_path": "/skins/325/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/325/ShipyardIcon.png",
    "new_path": "/skins/325/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/325/CasualBanner.png",
    "new_path": "/skins/325/Escort_Me_Please/Banner.png"
  },
  {
    "old_path": "/images/skins/325/CasualIcon.png",
    "new_path": "/skins/325/Escort_Me_Please/Icon.png"
  },
  {
    "old_path": "/images/skins/325/CasualChibiIcon.png",
    "new_path": "/skins/325/Escort_Me_Please/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/325/CasualShipyardIcon.png",
    "new_path": "/skins/325/Escort_Me_Please/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/270/Banner.png",
    "new_path": "/skins/270/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/270/Icon.png",
    "new_path": "/skins/270/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/270/ChibiIcon.png",
    "new_path": "/skins/270/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/270/ShipyardIcon.png",
    "new_path": "/skins/270/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/270/KaiBanner.png",
    "new_path": "/skins/270/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/270/KaiIcon.png",
    "new_path": "/skins/270/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/270/KaiChibiIcon.png",
    "new_path": "/skins/270/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/270/KaiShipyardIcon.png",
    "new_path": "/skins/270/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/010/Banner.png",
    "new_path": "/skins/010/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/010/Icon.png",
    "new_path": "/skins/010/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/010/ChibiIcon.png",
    "new_path": "/skins/010/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/010/ShipyardIcon.png",
    "new_path": "/skins/010/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/202/Banner.png",
    "new_path": "/skins/202/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/202/Icon.png",
    "new_path": "/skins/202/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/202/ChibiIcon.png",
    "new_path": "/skins/202/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/202/ShipyardIcon.png",
    "new_path": "/skins/202/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/009/Banner.png",
    "new_path": "/skins/009/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/009/Icon.png",
    "new_path": "/skins/009/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/009/ChibiIcon.png",
    "new_path": "/skins/009/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/009/ShipyardIcon.png",
    "new_path": "/skins/009/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/360/Banner.png",
    "new_path": "/skins/360/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/360/Icon.png",
    "new_path": "/skins/360/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/360/ChibiIcon.png",
    "new_path": "/skins/360/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/360/ShipyardIcon.png",
    "new_path": "/skins/360/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/360/CasualBanner.png",
    "new_path": "/skins/360/Casual_Vacation/Banner.png"
  },
  {
    "old_path": "/images/skins/360/CasualIcon.png",
    "new_path": "/skins/360/Casual_Vacation/Icon.png"
  },
  {
    "old_path": "/images/skins/360/CasualChibiIcon.png",
    "new_path": "/skins/360/Casual_Vacation/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/360/CasualShipyardIcon.png",
    "new_path": "/skins/360/Casual_Vacation/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/360/HalloweenBanner.png",
    "new_path": "/skins/360/Mystical_Night/Banner.png"
  },
  {
    "old_path": "/images/skins/360/HalloweenIcon.png",
    "new_path": "/skins/360/Mystical_Night/Icon.png"
  },
  {
    "old_path": "/images/skins/360/HalloweenChibiIcon.png",
    "new_path": "/skins/360/Mystical_Night/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/360/HalloweenShipyardIcon.png",
    "new_path": "/skins/360/Mystical_Night/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/360/SchoolBanner.png",
    "new_path": "/skins/360/A_Breath_of_Fresh_Air/Banner.png"
  },
  {
    "old_path": "/images/skins/360/SchoolIcon.png",
    "new_path": "/skins/360/A_Breath_of_Fresh_Air/Icon.png"
  },
  {
    "old_path": "/images/skins/360/SchoolChibiIcon.png",
    "new_path": "/skins/360/A_Breath_of_Fresh_Air/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/360/SchoolShipyardIcon.png",
    "new_path": "/skins/360/A_Breath_of_Fresh_Air/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/333/Banner.png",
    "new_path": "/skins/333/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/333/Icon.png",
    "new_path": "/skins/333/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/333/ChibiIcon.png",
    "new_path": "/skins/333/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/333/ShipyardIcon.png",
    "new_path": "/skins/333/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/333/PartyBanner.png",
    "new_path": "/skins/333/Fluttering_Fanfare/Banner.png"
  },
  {
    "old_path": "/images/skins/333/PartyIcon.png",
    "new_path": "/skins/333/Fluttering_Fanfare/Icon.png"
  },
  {
    "old_path": "/images/skins/333/PartyChibiIcon.png",
    "new_path": "/skins/333/Fluttering_Fanfare/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/333/PartyShipyardIcon.png",
    "new_path": "/skins/333/Fluttering_Fanfare/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/320/Banner.png",
    "new_path": "/skins/320/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/320/Icon.png",
    "new_path": "/skins/320/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/320/ChibiIcon.png",
    "new_path": "/skins/320/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/320/ShipyardIcon.png",
    "new_path": "/skins/320/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/320/WeddingBanner.png",
    "new_path": "/skins/320/Wedding/Banner.png"
  },
  {
    "old_path": "/images/skins/320/WeddingIcon.png",
    "new_path": "/skins/320/Wedding/Icon.png"
  },
  {
    "old_path": "/images/skins/320/WeddingChibiIcon.png",
    "new_path": "/skins/320/Wedding/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/320/WeddingShipyardIcon.png",
    "new_path": "/skins/320/Wedding/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/320/SchoolBanner.png",
    "new_path": "/skins/320/Style_of_the_Sakura_Capital/Banner.png"
  },
  {
    "old_path": "/images/skins/320/SchoolIcon.png",
    "new_path": "/skins/320/Style_of_the_Sakura_Capital/Icon.png"
  },
  {
    "old_path": "/images/skins/320/SchoolChibiIcon.png",
    "new_path": "/skins/320/Style_of_the_Sakura_Capital/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/320/SchoolShipyardIcon.png",
    "new_path": "/skins/320/Style_of_the_Sakura_Capital/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/320/New_YearBanner.png",
    "new_path": "/skins/320/BlossomViewing_Season/Banner.png"
  },
  {
    "old_path": "/images/skins/320/New_YearIcon.png",
    "new_path": "/skins/320/BlossomViewing_Season/Icon.png"
  },
  {
    "old_path": "/images/skins/320/New_YearChibiIcon.png",
    "new_path": "/skins/320/BlossomViewing_Season/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/320/New_YearShipyardIcon.png",
    "new_path": "/skins/320/BlossomViewing_Season/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/320/CasualBanner.png",
    "new_path": "/skins/320/Reverence_for_Rest_and_Relaxation/Banner.png"
  },
  {
    "old_path": "/images/skins/320/CasualIcon.png",
    "new_path": "/skins/320/Reverence_for_Rest_and_Relaxation/Icon.png"
  },
  {
    "old_path": "/images/skins/320/CasualChibiIcon.png",
    "new_path": "/skins/320/Reverence_for_Rest_and_Relaxation/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/320/CasualShipyardIcon.png",
    "new_path": "/skins/320/Reverence_for_Rest_and_Relaxation/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/280/Banner.png",
    "new_path": "/skins/280/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/280/Icon.png",
    "new_path": "/skins/280/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/280/ChibiIcon.png",
    "new_path": "/skins/280/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/280/ShipyardIcon.png",
    "new_path": "/skins/280/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/280/HalloweenBanner.png",
    "new_path": "/skins/280/Sweet_Zombie/Banner.png"
  },
  {
    "old_path": "/images/skins/280/HalloweenIcon.png",
    "new_path": "/skins/280/Sweet_Zombie/Icon.png"
  },
  {
    "old_path": "/images/skins/280/HalloweenChibiIcon.png",
    "new_path": "/skins/280/Sweet_Zombie/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/280/HalloweenShipyardIcon.png",
    "new_path": "/skins/280/Sweet_Zombie/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/189/Banner.png",
    "new_path": "/skins/189/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/189/Icon.png",
    "new_path": "/skins/189/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/189/ChibiIcon.png",
    "new_path": "/skins/189/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/189/ShipyardIcon.png",
    "new_path": "/skins/189/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/189/OriginalShipyardIcon.png",
    "new_path": "/skins/189/Original_Art/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Collab053/Banner.png",
    "new_path": "/skins/Collab053/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/Collab053/Icon.png",
    "new_path": "/skins/Collab053/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/Collab053/ChibiIcon.png",
    "new_path": "/skins/Collab053/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Collab053/ShipyardIcon.png",
    "new_path": "/skins/Collab053/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Collab053/MaidBanner.png",
    "new_path": "/skins/Collab053/Marine_Maid/Banner.png"
  },
  {
    "old_path": "/images/skins/Collab053/MaidIcon.png",
    "new_path": "/skins/Collab053/Marine_Maid/Icon.png"
  },
  {
    "old_path": "/images/skins/Collab053/MaidChibiIcon.png",
    "new_path": "/skins/Collab053/Marine_Maid/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Collab053/MaidShipyardIcon.png",
    "new_path": "/skins/Collab053/Marine_Maid/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/276/Banner.png",
    "new_path": "/skins/276/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/276/Icon.png",
    "new_path": "/skins/276/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/276/ChibiIcon.png",
    "new_path": "/skins/276/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/276/ShipyardIcon.png",
    "new_path": "/skins/276/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/364/Banner.png",
    "new_path": "/skins/364/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/364/Icon.png",
    "new_path": "/skins/364/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/364/ChibiIcon.png",
    "new_path": "/skins/364/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/364/ShipyardIcon.png",
    "new_path": "/skins/364/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/364/WeddingBanner.png",
    "new_path": "/skins/364/Wedding/Banner.png"
  },
  {
    "old_path": "/images/skins/364/WeddingIcon.png",
    "new_path": "/skins/364/Wedding/Icon.png"
  },
  {
    "old_path": "/images/skins/364/WeddingChibiIcon.png",
    "new_path": "/skins/364/Wedding/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/364/WeddingShipyardIcon.png",
    "new_path": "/skins/364/Wedding/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/364/SchoolBanner.png",
    "new_path": "/skins/364/Wild_Huntress_Schoolgirl/Banner.png"
  },
  {
    "old_path": "/images/skins/364/SchoolIcon.png",
    "new_path": "/skins/364/Wild_Huntress_Schoolgirl/Icon.png"
  },
  {
    "old_path": "/images/skins/364/SchoolChibiIcon.png",
    "new_path": "/skins/364/Wild_Huntress_Schoolgirl/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/364/SchoolShipyardIcon.png",
    "new_path": "/skins/364/Wild_Huntress_Schoolgirl/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/364/SportBanner.png",
    "new_path": "/skins/364/eXtreme_Games/Banner.png"
  },
  {
    "old_path": "/images/skins/364/SportIcon.png",
    "new_path": "/skins/364/eXtreme_Games/Icon.png"
  },
  {
    "old_path": "/images/skins/364/SportChibiIcon.png",
    "new_path": "/skins/364/eXtreme_Games/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/364/SportShipyardIcon.png",
    "new_path": "/skins/364/eXtreme_Games/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/364/ChristmasBanner.png",
    "new_path": "/skins/364/Holy_Night_Ride/Banner.png"
  },
  {
    "old_path": "/images/skins/364/ChristmasIcon.png",
    "new_path": "/skins/364/Holy_Night_Ride/Icon.png"
  },
  {
    "old_path": "/images/skins/364/ChristmasChibiIcon.png",
    "new_path": "/skins/364/Holy_Night_Ride/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/364/ChristmasShipyardIcon.png",
    "new_path": "/skins/364/Holy_Night_Ride/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/432/Banner.png",
    "new_path": "/skins/432/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/432/Icon.png",
    "new_path": "/skins/432/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/432/ChibiIcon.png",
    "new_path": "/skins/432/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/432/ShipyardIcon.png",
    "new_path": "/skins/432/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/432/PrisonBanner.png",
    "new_path": "/skins/432/Thunderous_Jailor/Banner.png"
  },
  {
    "old_path": "/images/skins/432/PrisonIcon.png",
    "new_path": "/skins/432/Thunderous_Jailor/Icon.png"
  },
  {
    "old_path": "/images/skins/432/PrisonChibiIcon.png",
    "new_path": "/skins/432/Thunderous_Jailor/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/432/PrisonShipyardIcon.png",
    "new_path": "/skins/432/Thunderous_Jailor/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/10064/Banner.png",
    "new_path": "/skins/10064/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/10064/Icon.png",
    "new_path": "/skins/10064/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/10064/ChibiIcon.png",
    "new_path": "/skins/10064/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/10064/ShipyardIcon.png",
    "new_path": "/skins/10064/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/10064/SummerBanner.png",
    "new_path": "/skins/10064/Golden_Photoshoot/Banner.png"
  },
  {
    "old_path": "/images/skins/10064/SummerIcon.png",
    "new_path": "/skins/10064/Golden_Photoshoot/Icon.png"
  },
  {
    "old_path": "/images/skins/10064/SummerChibiIcon.png",
    "new_path": "/skins/10064/Golden_Photoshoot/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/10064/SummerShipyardIcon.png",
    "new_path": "/skins/10064/Golden_Photoshoot/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/188/Banner.png",
    "new_path": "/skins/188/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/188/Icon.png",
    "new_path": "/skins/188/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/188/ChibiIcon.png",
    "new_path": "/skins/188/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/188/ShipyardIcon.png",
    "new_path": "/skins/188/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/188/OriginalShipyardIcon.png",
    "new_path": "/skins/188/Original_Art/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/188/KaiBanner.png",
    "new_path": "/skins/188/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/188/KaiIcon.png",
    "new_path": "/skins/188/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/188/KaiChibiIcon.png",
    "new_path": "/skins/188/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/188/KaiShipyardIcon.png",
    "new_path": "/skins/188/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Plan002/Banner.png",
    "new_path": "/skins/Plan002/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/Plan002/Icon.png",
    "new_path": "/skins/Plan002/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/Plan002/ChibiIcon.png",
    "new_path": "/skins/Plan002/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Plan002/ShipyardIcon.png",
    "new_path": "/skins/Plan002/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Plan002/PartyBanner.png",
    "new_path": "/skins/Plan002/White_Warrick/Banner.png"
  },
  {
    "old_path": "/images/skins/Plan002/PartyIcon.png",
    "new_path": "/skins/Plan002/White_Warrick/Icon.png"
  },
  {
    "old_path": "/images/skins/Plan002/PartyChibiIcon.png",
    "new_path": "/skins/Plan002/White_Warrick/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Plan002/PartyShipyardIcon.png",
    "new_path": "/skins/Plan002/White_Warrick/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Plan002/SpringBanner.png",
    "new_path": "/skins/Plan002/Black_Gerard/Banner.png"
  },
  {
    "old_path": "/images/skins/Plan002/SpringIcon.png",
    "new_path": "/skins/Plan002/Black_Gerard/Icon.png"
  },
  {
    "old_path": "/images/skins/Plan002/SpringChibiIcon.png",
    "new_path": "/skins/Plan002/Black_Gerard/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Plan002/SpringShipyardIcon.png",
    "new_path": "/skins/Plan002/Black_Gerard/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/10067/Banner.png",
    "new_path": "/skins/10067/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/10067/Icon.png",
    "new_path": "/skins/10067/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/10067/ChibiIcon.png",
    "new_path": "/skins/10067/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/10067/ShipyardIcon.png",
    "new_path": "/skins/10067/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/10067/SummerBanner.png",
    "new_path": "/skins/10067/The_Ace_of_Hearts/Banner.png"
  },
  {
    "old_path": "/images/skins/10067/SummerIcon.png",
    "new_path": "/skins/10067/The_Ace_of_Hearts/Icon.png"
  },
  {
    "old_path": "/images/skins/10067/SummerChibiIcon.png",
    "new_path": "/skins/10067/The_Ace_of_Hearts/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/10067/SummerShipyardIcon.png",
    "new_path": "/skins/10067/The_Ace_of_Hearts/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/329/Banner.png",
    "new_path": "/skins/329/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/329/Icon.png",
    "new_path": "/skins/329/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/329/ChibiIcon.png",
    "new_path": "/skins/329/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/329/ShipyardIcon.png",
    "new_path": "/skins/329/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/329/New_YearBanner.png",
    "new_path": "/skins/329/Flower_of_the_Snowy_Night/Banner.png"
  },
  {
    "old_path": "/images/skins/329/New_YearIcon.png",
    "new_path": "/skins/329/Flower_of_the_Snowy_Night/Icon.png"
  },
  {
    "old_path": "/images/skins/329/New_YearChibiIcon.png",
    "new_path": "/skins/329/Flower_of_the_Snowy_Night/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/329/New_YearShipyardIcon.png",
    "new_path": "/skins/329/Flower_of_the_Snowy_Night/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/329/PartyBanner.png",
    "new_path": "/skins/329/Persephones_Throne/Banner.png"
  },
  {
    "old_path": "/images/skins/329/PartyIcon.png",
    "new_path": "/skins/329/Persephones_Throne/Icon.png"
  },
  {
    "old_path": "/images/skins/329/PartyChibiIcon.png",
    "new_path": "/skins/329/Persephones_Throne/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/329/PartyShipyardIcon.png",
    "new_path": "/skins/329/Persephones_Throne/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/515/Banner.png",
    "new_path": "/skins/515/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/515/Icon.png",
    "new_path": "/skins/515/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/515/ChibiIcon.png",
    "new_path": "/skins/515/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/515/ShipyardIcon.png",
    "new_path": "/skins/515/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/515/BunnyBanner.png",
    "new_path": "/skins/515/Sleeping_Bunny/Banner.png"
  },
  {
    "old_path": "/images/skins/515/BunnyIcon.png",
    "new_path": "/skins/515/Sleeping_Bunny/Icon.png"
  },
  {
    "old_path": "/images/skins/515/BunnyChibiIcon.png",
    "new_path": "/skins/515/Sleeping_Bunny/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/515/BunnyShipyardIcon.png",
    "new_path": "/skins/515/Sleeping_Bunny/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/10087/Banner.png",
    "new_path": "/skins/10087/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/10087/Icon.png",
    "new_path": "/skins/10087/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/10087/ChibiIcon.png",
    "new_path": "/skins/10087/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/10087/ShipyardIcon.png",
    "new_path": "/skins/10087/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/10087/CasualBanner.png",
    "new_path": "/skins/10087/Golden_Promenade/Banner.png"
  },
  {
    "old_path": "/images/skins/10087/CasualIcon.png",
    "new_path": "/skins/10087/Golden_Promenade/Icon.png"
  },
  {
    "old_path": "/images/skins/10087/CasualChibiIcon.png",
    "new_path": "/skins/10087/Golden_Promenade/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/10087/CasualShipyardIcon.png",
    "new_path": "/skins/10087/Golden_Promenade/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/375/Banner.png",
    "new_path": "/skins/375/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/375/Icon.png",
    "new_path": "/skins/375/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/375/ChibiIcon.png",
    "new_path": "/skins/375/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/375/ShipyardIcon.png",
    "new_path": "/skins/375/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/375/SpringBanner.png",
    "new_path": "/skins/375/Eastern_Etiquette/Banner.png"
  },
  {
    "old_path": "/images/skins/375/SpringIcon.png",
    "new_path": "/skins/375/Eastern_Etiquette/Icon.png"
  },
  {
    "old_path": "/images/skins/375/SpringChibiIcon.png",
    "new_path": "/skins/375/Eastern_Etiquette/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/375/SpringShipyardIcon.png",
    "new_path": "/skins/375/Eastern_Etiquette/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Collab056/Banner.png",
    "new_path": "/skins/Collab056/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/Collab056/Icon.png",
    "new_path": "/skins/Collab056/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/Collab056/ChibiIcon.png",
    "new_path": "/skins/Collab056/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Collab056/ShipyardIcon.png",
    "new_path": "/skins/Collab056/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Collab056/MagicianBanner.png",
    "new_path": "/skins/Collab056/Virtual_Magician/Banner.png"
  },
  {
    "old_path": "/images/skins/Collab056/MagicianIcon.png",
    "new_path": "/skins/Collab056/Virtual_Magician/Icon.png"
  },
  {
    "old_path": "/images/skins/Collab056/MagicianChibiIcon.png",
    "new_path": "/skins/Collab056/Virtual_Magician/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Collab056/MagicianShipyardIcon.png",
    "new_path": "/skins/Collab056/Virtual_Magician/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/498/Banner.png",
    "new_path": "/skins/498/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/498/Icon.png",
    "new_path": "/skins/498/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/498/ChibiIcon.png",
    "new_path": "/skins/498/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/498/ShipyardIcon.png",
    "new_path": "/skins/498/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/498/CasualBanner.png",
    "new_path": "/skins/498/Sceneries_of_Pure_Snow/Banner.png"
  },
  {
    "old_path": "/images/skins/498/CasualIcon.png",
    "new_path": "/skins/498/Sceneries_of_Pure_Snow/Icon.png"
  },
  {
    "old_path": "/images/skins/498/CasualChibiIcon.png",
    "new_path": "/skins/498/Sceneries_of_Pure_Snow/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/498/CasualShipyardIcon.png",
    "new_path": "/skins/498/Sceneries_of_Pure_Snow/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/326/Banner.png",
    "new_path": "/skins/326/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/326/Icon.png",
    "new_path": "/skins/326/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/326/ChibiIcon.png",
    "new_path": "/skins/326/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/326/ShipyardIcon.png",
    "new_path": "/skins/326/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/213/Banner.png",
    "new_path": "/skins/213/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/213/Icon.png",
    "new_path": "/skins/213/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/213/ChibiIcon.png",
    "new_path": "/skins/213/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/213/ShipyardIcon.png",
    "new_path": "/skins/213/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/213/EventBanner.png",
    "new_path": "/skins/213/Warring_States_Warship/Banner.png"
  },
  {
    "old_path": "/images/skins/213/EventIcon.png",
    "new_path": "/skins/213/Warring_States_Warship/Icon.png"
  },
  {
    "old_path": "/images/skins/213/EventChibiIcon.png",
    "new_path": "/skins/213/Warring_States_Warship/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/213/EventShipyardIcon.png",
    "new_path": "/skins/213/Warring_States_Warship/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/271/Banner.png",
    "new_path": "/skins/271/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/271/Icon.png",
    "new_path": "/skins/271/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/271/ChibiIcon.png",
    "new_path": "/skins/271/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/271/ShipyardIcon.png",
    "new_path": "/skins/271/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/271/KaiBanner.png",
    "new_path": "/skins/271/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/271/KaiIcon.png",
    "new_path": "/skins/271/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/271/KaiChibiIcon.png",
    "new_path": "/skins/271/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/271/KaiShipyardIcon.png",
    "new_path": "/skins/271/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/271/ChristmasBanner.png",
    "new_path": "/skins/271/Mr_Reindeer_Depart/Banner.png"
  },
  {
    "old_path": "/images/skins/271/ChristmasIcon.png",
    "new_path": "/skins/271/Mr_Reindeer_Depart/Icon.png"
  },
  {
    "old_path": "/images/skins/271/ChristmasChibiIcon.png",
    "new_path": "/skins/271/Mr_Reindeer_Depart/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/271/ChristmasShipyardIcon.png",
    "new_path": "/skins/271/Mr_Reindeer_Depart/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/271/FestivalBanner.png",
    "new_path": "/skins/271/Candy_Festival/Banner.png"
  },
  {
    "old_path": "/images/skins/271/FestivalIcon.png",
    "new_path": "/skins/271/Candy_Festival/Icon.png"
  },
  {
    "old_path": "/images/skins/271/FestivalChibiIcon.png",
    "new_path": "/skins/271/Candy_Festival/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/271/FestivalShipyardIcon.png",
    "new_path": "/skins/271/Candy_Festival/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/271/SpringBanner.png",
    "new_path": "/skins/271/Spring_Festival_Sweets/Banner.png"
  },
  {
    "old_path": "/images/skins/271/SpringIcon.png",
    "new_path": "/skins/271/Spring_Festival_Sweets/Icon.png"
  },
  {
    "old_path": "/images/skins/271/SpringChibiIcon.png",
    "new_path": "/skins/271/Spring_Festival_Sweets/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/271/SpringShipyardIcon.png",
    "new_path": "/skins/271/Spring_Festival_Sweets/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/196/Banner.png",
    "new_path": "/skins/196/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/196/Icon.png",
    "new_path": "/skins/196/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/196/ChibiIcon.png",
    "new_path": "/skins/196/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/196/ShipyardIcon.png",
    "new_path": "/skins/196/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/197/Banner.png",
    "new_path": "/skins/197/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/197/Icon.png",
    "new_path": "/skins/197/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/197/ChibiIcon.png",
    "new_path": "/skins/197/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/197/ShipyardIcon.png",
    "new_path": "/skins/197/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/450/Banner.png",
    "new_path": "/skins/450/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/450/Icon.png",
    "new_path": "/skins/450/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/450/ChibiIcon.png",
    "new_path": "/skins/450/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/450/ShipyardIcon.png",
    "new_path": "/skins/450/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/450/MaidBanner.png",
    "new_path": "/skins/450/Long_Waves_of_Happiness/Banner.png"
  },
  {
    "old_path": "/images/skins/450/MaidIcon.png",
    "new_path": "/skins/450/Long_Waves_of_Happiness/Icon.png"
  },
  {
    "old_path": "/images/skins/450/MaidChibiIcon.png",
    "new_path": "/skins/450/Long_Waves_of_Happiness/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/450/MaidShipyardIcon.png",
    "new_path": "/skins/450/Long_Waves_of_Happiness/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/450/PartyBanner.png",
    "new_path": "/skins/450/LongAwaited_Warmth/Banner.png"
  },
  {
    "old_path": "/images/skins/450/PartyIcon.png",
    "new_path": "/skins/450/LongAwaited_Warmth/Icon.png"
  },
  {
    "old_path": "/images/skins/450/PartyChibiIcon.png",
    "new_path": "/skins/450/LongAwaited_Warmth/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/450/PartyShipyardIcon.png",
    "new_path": "/skins/450/LongAwaited_Warmth/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/450/SpringBanner.png",
    "new_path": "/skins/450/Nestling_Up_for_the_Long_Nights/Banner.png"
  },
  {
    "old_path": "/images/skins/450/SpringIcon.png",
    "new_path": "/skins/450/Nestling_Up_for_the_Long_Nights/Icon.png"
  },
  {
    "old_path": "/images/skins/450/SpringChibiIcon.png",
    "new_path": "/skins/450/Nestling_Up_for_the_Long_Nights/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/450/SpringShipyardIcon.png",
    "new_path": "/skins/450/Nestling_Up_for_the_Long_Nights/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/182/Banner.png",
    "new_path": "/skins/182/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/182/Icon.png",
    "new_path": "/skins/182/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/182/ChibiIcon.png",
    "new_path": "/skins/182/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/182/ShipyardIcon.png",
    "new_path": "/skins/182/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/182/SpringBanner.png",
    "new_path": "/skins/182/Spring_Breeze_Leisure/Banner.png"
  },
  {
    "old_path": "/images/skins/182/SpringIcon.png",
    "new_path": "/skins/182/Spring_Breeze_Leisure/Icon.png"
  },
  {
    "old_path": "/images/skins/182/SpringChibiIcon.png",
    "new_path": "/skins/182/Spring_Breeze_Leisure/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/182/SpringShipyardIcon.png",
    "new_path": "/skins/182/Spring_Breeze_Leisure/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/212/Banner.png",
    "new_path": "/skins/212/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/212/Icon.png",
    "new_path": "/skins/212/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/212/ChibiIcon.png",
    "new_path": "/skins/212/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/212/ShipyardIcon.png",
    "new_path": "/skins/212/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/212/OriginalShipyardIcon.png",
    "new_path": "/skins/212/Original_Art/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/212/WeddingIcon.png",
    "new_path": "/skins/212/Wedding/Icon.png"
  },
  {
    "old_path": "/images/skins/212/WeddingChibiIcon.png",
    "new_path": "/skins/212/Wedding/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/212/WeddingShipyardIcon.png",
    "new_path": "/skins/212/Wedding/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/212/SleepyBanner.png",
    "new_path": "/skins/212/Great_Foxs_Respite/Banner.png"
  },
  {
    "old_path": "/images/skins/212/SleepyIcon.png",
    "new_path": "/skins/212/Great_Foxs_Respite/Icon.png"
  },
  {
    "old_path": "/images/skins/212/SleepyChibiIcon.png",
    "new_path": "/skins/212/Great_Foxs_Respite/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/212/SleepyShipyardIcon.png",
    "new_path": "/skins/212/Great_Foxs_Respite/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/212/New_YearBanner.png",
    "new_path": "/skins/212/Guardian_Foxs_Shining_Furisode/Banner.png"
  },
  {
    "old_path": "/images/skins/212/New_YearIcon.png",
    "new_path": "/skins/212/Guardian_Foxs_Shining_Furisode/Icon.png"
  },
  {
    "old_path": "/images/skins/212/New_YearChibiIcon.png",
    "new_path": "/skins/212/Guardian_Foxs_Shining_Furisode/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/212/New_YearShipyardIcon.png",
    "new_path": "/skins/212/Guardian_Foxs_Shining_Furisode/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/212/CasualBanner.png",
    "new_path": "/skins/212/Guardian_Foxs_Vacation/Banner.png"
  },
  {
    "old_path": "/images/skins/212/CasualIcon.png",
    "new_path": "/skins/212/Guardian_Foxs_Vacation/Icon.png"
  },
  {
    "old_path": "/images/skins/212/CasualChibiIcon.png",
    "new_path": "/skins/212/Guardian_Foxs_Vacation/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/212/CasualShipyardIcon.png",
    "new_path": "/skins/212/Guardian_Foxs_Vacation/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/278/Banner.png",
    "new_path": "/skins/278/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/278/Icon.png",
    "new_path": "/skins/278/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/278/ChibiIcon.png",
    "new_path": "/skins/278/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/278/ShipyardIcon.png",
    "new_path": "/skins/278/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/278/MaidBanner.png",
    "new_path": "/skins/278/Dangerous_Kitty_Maid/Banner.png"
  },
  {
    "old_path": "/images/skins/278/MaidIcon.png",
    "new_path": "/skins/278/Dangerous_Kitty_Maid/Icon.png"
  },
  {
    "old_path": "/images/skins/278/MaidChibiIcon.png",
    "new_path": "/skins/278/Dangerous_Kitty_Maid/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/278/MaidShipyardIcon.png",
    "new_path": "/skins/278/Dangerous_Kitty_Maid/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/10065/Banner.png",
    "new_path": "/skins/10065/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/10065/Icon.png",
    "new_path": "/skins/10065/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/10065/ChibiIcon.png",
    "new_path": "/skins/10065/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/10065/ShipyardIcon.png",
    "new_path": "/skins/10065/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/10065/SummerBanner.png",
    "new_path": "/skins/10065/Blue_Skies_Good_Vibes/Banner.png"
  },
  {
    "old_path": "/images/skins/10065/SummerIcon.png",
    "new_path": "/skins/10065/Blue_Skies_Good_Vibes/Icon.png"
  },
  {
    "old_path": "/images/skins/10065/SummerChibiIcon.png",
    "new_path": "/skins/10065/Blue_Skies_Good_Vibes/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/10065/SummerShipyardIcon.png",
    "new_path": "/skins/10065/Blue_Skies_Good_Vibes/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/310/Banner.png",
    "new_path": "/skins/310/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/310/Icon.png",
    "new_path": "/skins/310/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/310/ChibiIcon.png",
    "new_path": "/skins/310/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/310/ShipyardIcon.png",
    "new_path": "/skins/310/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/310/SummerBanner.png",
    "new_path": "/skins/310/Foxy_Summer_Surfer/Banner.png"
  },
  {
    "old_path": "/images/skins/310/SummerIcon.png",
    "new_path": "/skins/310/Foxy_Summer_Surfer/Icon.png"
  },
  {
    "old_path": "/images/skins/310/SummerChibiIcon.png",
    "new_path": "/skins/310/Foxy_Summer_Surfer/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/310/SummerShipyardIcon.png",
    "new_path": "/skins/310/Foxy_Summer_Surfer/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Collab055/Banner.png",
    "new_path": "/skins/Collab055/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/Collab055/Icon.png",
    "new_path": "/skins/Collab055/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/Collab055/ChibiIcon.png",
    "new_path": "/skins/Collab055/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Collab055/ShipyardIcon.png",
    "new_path": "/skins/Collab055/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Collab055/SummerBanner.png",
    "new_path": "/skins/Collab055/Summertime_Nakiri/Banner.png"
  },
  {
    "old_path": "/images/skins/Collab055/SummerIcon.png",
    "new_path": "/skins/Collab055/Summertime_Nakiri/Icon.png"
  },
  {
    "old_path": "/images/skins/Collab055/SummerChibiIcon.png",
    "new_path": "/skins/Collab055/Summertime_Nakiri/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Collab055/SummerShipyardIcon.png",
    "new_path": "/skins/Collab055/Summertime_Nakiri/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/10084/Banner.png",
    "new_path": "/skins/10084/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/10084/Icon.png",
    "new_path": "/skins/10084/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/10084/ChibiIcon.png",
    "new_path": "/skins/10084/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/10084/ShipyardIcon.png",
    "new_path": "/skins/10084/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/10084/CasualBanner.png",
    "new_path": "/skins/10084/Miss_StreetWise/Banner.png"
  },
  {
    "old_path": "/images/skins/10084/CasualIcon.png",
    "new_path": "/skins/10084/Miss_StreetWise/Icon.png"
  },
  {
    "old_path": "/images/skins/10084/CasualChibiIcon.png",
    "new_path": "/skins/10084/Miss_StreetWise/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/10084/CasualShipyardIcon.png",
    "new_path": "/skins/10084/Miss_StreetWise/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Collab054/Banner.png",
    "new_path": "/skins/Collab054/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/Collab054/Icon.png",
    "new_path": "/skins/Collab054/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/Collab054/ChibiIcon.png",
    "new_path": "/skins/Collab054/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Collab054/ShipyardIcon.png",
    "new_path": "/skins/Collab054/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Collab054/SummerBanner.png",
    "new_path": "/skins/Collab054/Matsuris_Day_Off/Banner.png"
  },
  {
    "old_path": "/images/skins/Collab054/SummerIcon.png",
    "new_path": "/skins/Collab054/Matsuris_Day_Off/Icon.png"
  },
  {
    "old_path": "/images/skins/Collab054/SummerChibiIcon.png",
    "new_path": "/skins/Collab054/Matsuris_Day_Off/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Collab054/SummerShipyardIcon.png",
    "new_path": "/skins/Collab054/Matsuris_Day_Off/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/519/Banner.png",
    "new_path": "/skins/519/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/519/Icon.png",
    "new_path": "/skins/519/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/519/ChibiIcon.png",
    "new_path": "/skins/519/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/519/ShipyardIcon.png",
    "new_path": "/skins/519/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/519/BunnyBanner.png",
    "new_path": "/skins/519/Afternoon_Stretches/Banner.png"
  },
  {
    "old_path": "/images/skins/519/BunnyIcon.png",
    "new_path": "/skins/519/Afternoon_Stretches/Icon.png"
  },
  {
    "old_path": "/images/skins/519/BunnyChibiIcon.png",
    "new_path": "/skins/519/Afternoon_Stretches/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/519/BunnyShipyardIcon.png",
    "new_path": "/skins/519/Afternoon_Stretches/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Collab032/Banner.png",
    "new_path": "/skins/Collab032/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/Collab032/Icon.png",
    "new_path": "/skins/Collab032/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/Collab032/ChibiIcon.png",
    "new_path": "/skins/Collab032/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Collab032/ShipyardIcon.png",
    "new_path": "/skins/Collab032/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Collab032/CollabBanner.png",
    "new_path": "/skins/Collab032/Nekone_Utawarerumono/Banner.png"
  },
  {
    "old_path": "/images/skins/Collab032/CollabIcon.png",
    "new_path": "/skins/Collab032/Nekone_Utawarerumono/Icon.png"
  },
  {
    "old_path": "/images/skins/Collab032/CollabChibiIcon.png",
    "new_path": "/skins/Collab032/Nekone_Utawarerumono/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Collab032/CollabShipyardIcon.png",
    "new_path": "/skins/Collab032/Nekone_Utawarerumono/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/132/Banner.png",
    "new_path": "/skins/132/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/132/Icon.png",
    "new_path": "/skins/132/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/132/ChibiIcon.png",
    "new_path": "/skins/132/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/132/ShipyardIcon.png",
    "new_path": "/skins/132/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/132/HalloweenBanner.png",
    "new_path": "/skins/132/Luna_Witch/Banner.png"
  },
  {
    "old_path": "/images/skins/132/HalloweenIcon.png",
    "new_path": "/skins/132/Luna_Witch/Icon.png"
  },
  {
    "old_path": "/images/skins/132/HalloweenChibiIcon.png",
    "new_path": "/skins/132/Luna_Witch/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/132/HalloweenShipyardIcon.png",
    "new_path": "/skins/132/Luna_Witch/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Plan001/Banner.png",
    "new_path": "/skins/Plan001/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/Plan001/Icon.png",
    "new_path": "/skins/Plan001/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/Plan001/ChibiIcon.png",
    "new_path": "/skins/Plan001/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Plan001/ShipyardIcon.png",
    "new_path": "/skins/Plan001/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Plan001/ChristmasBanner.png",
    "new_path": "/skins/Plan001/Princess_of_the_Reindeers/Banner.png"
  },
  {
    "old_path": "/images/skins/Plan001/ChristmasIcon.png",
    "new_path": "/skins/Plan001/Princess_of_the_Reindeers/Icon.png"
  },
  {
    "old_path": "/images/skins/Plan001/ChristmasChibiIcon.png",
    "new_path": "/skins/Plan001/Princess_of_the_Reindeers/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Plan001/ChristmasShipyardIcon.png",
    "new_path": "/skins/Plan001/Princess_of_the_Reindeers/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Collab001/Banner.png",
    "new_path": "/skins/Collab001/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/Collab001/Icon.png",
    "new_path": "/skins/Collab001/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/Collab001/ChibiIcon.png",
    "new_path": "/skins/Collab001/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Collab001/ShipyardIcon.png",
    "new_path": "/skins/Collab001/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/052/Banner.png",
    "new_path": "/skins/052/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/052/Icon.png",
    "new_path": "/skins/052/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/052/ChibiIcon.png",
    "new_path": "/skins/052/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/052/ShipyardIcon.png",
    "new_path": "/skins/052/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/052/KaiBanner.png",
    "new_path": "/skins/052/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/052/KaiIcon.png",
    "new_path": "/skins/052/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/052/KaiChibiIcon.png",
    "new_path": "/skins/052/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/052/KaiShipyardIcon.png",
    "new_path": "/skins/052/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/068/Banner.png",
    "new_path": "/skins/068/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/068/Icon.png",
    "new_path": "/skins/068/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/068/ChibiIcon.png",
    "new_path": "/skins/068/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/068/ShipyardIcon.png",
    "new_path": "/skins/068/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/068/BunnyBanner.png",
    "new_path": "/skins/068/Exhilarating_Steps/Banner.png"
  },
  {
    "old_path": "/images/skins/068/BunnyIcon.png",
    "new_path": "/skins/068/Exhilarating_Steps/Icon.png"
  },
  {
    "old_path": "/images/skins/068/BunnyChibiIcon.png",
    "new_path": "/skins/068/Exhilarating_Steps/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/068/BunnyShipyardIcon.png",
    "new_path": "/skins/068/Exhilarating_Steps/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/521/Banner.png",
    "new_path": "/skins/521/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/521/Icon.png",
    "new_path": "/skins/521/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/521/ChibiIcon.png",
    "new_path": "/skins/521/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/521/ShipyardIcon.png",
    "new_path": "/skins/521/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/521/BunnyBanner.png",
    "new_path": "/skins/521/Evening_Agricole/Banner.png"
  },
  {
    "old_path": "/images/skins/521/BunnyIcon.png",
    "new_path": "/skins/521/Evening_Agricole/Icon.png"
  },
  {
    "old_path": "/images/skins/521/BunnyChibiIcon.png",
    "new_path": "/skins/521/Evening_Agricole/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/521/BunnyShipyardIcon.png",
    "new_path": "/skins/521/Evening_Agricole/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/361/Banner.png",
    "new_path": "/skins/361/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/361/Icon.png",
    "new_path": "/skins/361/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/361/ChibiIcon.png",
    "new_path": "/skins/361/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/361/ShipyardIcon.png",
    "new_path": "/skins/361/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/361/KaiBanner.png",
    "new_path": "/skins/361/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/361/KaiIcon.png",
    "new_path": "/skins/361/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/361/KaiChibiIcon.png",
    "new_path": "/skins/361/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/361/KaiShipyardIcon.png",
    "new_path": "/skins/361/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/361/FlowerBanner.png",
    "new_path": "/skins/361/Hibiscus_Garments/Banner.png"
  },
  {
    "old_path": "/images/skins/361/FlowerIcon.png",
    "new_path": "/skins/361/Hibiscus_Garments/Icon.png"
  },
  {
    "old_path": "/images/skins/361/FlowerChibiIcon.png",
    "new_path": "/skins/361/Hibiscus_Garments/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/361/FlowerShipyardIcon.png",
    "new_path": "/skins/361/Hibiscus_Garments/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/301/Banner.png",
    "new_path": "/skins/301/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/301/Icon.png",
    "new_path": "/skins/301/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/301/ChibiIcon.png",
    "new_path": "/skins/301/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/301/ShipyardIcon.png",
    "new_path": "/skins/301/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/301/KaiBanner.png",
    "new_path": "/skins/301/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/301/KaiIcon.png",
    "new_path": "/skins/301/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/301/KaiChibiIcon.png",
    "new_path": "/skins/301/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/301/KaiShipyardIcon.png",
    "new_path": "/skins/301/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/301/NurseIcon.png",
    "new_path": "/skins/301/Nurse_Nicholas/Icon.png"
  },
  {
    "old_path": "/images/skins/301/NurseChibiIcon.png",
    "new_path": "/skins/301/Nurse_Nicholas/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/301/NurseShipyardIcon.png",
    "new_path": "/skins/301/Nurse_Nicholas/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/301/ChristmasBanner.png",
    "new_path": "/skins/301/Surprise/Banner.png"
  },
  {
    "old_path": "/images/skins/301/ChristmasIcon.png",
    "new_path": "/skins/301/Surprise/Icon.png"
  },
  {
    "old_path": "/images/skins/301/ChristmasChibiIcon.png",
    "new_path": "/skins/301/Surprise/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/301/ChristmasShipyardIcon.png",
    "new_path": "/skins/301/Surprise/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/301/SummerBanner.png",
    "new_path": "/skins/301/Summer_Cleaning_Volunteer/Banner.png"
  },
  {
    "old_path": "/images/skins/301/SummerIcon.png",
    "new_path": "/skins/301/Summer_Cleaning_Volunteer/Icon.png"
  },
  {
    "old_path": "/images/skins/301/SummerChibiIcon.png",
    "new_path": "/skins/301/Summer_Cleaning_Volunteer/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/301/SummerShipyardIcon.png",
    "new_path": "/skins/301/Summer_Cleaning_Volunteer/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/301/SchoolBanner.png",
    "new_path": "/skins/301/AfterSchool_Promise/Banner.png"
  },
  {
    "old_path": "/images/skins/301/SchoolIcon.png",
    "new_path": "/skins/301/AfterSchool_Promise/Icon.png"
  },
  {
    "old_path": "/images/skins/301/SchoolChibiIcon.png",
    "new_path": "/skins/301/AfterSchool_Promise/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/301/SchoolShipyardIcon.png",
    "new_path": "/skins/301/AfterSchool_Promise/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/506/Banner.png",
    "new_path": "/skins/506/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/506/Icon.png",
    "new_path": "/skins/506/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/506/ChibiIcon.png",
    "new_path": "/skins/506/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/506/ShipyardIcon.png",
    "new_path": "/skins/506/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/506/SummerBanner.png",
    "new_path": "/skins/506/To_a_Smashing_Voyage/Banner.png"
  },
  {
    "old_path": "/images/skins/506/SummerIcon.png",
    "new_path": "/skins/506/To_a_Smashing_Voyage/Icon.png"
  },
  {
    "old_path": "/images/skins/506/SummerChibiIcon.png",
    "new_path": "/skins/506/To_a_Smashing_Voyage/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/506/SummerShipyardIcon.png",
    "new_path": "/skins/506/To_a_Smashing_Voyage/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/295/Banner.png",
    "new_path": "/skins/295/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/295/Icon.png",
    "new_path": "/skins/295/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/295/ChibiIcon.png",
    "new_path": "/skins/295/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/295/ShipyardIcon.png",
    "new_path": "/skins/295/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/258/Banner.png",
    "new_path": "/skins/258/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/258/Icon.png",
    "new_path": "/skins/258/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/258/ChibiIcon.png",
    "new_path": "/skins/258/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/258/ShipyardIcon.png",
    "new_path": "/skins/258/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/258/KaiBanner.png",
    "new_path": "/skins/258/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/258/KaiIcon.png",
    "new_path": "/skins/258/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/258/KaiChibiIcon.png",
    "new_path": "/skins/258/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/258/KaiShipyardIcon.png",
    "new_path": "/skins/258/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/258/SummerBanner.png",
    "new_path": "/skins/258/Summer_Hunger/Banner.png"
  },
  {
    "old_path": "/images/skins/258/SummerIcon.png",
    "new_path": "/skins/258/Summer_Hunger/Icon.png"
  },
  {
    "old_path": "/images/skins/258/SummerChibiIcon.png",
    "new_path": "/skins/258/Summer_Hunger/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/258/SummerShipyardIcon.png",
    "new_path": "/skins/258/Summer_Hunger/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/258/FestivalBanner.png",
    "new_path": "/skins/258/Moon_Palace_Rabbit/Banner.png"
  },
  {
    "old_path": "/images/skins/258/FestivalIcon.png",
    "new_path": "/skins/258/Moon_Palace_Rabbit/Icon.png"
  },
  {
    "old_path": "/images/skins/258/FestivalChibiIcon.png",
    "new_path": "/skins/258/Moon_Palace_Rabbit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/258/FestivalShipyardIcon.png",
    "new_path": "/skins/258/Moon_Palace_Rabbit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/258/IdolBanner.png",
    "new_path": "/skins/258/Dragon_Sisters_N/Banner.png"
  },
  {
    "old_path": "/images/skins/258/IdolIcon.png",
    "new_path": "/skins/258/Dragon_Sisters_N/Icon.png"
  },
  {
    "old_path": "/images/skins/258/IdolChibiIcon.png",
    "new_path": "/skins/258/Dragon_Sisters_N/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/258/IdolShipyardIcon.png",
    "new_path": "/skins/258/Dragon_Sisters_N/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/258/SpringBanner.png",
    "new_path": "/skins/258/Springtime_Sojourn/Banner.png"
  },
  {
    "old_path": "/images/skins/258/SpringIcon.png",
    "new_path": "/skins/258/Springtime_Sojourn/Icon.png"
  },
  {
    "old_path": "/images/skins/258/SpringChibiIcon.png",
    "new_path": "/skins/258/Springtime_Sojourn/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/258/SpringShipyardIcon.png",
    "new_path": "/skins/258/Springtime_Sojourn/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/258/PartyBanner.png",
    "new_path": "/skins/258/Gorgeous_Violet/Banner.png"
  },
  {
    "old_path": "/images/skins/258/PartyIcon.png",
    "new_path": "/skins/258/Gorgeous_Violet/Icon.png"
  },
  {
    "old_path": "/images/skins/258/PartyChibiIcon.png",
    "new_path": "/skins/258/Gorgeous_Violet/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/258/PartyShipyardIcon.png",
    "new_path": "/skins/258/Gorgeous_Violet/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/258/CasualBanner.png",
    "new_path": "/skins/258/Da_Baos_Friend/Banner.png"
  },
  {
    "old_path": "/images/skins/258/CasualIcon.png",
    "new_path": "/skins/258/Da_Baos_Friend/Icon.png"
  },
  {
    "old_path": "/images/skins/258/CasualChibiIcon.png",
    "new_path": "/skins/258/Da_Baos_Friend/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/258/CasualShipyardIcon.png",
    "new_path": "/skins/258/Da_Baos_Friend/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Collab002/Banner.png",
    "new_path": "/skins/Collab002/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/Collab002/Icon.png",
    "new_path": "/skins/Collab002/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/Collab002/ChibiIcon.png",
    "new_path": "/skins/Collab002/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Collab002/ShipyardIcon.png",
    "new_path": "/skins/Collab002/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/123/Banner.png",
    "new_path": "/skins/123/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/123/Icon.png",
    "new_path": "/skins/123/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/123/ChibiIcon.png",
    "new_path": "/skins/123/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/123/ShipyardIcon.png",
    "new_path": "/skins/123/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/063/Banner.png",
    "new_path": "/skins/063/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/063/Icon.png",
    "new_path": "/skins/063/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/063/ChibiIcon.png",
    "new_path": "/skins/063/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/063/ShipyardIcon.png",
    "new_path": "/skins/063/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/063/BunnyBanner.png",
    "new_path": "/skins/063/The_Hearts_Desire/Banner.png"
  },
  {
    "old_path": "/images/skins/063/BunnyIcon.png",
    "new_path": "/skins/063/The_Hearts_Desire/Icon.png"
  },
  {
    "old_path": "/images/skins/063/BunnyChibiIcon.png",
    "new_path": "/skins/063/The_Hearts_Desire/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/063/BunnyShipyardIcon.png",
    "new_path": "/skins/063/The_Hearts_Desire/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/041/Banner.png",
    "new_path": "/skins/041/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/041/Icon.png",
    "new_path": "/skins/041/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/041/ChibiIcon.png",
    "new_path": "/skins/041/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/041/ShipyardIcon.png",
    "new_path": "/skins/041/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/322/Banner.png",
    "new_path": "/skins/322/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/322/Icon.png",
    "new_path": "/skins/322/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/322/ChibiIcon.png",
    "new_path": "/skins/322/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/322/ShipyardIcon.png",
    "new_path": "/skins/322/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/322/WeddingBanner.png",
    "new_path": "/skins/322/Wedding/Banner.png"
  },
  {
    "old_path": "/images/skins/322/WeddingIcon.png",
    "new_path": "/skins/322/Wedding/Icon.png"
  },
  {
    "old_path": "/images/skins/322/WeddingChibiIcon.png",
    "new_path": "/skins/322/Wedding/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/322/WeddingShipyardIcon.png",
    "new_path": "/skins/322/Wedding/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/322/New_YearBanner.png",
    "new_path": "/skins/322/Uncharted_Festival_Grounds/Banner.png"
  },
  {
    "old_path": "/images/skins/322/New_YearIcon.png",
    "new_path": "/skins/322/Uncharted_Festival_Grounds/Icon.png"
  },
  {
    "old_path": "/images/skins/322/New_YearChibiIcon.png",
    "new_path": "/skins/322/Uncharted_Festival_Grounds/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/322/New_YearShipyardIcon.png",
    "new_path": "/skins/322/Uncharted_Festival_Grounds/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/322/PartyBanner.png",
    "new_path": "/skins/322/Xanadus_Eventide/Banner.png"
  },
  {
    "old_path": "/images/skins/322/PartyIcon.png",
    "new_path": "/skins/322/Xanadus_Eventide/Icon.png"
  },
  {
    "old_path": "/images/skins/322/PartyChibiIcon.png",
    "new_path": "/skins/322/Xanadus_Eventide/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/322/PartyShipyardIcon.png",
    "new_path": "/skins/322/Xanadus_Eventide/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/322/SpringBanner.png",
    "new_path": "/skins/322/Fragrance_of_the_Eastern_Snow/Banner.png"
  },
  {
    "old_path": "/images/skins/322/SpringIcon.png",
    "new_path": "/skins/322/Fragrance_of_the_Eastern_Snow/Icon.png"
  },
  {
    "old_path": "/images/skins/322/SpringChibiIcon.png",
    "new_path": "/skins/322/Fragrance_of_the_Eastern_Snow/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/322/SpringShipyardIcon.png",
    "new_path": "/skins/322/Fragrance_of_the_Eastern_Snow/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/322/CasualBanner.png",
    "new_path": "/skins/322/Cozy_Enclave/Banner.png"
  },
  {
    "old_path": "/images/skins/322/CasualIcon.png",
    "new_path": "/skins/322/Cozy_Enclave/Icon.png"
  },
  {
    "old_path": "/images/skins/322/CasualChibiIcon.png",
    "new_path": "/skins/322/Cozy_Enclave/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/322/CasualShipyardIcon.png",
    "new_path": "/skins/322/Cozy_Enclave/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/322/MaidBanner.png",
    "new_path": "/skins/322/Hold_the_Ice/Banner.png"
  },
  {
    "old_path": "/images/skins/322/MaidIcon.png",
    "new_path": "/skins/322/Hold_the_Ice/Icon.png"
  },
  {
    "old_path": "/images/skins/322/MaidChibiIcon.png",
    "new_path": "/skins/322/Hold_the_Ice/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/322/MaidShipyardIcon.png",
    "new_path": "/skins/322/Hold_the_Ice/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/170/Banner.png",
    "new_path": "/skins/170/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/170/Icon.png",
    "new_path": "/skins/170/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/170/ChibiIcon.png",
    "new_path": "/skins/170/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/170/ShipyardIcon.png",
    "new_path": "/skins/170/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/10066/Banner.png",
    "new_path": "/skins/10066/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/10066/Icon.png",
    "new_path": "/skins/10066/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/10066/ChibiIcon.png",
    "new_path": "/skins/10066/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/10066/ShipyardIcon.png",
    "new_path": "/skins/10066/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/10066/SummerBanner.png",
    "new_path": "/skins/10066/ScarletTinged_Hot_Spring_Vacation/Banner.png"
  },
  {
    "old_path": "/images/skins/10066/SummerIcon.png",
    "new_path": "/skins/10066/ScarletTinged_Hot_Spring_Vacation/Icon.png"
  },
  {
    "old_path": "/images/skins/10066/SummerChibiIcon.png",
    "new_path": "/skins/10066/ScarletTinged_Hot_Spring_Vacation/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/10066/SummerShipyardIcon.png",
    "new_path": "/skins/10066/ScarletTinged_Hot_Spring_Vacation/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/486/Banner.png",
    "new_path": "/skins/486/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/486/Icon.png",
    "new_path": "/skins/486/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/486/ChibiIcon.png",
    "new_path": "/skins/486/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/486/ShipyardIcon.png",
    "new_path": "/skins/486/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/486/New_YearBanner.png",
    "new_path": "/skins/486/Spring_Wanderer/Banner.png"
  },
  {
    "old_path": "/images/skins/486/New_YearIcon.png",
    "new_path": "/skins/486/Spring_Wanderer/Icon.png"
  },
  {
    "old_path": "/images/skins/486/New_YearChibiIcon.png",
    "new_path": "/skins/486/Spring_Wanderer/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/486/New_YearShipyardIcon.png",
    "new_path": "/skins/486/Spring_Wanderer/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Plan016/Banner.png",
    "new_path": "/skins/Plan016/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/Plan016/Icon.png",
    "new_path": "/skins/Plan016/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/Plan016/ChibiIcon.png",
    "new_path": "/skins/Plan016/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Plan016/ShipyardIcon.png",
    "new_path": "/skins/Plan016/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Plan016/New_YearBanner.png",
    "new_path": "/skins/Plan016/Black_Strokes_upon_Blank_Snow/Banner.png"
  },
  {
    "old_path": "/images/skins/Plan016/New_YearIcon.png",
    "new_path": "/skins/Plan016/Black_Strokes_upon_Blank_Snow/Icon.png"
  },
  {
    "old_path": "/images/skins/Plan016/New_YearChibiIcon.png",
    "new_path": "/skins/Plan016/Black_Strokes_upon_Blank_Snow/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Plan016/New_YearShipyardIcon.png",
    "new_path": "/skins/Plan016/Black_Strokes_upon_Blank_Snow/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/507/Banner.png",
    "new_path": "/skins/507/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/507/Icon.png",
    "new_path": "/skins/507/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/507/ChibiIcon.png",
    "new_path": "/skins/507/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/507/ShipyardIcon.png",
    "new_path": "/skins/507/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/507/SummerBanner.png",
    "new_path": "/skins/507/Summer_Dedication/Banner.png"
  },
  {
    "old_path": "/images/skins/507/SummerIcon.png",
    "new_path": "/skins/507/Summer_Dedication/Icon.png"
  },
  {
    "old_path": "/images/skins/507/SummerChibiIcon.png",
    "new_path": "/skins/507/Summer_Dedication/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/507/SummerShipyardIcon.png",
    "new_path": "/skins/507/Summer_Dedication/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/507/SpringBanner.png",
    "new_path": "/skins/507/Jet_Ink_Silver_Quills/Banner.png"
  },
  {
    "old_path": "/images/skins/507/SpringIcon.png",
    "new_path": "/skins/507/Jet_Ink_Silver_Quills/Icon.png"
  },
  {
    "old_path": "/images/skins/507/SpringChibiIcon.png",
    "new_path": "/skins/507/Jet_Ink_Silver_Quills/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/507/SpringShipyardIcon.png",
    "new_path": "/skins/507/Jet_Ink_Silver_Quills/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/053/Banner.png",
    "new_path": "/skins/053/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/053/Icon.png",
    "new_path": "/skins/053/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/053/ChibiIcon.png",
    "new_path": "/skins/053/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/053/ShipyardIcon.png",
    "new_path": "/skins/053/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/053/KaiBanner.png",
    "new_path": "/skins/053/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/053/KaiIcon.png",
    "new_path": "/skins/053/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/053/KaiChibiIcon.png",
    "new_path": "/skins/053/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/053/KaiShipyardIcon.png",
    "new_path": "/skins/053/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/029/Banner.png",
    "new_path": "/skins/029/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/029/Icon.png",
    "new_path": "/skins/029/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/029/ChibiIcon.png",
    "new_path": "/skins/029/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/029/ShipyardIcon.png",
    "new_path": "/skins/029/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/332/Banner.png",
    "new_path": "/skins/332/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/332/Icon.png",
    "new_path": "/skins/332/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/332/ChibiIcon.png",
    "new_path": "/skins/332/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/332/ShipyardIcon.png",
    "new_path": "/skins/332/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/332/ChristmasBanner.png",
    "new_path": "/skins/332/The_Reindeers_Present/Banner.png"
  },
  {
    "old_path": "/images/skins/332/ChristmasIcon.png",
    "new_path": "/skins/332/The_Reindeers_Present/Icon.png"
  },
  {
    "old_path": "/images/skins/332/ChristmasChibiIcon.png",
    "new_path": "/skins/332/The_Reindeers_Present/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/332/ChristmasShipyardIcon.png",
    "new_path": "/skins/332/The_Reindeers_Present/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/332/PartyBanner.png",
    "new_path": "/skins/332/Woozy_Party/Banner.png"
  },
  {
    "old_path": "/images/skins/332/PartyIcon.png",
    "new_path": "/skins/332/Woozy_Party/Icon.png"
  },
  {
    "old_path": "/images/skins/332/PartyChibiIcon.png",
    "new_path": "/skins/332/Woozy_Party/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/332/PartyShipyardIcon.png",
    "new_path": "/skins/332/Woozy_Party/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/332/SpringBanner.png",
    "new_path": "/skins/332/Bringer_of_Fortunes/Banner.png"
  },
  {
    "old_path": "/images/skins/332/SpringIcon.png",
    "new_path": "/skins/332/Bringer_of_Fortunes/Icon.png"
  },
  {
    "old_path": "/images/skins/332/SpringChibiIcon.png",
    "new_path": "/skins/332/Bringer_of_Fortunes/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/332/SpringShipyardIcon.png",
    "new_path": "/skins/332/Bringer_of_Fortunes/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/178/Banner.png",
    "new_path": "/skins/178/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/178/Icon.png",
    "new_path": "/skins/178/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/178/ChibiIcon.png",
    "new_path": "/skins/178/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/178/ShipyardIcon.png",
    "new_path": "/skins/178/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/434/Banner.png",
    "new_path": "/skins/434/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/434/Icon.png",
    "new_path": "/skins/434/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/434/ChibiIcon.png",
    "new_path": "/skins/434/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/434/ShipyardIcon.png",
    "new_path": "/skins/434/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/434/KaiBanner.png",
    "new_path": "/skins/434/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/434/KaiIcon.png",
    "new_path": "/skins/434/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/434/KaiChibiIcon.png",
    "new_path": "/skins/434/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/434/KaiShipyardIcon.png",
    "new_path": "/skins/434/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/434/PrisonBanner.png",
    "new_path": "/skins/434/Caged_Minx/Banner.png"
  },
  {
    "old_path": "/images/skins/434/PrisonIcon.png",
    "new_path": "/skins/434/Caged_Minx/Icon.png"
  },
  {
    "old_path": "/images/skins/434/PrisonChibiIcon.png",
    "new_path": "/skins/434/Caged_Minx/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/434/PrisonShipyardIcon.png",
    "new_path": "/skins/434/Caged_Minx/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/434/CasualBanner.png",
    "new_path": "/skins/434/Sweet_Cherry_Memories/Banner.png"
  },
  {
    "old_path": "/images/skins/434/CasualIcon.png",
    "new_path": "/skins/434/Sweet_Cherry_Memories/Icon.png"
  },
  {
    "old_path": "/images/skins/434/CasualChibiIcon.png",
    "new_path": "/skins/434/Sweet_Cherry_Memories/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/434/CasualShipyardIcon.png",
    "new_path": "/skins/434/Sweet_Cherry_Memories/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/495/Banner.png",
    "new_path": "/skins/495/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/495/Icon.png",
    "new_path": "/skins/495/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/495/ChibiIcon.png",
    "new_path": "/skins/495/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/495/ShipyardIcon.png",
    "new_path": "/skins/495/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/495/SpringBanner.png",
    "new_path": "/skins/495/RubyRed_Boudoir/Banner.png"
  },
  {
    "old_path": "/images/skins/495/SpringIcon.png",
    "new_path": "/skins/495/RubyRed_Boudoir/Icon.png"
  },
  {
    "old_path": "/images/skins/495/SpringChibiIcon.png",
    "new_path": "/skins/495/RubyRed_Boudoir/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/495/SpringShipyardIcon.png",
    "new_path": "/skins/495/RubyRed_Boudoir/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/495/MaidBanner.png",
    "new_path": "/skins/495/Salty_Maid/Banner.png"
  },
  {
    "old_path": "/images/skins/495/MaidIcon.png",
    "new_path": "/skins/495/Salty_Maid/Icon.png"
  },
  {
    "old_path": "/images/skins/495/MaidChibiIcon.png",
    "new_path": "/skins/495/Salty_Maid/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/495/MaidShipyardIcon.png",
    "new_path": "/skins/495/Salty_Maid/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/054/Banner.png",
    "new_path": "/skins/054/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/054/Icon.png",
    "new_path": "/skins/054/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/054/ChibiIcon.png",
    "new_path": "/skins/054/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/054/ShipyardIcon.png",
    "new_path": "/skins/054/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/054/SpringBanner.png",
    "new_path": "/skins/054/The_Keystone_General/Banner.png"
  },
  {
    "old_path": "/images/skins/054/SpringIcon.png",
    "new_path": "/skins/054/The_Keystone_General/Icon.png"
  },
  {
    "old_path": "/images/skins/054/SpringChibiIcon.png",
    "new_path": "/skins/054/The_Keystone_General/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/054/SpringShipyardIcon.png",
    "new_path": "/skins/054/The_Keystone_General/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/039/Banner.png",
    "new_path": "/skins/039/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/039/Icon.png",
    "new_path": "/skins/039/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/039/ChibiIcon.png",
    "new_path": "/skins/039/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/039/ShipyardIcon.png",
    "new_path": "/skins/039/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/462/Banner.png",
    "new_path": "/skins/462/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/462/Icon.png",
    "new_path": "/skins/462/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/462/ChibiIcon.png",
    "new_path": "/skins/462/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/462/ShipyardIcon.png",
    "new_path": "/skins/462/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/462/HospitalBanner.png",
    "new_path": "/skins/462/Unfamiliar_Duties/Banner.png"
  },
  {
    "old_path": "/images/skins/462/HospitalIcon.png",
    "new_path": "/skins/462/Unfamiliar_Duties/Icon.png"
  },
  {
    "old_path": "/images/skins/462/HospitalChibiIcon.png",
    "new_path": "/skins/462/Unfamiliar_Duties/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/462/HospitalShipyardIcon.png",
    "new_path": "/skins/462/Unfamiliar_Duties/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/482/Banner.png",
    "new_path": "/skins/482/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/482/Icon.png",
    "new_path": "/skins/482/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/482/ChibiIcon.png",
    "new_path": "/skins/482/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/482/ShipyardIcon.png",
    "new_path": "/skins/482/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/482/New_YearBanner.png",
    "new_path": "/skins/482/Chronoss_Kalendae/Banner.png"
  },
  {
    "old_path": "/images/skins/482/New_YearIcon.png",
    "new_path": "/skins/482/Chronoss_Kalendae/Icon.png"
  },
  {
    "old_path": "/images/skins/482/New_YearChibiIcon.png",
    "new_path": "/skins/482/Chronoss_Kalendae/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/482/New_YearShipyardIcon.png",
    "new_path": "/skins/482/Chronoss_Kalendae/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/482/PartyBanner.png",
    "new_path": "/skins/482/A_Moment_Frozen_in_Pure_White/Banner.png"
  },
  {
    "old_path": "/images/skins/482/PartyIcon.png",
    "new_path": "/skins/482/A_Moment_Frozen_in_Pure_White/Icon.png"
  },
  {
    "old_path": "/images/skins/482/PartyChibiIcon.png",
    "new_path": "/skins/482/A_Moment_Frozen_in_Pure_White/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/482/PartyShipyardIcon.png",
    "new_path": "/skins/482/A_Moment_Frozen_in_Pure_White/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/032/Banner.png",
    "new_path": "/skins/032/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/032/Icon.png",
    "new_path": "/skins/032/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/032/ChibiIcon.png",
    "new_path": "/skins/032/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/032/ShipyardIcon.png",
    "new_path": "/skins/032/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/259/Banner.png",
    "new_path": "/skins/259/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/259/Icon.png",
    "new_path": "/skins/259/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/259/ChibiIcon.png",
    "new_path": "/skins/259/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/259/ShipyardIcon.png",
    "new_path": "/skins/259/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/259/KaiBanner.png",
    "new_path": "/skins/259/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/259/KaiIcon.png",
    "new_path": "/skins/259/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/259/KaiChibiIcon.png",
    "new_path": "/skins/259/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/259/KaiShipyardIcon.png",
    "new_path": "/skins/259/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/259/SummerBanner.png",
    "new_path": "/skins/259/Summer_Vacation/Banner.png"
  },
  {
    "old_path": "/images/skins/259/SummerIcon.png",
    "new_path": "/skins/259/Summer_Vacation/Icon.png"
  },
  {
    "old_path": "/images/skins/259/SummerChibiIcon.png",
    "new_path": "/skins/259/Summer_Vacation/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/259/SummerShipyardIcon.png",
    "new_path": "/skins/259/Summer_Vacation/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/259/FestivalBanner.png",
    "new_path": "/skins/259/Osmanthus_Moon_Rabbit/Banner.png"
  },
  {
    "old_path": "/images/skins/259/FestivalIcon.png",
    "new_path": "/skins/259/Osmanthus_Moon_Rabbit/Icon.png"
  },
  {
    "old_path": "/images/skins/259/FestivalChibiIcon.png",
    "new_path": "/skins/259/Osmanthus_Moon_Rabbit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/259/FestivalShipyardIcon.png",
    "new_path": "/skins/259/Osmanthus_Moon_Rabbit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/259/IdolBanner.png",
    "new_path": "/skins/259/Dragon_Sisters_P/Banner.png"
  },
  {
    "old_path": "/images/skins/259/IdolIcon.png",
    "new_path": "/skins/259/Dragon_Sisters_P/Icon.png"
  },
  {
    "old_path": "/images/skins/259/IdolChibiIcon.png",
    "new_path": "/skins/259/Dragon_Sisters_P/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/259/IdolShipyardIcon.png",
    "new_path": "/skins/259/Dragon_Sisters_P/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/259/SpringBanner.png",
    "new_path": "/skins/259/Great_Gourmet_Expedition/Banner.png"
  },
  {
    "old_path": "/images/skins/259/SpringIcon.png",
    "new_path": "/skins/259/Great_Gourmet_Expedition/Icon.png"
  },
  {
    "old_path": "/images/skins/259/SpringChibiIcon.png",
    "new_path": "/skins/259/Great_Gourmet_Expedition/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/259/SpringShipyardIcon.png",
    "new_path": "/skins/259/Great_Gourmet_Expedition/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/259/PartyBanner.png",
    "new_path": "/skins/259/Delicious_Crimson/Banner.png"
  },
  {
    "old_path": "/images/skins/259/PartyIcon.png",
    "new_path": "/skins/259/Delicious_Crimson/Icon.png"
  },
  {
    "old_path": "/images/skins/259/PartyChibiIcon.png",
    "new_path": "/skins/259/Delicious_Crimson/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/259/PartyShipyardIcon.png",
    "new_path": "/skins/259/Delicious_Crimson/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/259/CasualBanner.png",
    "new_path": "/skins/259/Baobaos_Buddy/Banner.png"
  },
  {
    "old_path": "/images/skins/259/CasualIcon.png",
    "new_path": "/skins/259/Baobaos_Buddy/Icon.png"
  },
  {
    "old_path": "/images/skins/259/CasualChibiIcon.png",
    "new_path": "/skins/259/Baobaos_Buddy/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/259/CasualShipyardIcon.png",
    "new_path": "/skins/259/Baobaos_Buddy/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/489/Banner.png",
    "new_path": "/skins/489/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/489/Icon.png",
    "new_path": "/skins/489/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/489/ChibiIcon.png",
    "new_path": "/skins/489/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/489/ShipyardIcon.png",
    "new_path": "/skins/489/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/489/SummerBanner.png",
    "new_path": "/skins/489/Seaside_Coincidence/Banner.png"
  },
  {
    "old_path": "/images/skins/489/SummerIcon.png",
    "new_path": "/skins/489/Seaside_Coincidence/Icon.png"
  },
  {
    "old_path": "/images/skins/489/SummerChibiIcon.png",
    "new_path": "/skins/489/Seaside_Coincidence/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/489/SummerShipyardIcon.png",
    "new_path": "/skins/489/Seaside_Coincidence/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/044/Banner.png",
    "new_path": "/skins/044/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/044/Icon.png",
    "new_path": "/skins/044/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/044/ChibiIcon.png",
    "new_path": "/skins/044/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/044/ShipyardIcon.png",
    "new_path": "/skins/044/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/044/KaiBanner.png",
    "new_path": "/skins/044/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/044/KaiIcon.png",
    "new_path": "/skins/044/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/044/KaiChibiIcon.png",
    "new_path": "/skins/044/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/044/KaiShipyardIcon.png",
    "new_path": "/skins/044/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/044/SchoolBanner.png",
    "new_path": "/skins/044/At_School_With_Indy/Banner.png"
  },
  {
    "old_path": "/images/skins/044/SchoolIcon.png",
    "new_path": "/skins/044/At_School_With_Indy/Icon.png"
  },
  {
    "old_path": "/images/skins/044/SchoolChibiIcon.png",
    "new_path": "/skins/044/At_School_With_Indy/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/044/SchoolShipyardIcon.png",
    "new_path": "/skins/044/At_School_With_Indy/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/135/Banner.png",
    "new_path": "/skins/135/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/135/Icon.png",
    "new_path": "/skins/135/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/135/ChibiIcon.png",
    "new_path": "/skins/135/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/135/ShipyardIcon.png",
    "new_path": "/skins/135/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/135/OriginalShipyardIcon.png",
    "new_path": "/skins/135/Original_Art/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/135/SummerBanner.png",
    "new_path": "/skins/135/Sun_Shining_Upon_Windsor/Banner.png"
  },
  {
    "old_path": "/images/skins/135/SummerIcon.png",
    "new_path": "/skins/135/Sun_Shining_Upon_Windsor/Icon.png"
  },
  {
    "old_path": "/images/skins/135/SummerChibiIcon.png",
    "new_path": "/skins/135/Sun_Shining_Upon_Windsor/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/135/SummerShipyardIcon.png",
    "new_path": "/skins/135/Sun_Shining_Upon_Windsor/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/135/New_YearBanner.png",
    "new_path": "/skins/135/Sakura_Elegance/Banner.png"
  },
  {
    "old_path": "/images/skins/135/New_YearIcon.png",
    "new_path": "/skins/135/Sakura_Elegance/Icon.png"
  },
  {
    "old_path": "/images/skins/135/New_YearChibiIcon.png",
    "new_path": "/skins/135/Sakura_Elegance/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/135/New_YearShipyardIcon.png",
    "new_path": "/skins/135/Sakura_Elegance/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/135/RaceQueenBanner.png",
    "new_path": "/skins/135/The_Laureates_Victory_Lap/Banner.png"
  },
  {
    "old_path": "/images/skins/135/RaceQueenIcon.png",
    "new_path": "/skins/135/The_Laureates_Victory_Lap/Icon.png"
  },
  {
    "old_path": "/images/skins/135/RaceQueenChibiIcon.png",
    "new_path": "/skins/135/The_Laureates_Victory_Lap/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/135/RaceQueenShipyardIcon.png",
    "new_path": "/skins/135/The_Laureates_Victory_Lap/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/473/Banner.png",
    "new_path": "/skins/473/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/473/Icon.png",
    "new_path": "/skins/473/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/473/ChibiIcon.png",
    "new_path": "/skins/473/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/473/ShipyardIcon.png",
    "new_path": "/skins/473/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/473/SummerBanner.png",
    "new_path": "/skins/473/Seaside_Training/Banner.png"
  },
  {
    "old_path": "/images/skins/473/SummerIcon.png",
    "new_path": "/skins/473/Seaside_Training/Icon.png"
  },
  {
    "old_path": "/images/skins/473/SummerChibiIcon.png",
    "new_path": "/skins/473/Seaside_Training/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/473/SummerShipyardIcon.png",
    "new_path": "/skins/473/Seaside_Training/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/473/SchoolBanner.png",
    "new_path": "/skins/473/Lolipop_Paradise/Banner.png"
  },
  {
    "old_path": "/images/skins/473/SchoolIcon.png",
    "new_path": "/skins/473/Lolipop_Paradise/Icon.png"
  },
  {
    "old_path": "/images/skins/473/SchoolChibiIcon.png",
    "new_path": "/skins/473/Lolipop_Paradise/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/473/SchoolShipyardIcon.png",
    "new_path": "/skins/473/Lolipop_Paradise/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/527/Banner.png",
    "new_path": "/skins/527/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/527/Icon.png",
    "new_path": "/skins/527/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/527/ChibiIcon.png",
    "new_path": "/skins/527/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/527/ShipyardIcon.png",
    "new_path": "/skins/527/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/527/MaidBanner.png",
    "new_path": "/skins/527/AfterHours_Service/Banner.png"
  },
  {
    "old_path": "/images/skins/527/MaidIcon.png",
    "new_path": "/skins/527/AfterHours_Service/Icon.png"
  },
  {
    "old_path": "/images/skins/527/MaidChibiIcon.png",
    "new_path": "/skins/527/AfterHours_Service/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/527/MaidShipyardIcon.png",
    "new_path": "/skins/527/AfterHours_Service/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/244/Banner.png",
    "new_path": "/skins/244/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/244/Icon.png",
    "new_path": "/skins/244/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/244/ChibiIcon.png",
    "new_path": "/skins/244/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/244/ShipyardIcon.png",
    "new_path": "/skins/244/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/244/WeddingBanner.png",
    "new_path": "/skins/244/Wedding/Banner.png"
  },
  {
    "old_path": "/images/skins/244/WeddingIcon.png",
    "new_path": "/skins/244/Wedding/Icon.png"
  },
  {
    "old_path": "/images/skins/244/WeddingChibiIcon.png",
    "new_path": "/skins/244/Wedding/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/244/WeddingShipyardIcon.png",
    "new_path": "/skins/244/Wedding/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/244/SummerBanner.png",
    "new_path": "/skins/244/Unfading_Smile/Banner.png"
  },
  {
    "old_path": "/images/skins/244/SummerIcon.png",
    "new_path": "/skins/244/Unfading_Smile/Icon.png"
  },
  {
    "old_path": "/images/skins/244/SummerChibiIcon.png",
    "new_path": "/skins/244/Unfading_Smile/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/244/SummerShipyardIcon.png",
    "new_path": "/skins/244/Unfading_Smile/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/244/New_YearBanner.png",
    "new_path": "/skins/244/Profusion_of_Flowers/Banner.png"
  },
  {
    "old_path": "/images/skins/244/New_YearIcon.png",
    "new_path": "/skins/244/Profusion_of_Flowers/Icon.png"
  },
  {
    "old_path": "/images/skins/244/New_YearChibiIcon.png",
    "new_path": "/skins/244/Profusion_of_Flowers/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/244/New_YearShipyardIcon.png",
    "new_path": "/skins/244/Profusion_of_Flowers/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/244/PartyBanner.png",
    "new_path": "/skins/244/Cordial_Cornflower/Banner.png"
  },
  {
    "old_path": "/images/skins/244/PartyIcon.png",
    "new_path": "/skins/244/Cordial_Cornflower/Icon.png"
  },
  {
    "old_path": "/images/skins/244/PartyChibiIcon.png",
    "new_path": "/skins/244/Cordial_Cornflower/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/244/PartyShipyardIcon.png",
    "new_path": "/skins/244/Cordial_Cornflower/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/244/RaceQueenBanner.png",
    "new_path": "/skins/244/Final_Lap/Banner.png"
  },
  {
    "old_path": "/images/skins/244/RaceQueenIcon.png",
    "new_path": "/skins/244/Final_Lap/Icon.png"
  },
  {
    "old_path": "/images/skins/244/RaceQueenChibiIcon.png",
    "new_path": "/skins/244/Final_Lap/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/244/RaceQueenShipyardIcon.png",
    "new_path": "/skins/244/Final_Lap/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/483/Banner.png",
    "new_path": "/skins/483/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/483/Icon.png",
    "new_path": "/skins/483/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/483/ChibiIcon.png",
    "new_path": "/skins/483/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/483/ShipyardIcon.png",
    "new_path": "/skins/483/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/483/New_YearBanner.png",
    "new_path": "/skins/483/Fireworks_and_Tapestries/Banner.png"
  },
  {
    "old_path": "/images/skins/483/New_YearIcon.png",
    "new_path": "/skins/483/Fireworks_and_Tapestries/Icon.png"
  },
  {
    "old_path": "/images/skins/483/New_YearChibiIcon.png",
    "new_path": "/skins/483/Fireworks_and_Tapestries/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/483/New_YearShipyardIcon.png",
    "new_path": "/skins/483/Fireworks_and_Tapestries/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/002/Banner.png",
    "new_path": "/skins/002/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/002/Icon.png",
    "new_path": "/skins/002/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/002/ChibiIcon.png",
    "new_path": "/skins/002/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/002/ShipyardIcon.png",
    "new_path": "/skins/002/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Collab005/Banner.png",
    "new_path": "/skins/Collab005/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/Collab005/Icon.png",
    "new_path": "/skins/Collab005/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/Collab005/ChibiIcon.png",
    "new_path": "/skins/Collab005/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Collab005/ShipyardIcon.png",
    "new_path": "/skins/Collab005/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Collab005/CollabIcon.png",
    "new_path": "/skins/Collab005/Goddesses_Promise/Icon.png"
  },
  {
    "old_path": "/images/skins/Collab005/CollabChibiIcon.png",
    "new_path": "/skins/Collab005/Goddesses_Promise/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Collab005/CollabShipyardIcon.png",
    "new_path": "/skins/Collab005/Goddesses_Promise/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/130/Banner.png",
    "new_path": "/skins/130/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/130/Icon.png",
    "new_path": "/skins/130/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/130/ChibiIcon.png",
    "new_path": "/skins/130/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/130/ShipyardIcon.png",
    "new_path": "/skins/130/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/130/PartyBanner.png",
    "new_path": "/skins/130/The_Queens_Ball/Banner.png"
  },
  {
    "old_path": "/images/skins/130/PartyIcon.png",
    "new_path": "/skins/130/The_Queens_Ball/Icon.png"
  },
  {
    "old_path": "/images/skins/130/PartyChibiIcon.png",
    "new_path": "/skins/130/The_Queens_Ball/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/130/PartyShipyardIcon.png",
    "new_path": "/skins/130/The_Queens_Ball/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/130/IdolBanner.png",
    "new_path": "/skins/130/One_Night_of_the_Queen/Banner.png"
  },
  {
    "old_path": "/images/skins/130/IdolIcon.png",
    "new_path": "/skins/130/One_Night_of_the_Queen/Icon.png"
  },
  {
    "old_path": "/images/skins/130/IdolChibiIcon.png",
    "new_path": "/skins/130/One_Night_of_the_Queen/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/130/IdolShipyardIcon.png",
    "new_path": "/skins/130/One_Night_of_the_Queen/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/130/SchoolBanner.png",
    "new_path": "/skins/130/Queen_of_the_Campus/Banner.png"
  },
  {
    "old_path": "/images/skins/130/SchoolIcon.png",
    "new_path": "/skins/130/Queen_of_the_Campus/Icon.png"
  },
  {
    "old_path": "/images/skins/130/SchoolChibiIcon.png",
    "new_path": "/skins/130/Queen_of_the_Campus/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/130/SchoolShipyardIcon.png",
    "new_path": "/skins/130/Queen_of_the_Campus/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/130/SpringBanner.png",
    "new_path": "/skins/130/Crown_Jewel_of_the_Royal_Navy/Banner.png"
  },
  {
    "old_path": "/images/skins/130/SpringIcon.png",
    "new_path": "/skins/130/Crown_Jewel_of_the_Royal_Navy/Icon.png"
  },
  {
    "old_path": "/images/skins/130/SpringChibiIcon.png",
    "new_path": "/skins/130/Crown_Jewel_of_the_Royal_Navy/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/130/SpringShipyardIcon.png",
    "new_path": "/skins/130/Crown_Jewel_of_the_Royal_Navy/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/130/MaidBanner.png",
    "new_path": "/skins/130/Yes_Your_Maidness/Banner.png"
  },
  {
    "old_path": "/images/skins/130/MaidIcon.png",
    "new_path": "/skins/130/Yes_Your_Maidness/Icon.png"
  },
  {
    "old_path": "/images/skins/130/MaidChibiIcon.png",
    "new_path": "/skins/130/Yes_Your_Maidness/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/130/MaidShipyardIcon.png",
    "new_path": "/skins/130/Yes_Your_Maidness/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/047/Banner.png",
    "new_path": "/skins/047/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/047/Icon.png",
    "new_path": "/skins/047/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/047/ChibiIcon.png",
    "new_path": "/skins/047/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/047/ShipyardIcon.png",
    "new_path": "/skins/047/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/047/SummerBanner.png",
    "new_path": "/skins/047/Sizzling_Summer_Brisk_Breeze/Banner.png"
  },
  {
    "old_path": "/images/skins/047/SummerIcon.png",
    "new_path": "/skins/047/Sizzling_Summer_Brisk_Breeze/Icon.png"
  },
  {
    "old_path": "/images/skins/047/SummerChibiIcon.png",
    "new_path": "/skins/047/Sizzling_Summer_Brisk_Breeze/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/047/SummerShipyardIcon.png",
    "new_path": "/skins/047/Sizzling_Summer_Brisk_Breeze/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/299/Banner.png",
    "new_path": "/skins/299/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/299/Icon.png",
    "new_path": "/skins/299/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/299/ChibiIcon.png",
    "new_path": "/skins/299/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/299/ShipyardIcon.png",
    "new_path": "/skins/299/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/299/HalloweenBanner.png",
    "new_path": "/skins/299/Sweet_Magic/Banner.png"
  },
  {
    "old_path": "/images/skins/299/HalloweenIcon.png",
    "new_path": "/skins/299/Sweet_Magic/Icon.png"
  },
  {
    "old_path": "/images/skins/299/HalloweenChibiIcon.png",
    "new_path": "/skins/299/Sweet_Magic/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/299/HalloweenShipyardIcon.png",
    "new_path": "/skins/299/Sweet_Magic/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/030/Banner.png",
    "new_path": "/skins/030/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/030/Icon.png",
    "new_path": "/skins/030/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/030/ChibiIcon.png",
    "new_path": "/skins/030/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/030/ShipyardIcon.png",
    "new_path": "/skins/030/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/075/Banner.png",
    "new_path": "/skins/075/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/075/Icon.png",
    "new_path": "/skins/075/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/075/ChibiIcon.png",
    "new_path": "/skins/075/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/075/ShipyardIcon.png",
    "new_path": "/skins/075/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/075/KaiBanner.png",
    "new_path": "/skins/075/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/075/KaiIcon.png",
    "new_path": "/skins/075/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/075/KaiChibiIcon.png",
    "new_path": "/skins/075/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/075/KaiShipyardIcon.png",
    "new_path": "/skins/075/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/445/Banner.png",
    "new_path": "/skins/445/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/445/Icon.png",
    "new_path": "/skins/445/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/445/ChibiIcon.png",
    "new_path": "/skins/445/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/445/ShipyardIcon.png",
    "new_path": "/skins/445/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/445/SportBanner.png",
    "new_path": "/skins/445/Biggest_Little_Cheerleader/Banner.png"
  },
  {
    "old_path": "/images/skins/445/SportIcon.png",
    "new_path": "/skins/445/Biggest_Little_Cheerleader/Icon.png"
  },
  {
    "old_path": "/images/skins/445/SportChibiIcon.png",
    "new_path": "/skins/445/Biggest_Little_Cheerleader/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/445/SportShipyardIcon.png",
    "new_path": "/skins/445/Biggest_Little_Cheerleader/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/445/SummerBanner.png",
    "new_path": "/skins/445/Summer_Spinoff/Banner.png"
  },
  {
    "old_path": "/images/skins/445/SummerIcon.png",
    "new_path": "/skins/445/Summer_Spinoff/Icon.png"
  },
  {
    "old_path": "/images/skins/445/SummerChibiIcon.png",
    "new_path": "/skins/445/Summer_Spinoff/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/445/SummerShipyardIcon.png",
    "new_path": "/skins/445/Summer_Spinoff/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/445/BunnyBanner.png",
    "new_path": "/skins/445/Reno_Bunnino/Banner.png"
  },
  {
    "old_path": "/images/skins/445/BunnyIcon.png",
    "new_path": "/skins/445/Reno_Bunnino/Icon.png"
  },
  {
    "old_path": "/images/skins/445/BunnyChibiIcon.png",
    "new_path": "/skins/445/Reno_Bunnino/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/445/BunnyShipyardIcon.png",
    "new_path": "/skins/445/Reno_Bunnino/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/445/SpringBanner.png",
    "new_path": "/skins/445/Springs_Inspiration/Banner.png"
  },
  {
    "old_path": "/images/skins/445/SpringIcon.png",
    "new_path": "/skins/445/Springs_Inspiration/Icon.png"
  },
  {
    "old_path": "/images/skins/445/SpringChibiIcon.png",
    "new_path": "/skins/445/Springs_Inspiration/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/445/SpringShipyardIcon.png",
    "new_path": "/skins/445/Springs_Inspiration/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/127/Banner.png",
    "new_path": "/skins/127/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/127/Icon.png",
    "new_path": "/skins/127/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/127/ChibiIcon.png",
    "new_path": "/skins/127/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/127/ShipyardIcon.png",
    "new_path": "/skins/127/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/128/Banner.png",
    "new_path": "/skins/128/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/128/Icon.png",
    "new_path": "/skins/128/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/128/ChibiIcon.png",
    "new_path": "/skins/128/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/128/ShipyardIcon.png",
    "new_path": "/skins/128/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/453/Banner.png",
    "new_path": "/skins/453/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/453/Icon.png",
    "new_path": "/skins/453/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/453/ChibiIcon.png",
    "new_path": "/skins/453/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/453/ShipyardIcon.png",
    "new_path": "/skins/453/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/453/SummerBanner.png",
    "new_path": "/skins/453/Fleuron_of_the_Waves/Banner.png"
  },
  {
    "old_path": "/images/skins/453/SummerIcon.png",
    "new_path": "/skins/453/Fleuron_of_the_Waves/Icon.png"
  },
  {
    "old_path": "/images/skins/453/SummerChibiIcon.png",
    "new_path": "/skins/453/Fleuron_of_the_Waves/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/453/SummerShipyardIcon.png",
    "new_path": "/skins/453/Fleuron_of_the_Waves/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/453/New_YearBanner.png",
    "new_path": "/skins/453/Evergreen_Prophecy/Banner.png"
  },
  {
    "old_path": "/images/skins/453/New_YearIcon.png",
    "new_path": "/skins/453/Evergreen_Prophecy/Icon.png"
  },
  {
    "old_path": "/images/skins/453/New_YearChibiIcon.png",
    "new_path": "/skins/453/Evergreen_Prophecy/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/453/New_YearShipyardIcon.png",
    "new_path": "/skins/453/Evergreen_Prophecy/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/303/Banner.png",
    "new_path": "/skins/303/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/303/Icon.png",
    "new_path": "/skins/303/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/303/ChibiIcon.png",
    "new_path": "/skins/303/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/303/ShipyardIcon.png",
    "new_path": "/skins/303/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/10081/Banner.png",
    "new_path": "/skins/10081/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/10081/Icon.png",
    "new_path": "/skins/10081/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/10081/ChibiIcon.png",
    "new_path": "/skins/10081/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/10081/ShipyardIcon.png",
    "new_path": "/skins/10081/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/10081/CasualBanner.png",
    "new_path": "/skins/10081/Blue_Sky_Station/Banner.png"
  },
  {
    "old_path": "/images/skins/10081/CasualIcon.png",
    "new_path": "/skins/10081/Blue_Sky_Station/Icon.png"
  },
  {
    "old_path": "/images/skins/10081/CasualChibiIcon.png",
    "new_path": "/skins/10081/Blue_Sky_Station/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/10081/CasualShipyardIcon.png",
    "new_path": "/skins/10081/Blue_Sky_Station/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/10075/Banner.png",
    "new_path": "/skins/10075/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/10075/Icon.png",
    "new_path": "/skins/10075/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/10075/ChibiIcon.png",
    "new_path": "/skins/10075/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/10075/ShipyardIcon.png",
    "new_path": "/skins/10075/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/10075/FestivalBanner.png",
    "new_path": "/skins/10075/Paddle_Showdown_Summer_Formation/Banner.png"
  },
  {
    "old_path": "/images/skins/10075/FestivalIcon.png",
    "new_path": "/skins/10075/Paddle_Showdown_Summer_Formation/Icon.png"
  },
  {
    "old_path": "/images/skins/10075/FestivalChibiIcon.png",
    "new_path": "/skins/10075/Paddle_Showdown_Summer_Formation/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/10075/FestivalShipyardIcon.png",
    "new_path": "/skins/10075/Paddle_Showdown_Summer_Formation/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/133/Banner.png",
    "new_path": "/skins/133/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/133/Icon.png",
    "new_path": "/skins/133/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/133/ChibiIcon.png",
    "new_path": "/skins/133/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/133/ShipyardIcon.png",
    "new_path": "/skins/133/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/133/WeddingBanner.png",
    "new_path": "/skins/133/Wedding/Banner.png"
  },
  {
    "old_path": "/images/skins/133/WeddingIcon.png",
    "new_path": "/skins/133/Wedding/Icon.png"
  },
  {
    "old_path": "/images/skins/133/WeddingChibiIcon.png",
    "new_path": "/skins/133/Wedding/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/133/WeddingShipyardIcon.png",
    "new_path": "/skins/133/Wedding/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/133/SummerBanner.png",
    "new_path": "/skins/133/Future_Seaside_Admiral/Banner.png"
  },
  {
    "old_path": "/images/skins/133/SummerIcon.png",
    "new_path": "/skins/133/Future_Seaside_Admiral/Icon.png"
  },
  {
    "old_path": "/images/skins/133/SummerChibiIcon.png",
    "new_path": "/skins/133/Future_Seaside_Admiral/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/133/SummerShipyardIcon.png",
    "new_path": "/skins/133/Future_Seaside_Admiral/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/133/LawsonBanner.png",
    "new_path": "/skins/133/One_Day_as_a_Trainee_Clerk/Banner.png"
  },
  {
    "old_path": "/images/skins/133/LawsonIcon.png",
    "new_path": "/skins/133/One_Day_as_a_Trainee_Clerk/Icon.png"
  },
  {
    "old_path": "/images/skins/133/LawsonChibiIcon.png",
    "new_path": "/skins/133/One_Day_as_a_Trainee_Clerk/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/133/LawsonShipyardIcon.png",
    "new_path": "/skins/133/One_Day_as_a_Trainee_Clerk/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/133/SpringBanner.png",
    "new_path": "/skins/133/Immaculate_Beauty/Banner.png"
  },
  {
    "old_path": "/images/skins/133/SpringIcon.png",
    "new_path": "/skins/133/Immaculate_Beauty/Icon.png"
  },
  {
    "old_path": "/images/skins/133/SpringChibiIcon.png",
    "new_path": "/skins/133/Immaculate_Beauty/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/133/SpringShipyardIcon.png",
    "new_path": "/skins/133/Immaculate_Beauty/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Plan005/Banner.png",
    "new_path": "/skins/Plan005/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/Plan005/Icon.png",
    "new_path": "/skins/Plan005/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/Plan005/ChibiIcon.png",
    "new_path": "/skins/Plan005/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Plan005/ShipyardIcon.png",
    "new_path": "/skins/Plan005/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Plan005/PartyBanner.png",
    "new_path": "/skins/Plan005/Dark_Red_Grin/Banner.png"
  },
  {
    "old_path": "/images/skins/Plan005/PartyIcon.png",
    "new_path": "/skins/Plan005/Dark_Red_Grin/Icon.png"
  },
  {
    "old_path": "/images/skins/Plan005/PartyChibiIcon.png",
    "new_path": "/skins/Plan005/Dark_Red_Grin/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Plan005/PartyShipyardIcon.png",
    "new_path": "/skins/Plan005/Dark_Red_Grin/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/479/Banner.png",
    "new_path": "/skins/479/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/479/Icon.png",
    "new_path": "/skins/479/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/479/ChibiIcon.png",
    "new_path": "/skins/479/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/479/ShipyardIcon.png",
    "new_path": "/skins/479/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/30002/Banner.png",
    "new_path": "/skins/30002/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/30002/Icon.png",
    "new_path": "/skins/30002/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/30002/ChibiIcon.png",
    "new_path": "/skins/30002/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/30002/ShipyardIcon.png",
    "new_path": "/skins/30002/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Collab033/Banner.png",
    "new_path": "/skins/Collab033/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/Collab033/Icon.png",
    "new_path": "/skins/Collab033/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/Collab033/ChibiIcon.png",
    "new_path": "/skins/Collab033/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Collab033/ShipyardIcon.png",
    "new_path": "/skins/Collab033/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Collab033/CollabBanner.png",
    "new_path": "/skins/Collab033/Rurutie_Utawarerumono/Banner.png"
  },
  {
    "old_path": "/images/skins/Collab033/CollabIcon.png",
    "new_path": "/skins/Collab033/Rurutie_Utawarerumono/Icon.png"
  },
  {
    "old_path": "/images/skins/Collab033/CollabChibiIcon.png",
    "new_path": "/skins/Collab033/Rurutie_Utawarerumono/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Collab033/CollabShipyardIcon.png",
    "new_path": "/skins/Collab033/Rurutie_Utawarerumono/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/426/Banner.png",
    "new_path": "/skins/426/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/426/Icon.png",
    "new_path": "/skins/426/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/426/ChibiIcon.png",
    "new_path": "/skins/426/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/426/ShipyardIcon.png",
    "new_path": "/skins/426/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/426/New_YearBanner.png",
    "new_path": "/skins/426/Firebirds_New_Year_Dance/Banner.png"
  },
  {
    "old_path": "/images/skins/426/New_YearIcon.png",
    "new_path": "/skins/426/Firebirds_New_Year_Dance/Icon.png"
  },
  {
    "old_path": "/images/skins/426/New_YearChibiIcon.png",
    "new_path": "/skins/426/Firebirds_New_Year_Dance/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/426/New_YearShipyardIcon.png",
    "new_path": "/skins/426/Firebirds_New_Year_Dance/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/223/Banner.png",
    "new_path": "/skins/223/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/223/Icon.png",
    "new_path": "/skins/223/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/223/ChibiIcon.png",
    "new_path": "/skins/223/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/223/ShipyardIcon.png",
    "new_path": "/skins/223/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/223/OriginalShipyardIcon.png",
    "new_path": "/skins/223/Original_Art/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/223/SleepyBanner.png",
    "new_path": "/skins/223/Slacking_Samurai/Banner.png"
  },
  {
    "old_path": "/images/skins/223/SleepyIcon.png",
    "new_path": "/skins/223/Slacking_Samurai/Icon.png"
  },
  {
    "old_path": "/images/skins/223/SleepyChibiIcon.png",
    "new_path": "/skins/223/Slacking_Samurai/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/223/SleepyShipyardIcon.png",
    "new_path": "/skins/223/Slacking_Samurai/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/223/SchoolBanner.png",
    "new_path": "/skins/223/Dragon_Hunter_Ryuujous_Rise/Banner.png"
  },
  {
    "old_path": "/images/skins/223/SchoolIcon.png",
    "new_path": "/skins/223/Dragon_Hunter_Ryuujous_Rise/Icon.png"
  },
  {
    "old_path": "/images/skins/223/SchoolChibiIcon.png",
    "new_path": "/skins/223/Dragon_Hunter_Ryuujous_Rise/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/223/SchoolShipyardIcon.png",
    "new_path": "/skins/223/Dragon_Hunter_Ryuujous_Rise/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Plan006/Banner.png",
    "new_path": "/skins/Plan006/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/Plan006/Icon.png",
    "new_path": "/skins/Plan006/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/Plan006/ChibiIcon.png",
    "new_path": "/skins/Plan006/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Plan006/ShipyardIcon.png",
    "new_path": "/skins/Plan006/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Plan006/PartyBanner.png",
    "new_path": "/skins/Plan006/Holy_Knights_Resplendence/Banner.png"
  },
  {
    "old_path": "/images/skins/Plan006/PartyIcon.png",
    "new_path": "/skins/Plan006/Holy_Knights_Resplendence/Icon.png"
  },
  {
    "old_path": "/images/skins/Plan006/PartyChibiIcon.png",
    "new_path": "/skins/Plan006/Holy_Knights_Resplendence/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Plan006/PartyShipyardIcon.png",
    "new_path": "/skins/Plan006/Holy_Knights_Resplendence/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Plan006/SpringBanner.png",
    "new_path": "/skins/Plan006/Alluring_Administrator/Banner.png"
  },
  {
    "old_path": "/images/skins/Plan006/SpringIcon.png",
    "new_path": "/skins/Plan006/Alluring_Administrator/Icon.png"
  },
  {
    "old_path": "/images/skins/Plan006/SpringChibiIcon.png",
    "new_path": "/skins/Plan006/Alluring_Administrator/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Plan006/SpringShipyardIcon.png",
    "new_path": "/skins/Plan006/Alluring_Administrator/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/040/Banner.png",
    "new_path": "/skins/040/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/040/Icon.png",
    "new_path": "/skins/040/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/040/ChibiIcon.png",
    "new_path": "/skins/040/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/040/ShipyardIcon.png",
    "new_path": "/skins/040/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/036/Banner.png",
    "new_path": "/skins/036/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/036/Icon.png",
    "new_path": "/skins/036/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/036/ChibiIcon.png",
    "new_path": "/skins/036/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/036/ShipyardIcon.png",
    "new_path": "/skins/036/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/036/KaiBanner.png",
    "new_path": "/skins/036/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/036/KaiIcon.png",
    "new_path": "/skins/036/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/036/KaiChibiIcon.png",
    "new_path": "/skins/036/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/036/KaiShipyardIcon.png",
    "new_path": "/skins/036/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/036/WeddingBanner.png",
    "new_path": "/skins/036/Wedding/Banner.png"
  },
  {
    "old_path": "/images/skins/036/WeddingIcon.png",
    "new_path": "/skins/036/Wedding/Icon.png"
  },
  {
    "old_path": "/images/skins/036/WeddingChibiIcon.png",
    "new_path": "/skins/036/Wedding/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/036/WeddingShipyardIcon.png",
    "new_path": "/skins/036/Wedding/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/036/ChristmasBanner.png",
    "new_path": "/skins/036/Sandy_Claus/Banner.png"
  },
  {
    "old_path": "/images/skins/036/ChristmasIcon.png",
    "new_path": "/skins/036/Sandy_Claus/Icon.png"
  },
  {
    "old_path": "/images/skins/036/ChristmasChibiIcon.png",
    "new_path": "/skins/036/Sandy_Claus/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/036/ChristmasShipyardIcon.png",
    "new_path": "/skins/036/Sandy_Claus/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/512/Banner.png",
    "new_path": "/skins/512/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/512/Icon.png",
    "new_path": "/skins/512/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/512/ChibiIcon.png",
    "new_path": "/skins/512/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/512/ShipyardIcon.png",
    "new_path": "/skins/512/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/512/BunnyBanner.png",
    "new_path": "/skins/512/Funny_Bunny/Banner.png"
  },
  {
    "old_path": "/images/skins/512/BunnyIcon.png",
    "new_path": "/skins/512/Funny_Bunny/Icon.png"
  },
  {
    "old_path": "/images/skins/512/BunnyChibiIcon.png",
    "new_path": "/skins/512/Funny_Bunny/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/512/BunnyShipyardIcon.png",
    "new_path": "/skins/512/Funny_Bunny/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/404/Banner.png",
    "new_path": "/skins/404/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/404/Icon.png",
    "new_path": "/skins/404/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/404/ChibiIcon.png",
    "new_path": "/skins/404/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/404/ShipyardIcon.png",
    "new_path": "/skins/404/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/404/PartyBanner.png",
    "new_path": "/skins/404/The_Longing_Princess/Banner.png"
  },
  {
    "old_path": "/images/skins/404/PartyIcon.png",
    "new_path": "/skins/404/The_Longing_Princess/Icon.png"
  },
  {
    "old_path": "/images/skins/404/PartyChibiIcon.png",
    "new_path": "/skins/404/The_Longing_Princess/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/404/PartyShipyardIcon.png",
    "new_path": "/skins/404/The_Longing_Princess/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Collab035/Banner.png",
    "new_path": "/skins/Collab035/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/Collab035/Icon.png",
    "new_path": "/skins/Collab035/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/Collab035/ChibiIcon.png",
    "new_path": "/skins/Collab035/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Collab035/ShipyardIcon.png",
    "new_path": "/skins/Collab035/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Collab035/CollabBanner.png",
    "new_path": "/skins/Collab035/Saraana_Utawarerumono/Banner.png"
  },
  {
    "old_path": "/images/skins/Collab035/CollabIcon.png",
    "new_path": "/skins/Collab035/Saraana_Utawarerumono/Icon.png"
  },
  {
    "old_path": "/images/skins/Collab035/CollabChibiIcon.png",
    "new_path": "/skins/Collab035/Saraana_Utawarerumono/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Collab035/CollabShipyardIcon.png",
    "new_path": "/skins/Collab035/Saraana_Utawarerumono/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/074/Banner.png",
    "new_path": "/skins/074/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/074/Icon.png",
    "new_path": "/skins/074/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/074/ChibiIcon.png",
    "new_path": "/skins/074/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/074/ShipyardIcon.png",
    "new_path": "/skins/074/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/074/KaiBanner.png",
    "new_path": "/skins/074/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/074/KaiIcon.png",
    "new_path": "/skins/074/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/074/KaiChibiIcon.png",
    "new_path": "/skins/074/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/074/KaiShipyardIcon.png",
    "new_path": "/skins/074/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/074/SummerBanner.png",
    "new_path": "/skins/074/Seven_Seas_of_Rest/Banner.png"
  },
  {
    "old_path": "/images/skins/074/SummerIcon.png",
    "new_path": "/skins/074/Seven_Seas_of_Rest/Icon.png"
  },
  {
    "old_path": "/images/skins/074/SummerChibiIcon.png",
    "new_path": "/skins/074/Seven_Seas_of_Rest/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/074/SummerShipyardIcon.png",
    "new_path": "/skins/074/Seven_Seas_of_Rest/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/074/HanbokBanner.png",
    "new_path": "/skins/074/Hibiscusscented_Idol/Banner.png"
  },
  {
    "old_path": "/images/skins/074/HanbokIcon.png",
    "new_path": "/skins/074/Hibiscusscented_Idol/Icon.png"
  },
  {
    "old_path": "/images/skins/074/HanbokChibiIcon.png",
    "new_path": "/skins/074/Hibiscusscented_Idol/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/074/HanbokShipyardIcon.png",
    "new_path": "/skins/074/Hibiscusscented_Idol/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/074/KizunaBanner.png",
    "new_path": "/skins/074/Virtual_Idol/Banner.png"
  },
  {
    "old_path": "/images/skins/074/KizunaIcon.png",
    "new_path": "/skins/074/Virtual_Idol/Icon.png"
  },
  {
    "old_path": "/images/skins/074/KizunaChibiIcon.png",
    "new_path": "/skins/074/Virtual_Idol/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/074/KizunaShipyardIcon.png",
    "new_path": "/skins/074/Virtual_Idol/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/074/EventBanner.png",
    "new_path": "/skins/074/Superstar_of_the_Blue_Seas/Banner.png"
  },
  {
    "old_path": "/images/skins/074/EventIcon.png",
    "new_path": "/skins/074/Superstar_of_the_Blue_Seas/Icon.png"
  },
  {
    "old_path": "/images/skins/074/EventChibiIcon.png",
    "new_path": "/skins/074/Superstar_of_the_Blue_Seas/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/074/EventShipyardIcon.png",
    "new_path": "/skins/074/Superstar_of_the_Blue_Seas/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/074/ChristmasBanner.png",
    "new_path": "/skins/074/Silent_Night_Songstress/Banner.png"
  },
  {
    "old_path": "/images/skins/074/ChristmasIcon.png",
    "new_path": "/skins/074/Silent_Night_Songstress/Icon.png"
  },
  {
    "old_path": "/images/skins/074/ChristmasChibiIcon.png",
    "new_path": "/skins/074/Silent_Night_Songstress/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/074/ChristmasShipyardIcon.png",
    "new_path": "/skins/074/Silent_Night_Songstress/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/074/SpringBanner.png",
    "new_path": "/skins/074/Springs_Opening_Act/Banner.png"
  },
  {
    "old_path": "/images/skins/074/SpringIcon.png",
    "new_path": "/skins/074/Springs_Opening_Act/Icon.png"
  },
  {
    "old_path": "/images/skins/074/SpringChibiIcon.png",
    "new_path": "/skins/074/Springs_Opening_Act/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/074/SpringShipyardIcon.png",
    "new_path": "/skins/074/Springs_Opening_Act/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/074/CasualBanner.png",
    "new_path": "/skins/074/The_Sweetest_Picnic/Banner.png"
  },
  {
    "old_path": "/images/skins/074/CasualIcon.png",
    "new_path": "/skins/074/The_Sweetest_Picnic/Icon.png"
  },
  {
    "old_path": "/images/skins/074/CasualChibiIcon.png",
    "new_path": "/skins/074/The_Sweetest_Picnic/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/074/CasualShipyardIcon.png",
    "new_path": "/skins/074/The_Sweetest_Picnic/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/074/FoodBanner.png",
    "new_path": "/skins/074/Cup_Ramen_Ambassador/Banner.png"
  },
  {
    "old_path": "/images/skins/074/FoodIcon.png",
    "new_path": "/skins/074/Cup_Ramen_Ambassador/Icon.png"
  },
  {
    "old_path": "/images/skins/074/FoodChibiIcon.png",
    "new_path": "/skins/074/Cup_Ramen_Ambassador/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/074/FoodShipyardIcon.png",
    "new_path": "/skins/074/Cup_Ramen_Ambassador/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/248/Banner.png",
    "new_path": "/skins/248/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/248/Icon.png",
    "new_path": "/skins/248/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/248/ChibiIcon.png",
    "new_path": "/skins/248/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/248/ShipyardIcon.png",
    "new_path": "/skins/248/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/248/SpringBanner.png",
    "new_path": "/skins/248/Panther_und_Pflaume/Banner.png"
  },
  {
    "old_path": "/images/skins/248/SpringIcon.png",
    "new_path": "/skins/248/Panther_und_Pflaume/Icon.png"
  },
  {
    "old_path": "/images/skins/248/SpringChibiIcon.png",
    "new_path": "/skins/248/Panther_und_Pflaume/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/248/SpringShipyardIcon.png",
    "new_path": "/skins/248/Panther_und_Pflaume/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/30009/Banner.png",
    "new_path": "/skins/30009/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/30009/Icon.png",
    "new_path": "/skins/30009/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/30009/ChibiIcon.png",
    "new_path": "/skins/30009/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/30009/ShipyardIcon.png",
    "new_path": "/skins/30009/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Plan007/Banner.png",
    "new_path": "/skins/Plan007/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/Plan007/Icon.png",
    "new_path": "/skins/Plan007/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/Plan007/ChibiIcon.png",
    "new_path": "/skins/Plan007/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Plan007/ShipyardIcon.png",
    "new_path": "/skins/Plan007/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Plan007/PartyBanner.png",
    "new_path": "/skins/Plan007/Gorgeous_Party/Banner.png"
  },
  {
    "old_path": "/images/skins/Plan007/PartyIcon.png",
    "new_path": "/skins/Plan007/Gorgeous_Party/Icon.png"
  },
  {
    "old_path": "/images/skins/Plan007/PartyChibiIcon.png",
    "new_path": "/skins/Plan007/Gorgeous_Party/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Plan007/PartyShipyardIcon.png",
    "new_path": "/skins/Plan007/Gorgeous_Party/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Plan007/ChristmasBanner.png",
    "new_path": "/skins/Plan007/Christmas_Party_Prep/Banner.png"
  },
  {
    "old_path": "/images/skins/Plan007/ChristmasIcon.png",
    "new_path": "/skins/Plan007/Christmas_Party_Prep/Icon.png"
  },
  {
    "old_path": "/images/skins/Plan007/ChristmasChibiIcon.png",
    "new_path": "/skins/Plan007/Christmas_Party_Prep/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Plan007/ChristmasShipyardIcon.png",
    "new_path": "/skins/Plan007/Christmas_Party_Prep/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Plan007/SummerBanner.png",
    "new_path": "/skins/Plan007/Sunfish_Spell/Banner.png"
  },
  {
    "old_path": "/images/skins/Plan007/SummerIcon.png",
    "new_path": "/skins/Plan007/Sunfish_Spell/Icon.png"
  },
  {
    "old_path": "/images/skins/Plan007/SummerChibiIcon.png",
    "new_path": "/skins/Plan007/Sunfish_Spell/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Plan007/SummerShipyardIcon.png",
    "new_path": "/skins/Plan007/Sunfish_Spell/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/308/Banner.png",
    "new_path": "/skins/308/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/308/Icon.png",
    "new_path": "/skins/308/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/308/ChibiIcon.png",
    "new_path": "/skins/308/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/308/ShipyardIcon.png",
    "new_path": "/skins/308/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/308/KaiBanner.png",
    "new_path": "/skins/308/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/308/KaiIcon.png",
    "new_path": "/skins/308/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/308/KaiChibiIcon.png",
    "new_path": "/skins/308/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/308/KaiShipyardIcon.png",
    "new_path": "/skins/308/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/378/Banner.png",
    "new_path": "/skins/378/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/378/Icon.png",
    "new_path": "/skins/378/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/378/ChibiIcon.png",
    "new_path": "/skins/378/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/378/ShipyardIcon.png",
    "new_path": "/skins/378/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/378/CasualBanner.png",
    "new_path": "/skins/378/Utopias_Collector/Banner.png"
  },
  {
    "old_path": "/images/skins/378/CasualIcon.png",
    "new_path": "/skins/378/Utopias_Collector/Icon.png"
  },
  {
    "old_path": "/images/skins/378/CasualChibiIcon.png",
    "new_path": "/skins/378/Utopias_Collector/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/378/CasualShipyardIcon.png",
    "new_path": "/skins/378/Utopias_Collector/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/378/MiscBanner.png",
    "new_path": "/skins/378/Explorer_of_the_Lost_World/Banner.png"
  },
  {
    "old_path": "/images/skins/378/MiscIcon.png",
    "new_path": "/skins/378/Explorer_of_the_Lost_World/Icon.png"
  },
  {
    "old_path": "/images/skins/378/MiscChibiIcon.png",
    "new_path": "/skins/378/Explorer_of_the_Lost_World/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/378/MiscShipyardIcon.png",
    "new_path": "/skins/378/Explorer_of_the_Lost_World/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/111/Banner.png",
    "new_path": "/skins/111/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/111/Icon.png",
    "new_path": "/skins/111/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/111/ChibiIcon.png",
    "new_path": "/skins/111/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/111/ShipyardIcon.png",
    "new_path": "/skins/111/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/111/MiscBanner.png",
    "new_path": "/skins/111/Cloak_and_Dagger/Banner.png"
  },
  {
    "old_path": "/images/skins/111/MiscIcon.png",
    "new_path": "/skins/111/Cloak_and_Dagger/Icon.png"
  },
  {
    "old_path": "/images/skins/111/MiscChibiIcon.png",
    "new_path": "/skins/111/Cloak_and_Dagger/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/111/MiscShipyardIcon.png",
    "new_path": "/skins/111/Cloak_and_Dagger/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/111/FestivalBanner.png",
    "new_path": "/skins/111/A_Moments_Respite/Banner.png"
  },
  {
    "old_path": "/images/skins/111/FestivalIcon.png",
    "new_path": "/skins/111/A_Moments_Respite/Icon.png"
  },
  {
    "old_path": "/images/skins/111/FestivalChibiIcon.png",
    "new_path": "/skins/111/A_Moments_Respite/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/111/FestivalShipyardIcon.png",
    "new_path": "/skins/111/A_Moments_Respite/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/111/PartyBanner.png",
    "new_path": "/skins/111/Black_Crows_Finery/Banner.png"
  },
  {
    "old_path": "/images/skins/111/PartyIcon.png",
    "new_path": "/skins/111/Black_Crows_Finery/Icon.png"
  },
  {
    "old_path": "/images/skins/111/PartyChibiIcon.png",
    "new_path": "/skins/111/Black_Crows_Finery/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/111/PartyShipyardIcon.png",
    "new_path": "/skins/111/Black_Crows_Finery/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/421/Banner.png",
    "new_path": "/skins/421/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/421/Icon.png",
    "new_path": "/skins/421/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/421/ChibiIcon.png",
    "new_path": "/skins/421/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/421/ShipyardIcon.png",
    "new_path": "/skins/421/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/165/Banner.png",
    "new_path": "/skins/165/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/165/Icon.png",
    "new_path": "/skins/165/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/165/ChibiIcon.png",
    "new_path": "/skins/165/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/165/ShipyardIcon.png",
    "new_path": "/skins/165/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/165/KaiBanner.png",
    "new_path": "/skins/165/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/165/KaiIcon.png",
    "new_path": "/skins/165/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/165/KaiChibiIcon.png",
    "new_path": "/skins/165/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/165/KaiShipyardIcon.png",
    "new_path": "/skins/165/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/165/SummerBanner.png",
    "new_path": "/skins/165/Attack_I490/Banner.png"
  },
  {
    "old_path": "/images/skins/165/SummerIcon.png",
    "new_path": "/skins/165/Attack_I490/Icon.png"
  },
  {
    "old_path": "/images/skins/165/SummerChibiIcon.png",
    "new_path": "/skins/165/Attack_I490/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/165/SummerShipyardIcon.png",
    "new_path": "/skins/165/Attack_I490/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/165/PartyBanner.png",
    "new_path": "/skins/165/The_Ballrooms_Lucky_Star/Banner.png"
  },
  {
    "old_path": "/images/skins/165/PartyIcon.png",
    "new_path": "/skins/165/The_Ballrooms_Lucky_Star/Icon.png"
  },
  {
    "old_path": "/images/skins/165/PartyChibiIcon.png",
    "new_path": "/skins/165/The_Ballrooms_Lucky_Star/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/165/PartyShipyardIcon.png",
    "new_path": "/skins/165/The_Ballrooms_Lucky_Star/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/165/SchoolBanner.png",
    "new_path": "/skins/165/Lucky_Chocolate/Banner.png"
  },
  {
    "old_path": "/images/skins/165/SchoolIcon.png",
    "new_path": "/skins/165/Lucky_Chocolate/Icon.png"
  },
  {
    "old_path": "/images/skins/165/SchoolChibiIcon.png",
    "new_path": "/skins/165/Lucky_Chocolate/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/165/SchoolShipyardIcon.png",
    "new_path": "/skins/165/Lucky_Chocolate/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/268/Banner.png",
    "new_path": "/skins/268/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/268/Icon.png",
    "new_path": "/skins/268/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/268/ChibiIcon.png",
    "new_path": "/skins/268/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/268/ShipyardIcon.png",
    "new_path": "/skins/268/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/268/BunnyBanner.png",
    "new_path": "/skins/268/Worlds_Speediest_Bunny_Waitress/Banner.png"
  },
  {
    "old_path": "/images/skins/268/BunnyIcon.png",
    "new_path": "/skins/268/Worlds_Speediest_Bunny_Waitress/Icon.png"
  },
  {
    "old_path": "/images/skins/268/BunnyChibiIcon.png",
    "new_path": "/skins/268/Worlds_Speediest_Bunny_Waitress/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/268/BunnyShipyardIcon.png",
    "new_path": "/skins/268/Worlds_Speediest_Bunny_Waitress/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/231/Banner.png",
    "new_path": "/skins/231/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/231/Icon.png",
    "new_path": "/skins/231/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/231/ChibiIcon.png",
    "new_path": "/skins/231/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/231/ShipyardIcon.png",
    "new_path": "/skins/231/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/231/PartyBanner.png",
    "new_path": "/skins/231/Dreams_of_the_Hazy_Moon/Banner.png"
  },
  {
    "old_path": "/images/skins/231/PartyIcon.png",
    "new_path": "/skins/231/Dreams_of_the_Hazy_Moon/Icon.png"
  },
  {
    "old_path": "/images/skins/231/PartyChibiIcon.png",
    "new_path": "/skins/231/Dreams_of_the_Hazy_Moon/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/231/PartyShipyardIcon.png",
    "new_path": "/skins/231/Dreams_of_the_Hazy_Moon/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Collab051/Banner.png",
    "new_path": "/skins/Collab051/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/Collab051/Icon.png",
    "new_path": "/skins/Collab051/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/Collab051/ChibiIcon.png",
    "new_path": "/skins/Collab051/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Collab051/ShipyardIcon.png",
    "new_path": "/skins/Collab051/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Collab051/SummerBanner.png",
    "new_path": "/skins/Collab051/Beachside_Fox/Banner.png"
  },
  {
    "old_path": "/images/skins/Collab051/SummerIcon.png",
    "new_path": "/skins/Collab051/Beachside_Fox/Icon.png"
  },
  {
    "old_path": "/images/skins/Collab051/SummerChibiIcon.png",
    "new_path": "/skins/Collab051/Beachside_Fox/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Collab051/SummerShipyardIcon.png",
    "new_path": "/skins/Collab051/Beachside_Fox/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/168/Banner.png",
    "new_path": "/skins/168/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/168/Icon.png",
    "new_path": "/skins/168/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/168/ChibiIcon.png",
    "new_path": "/skins/168/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/168/ShipyardIcon.png",
    "new_path": "/skins/168/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/168/KaiBanner.png",
    "new_path": "/skins/168/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/168/KaiIcon.png",
    "new_path": "/skins/168/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/168/KaiChibiIcon.png",
    "new_path": "/skins/168/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/168/KaiShipyardIcon.png",
    "new_path": "/skins/168/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/168/EventBanner.png",
    "new_path": "/skins/168/Mooncake_Merchant/Banner.png"
  },
  {
    "old_path": "/images/skins/168/EventIcon.png",
    "new_path": "/skins/168/Mooncake_Merchant/Icon.png"
  },
  {
    "old_path": "/images/skins/168/EventChibiIcon.png",
    "new_path": "/skins/168/Mooncake_Merchant/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/168/EventShipyardIcon.png",
    "new_path": "/skins/168/Mooncake_Merchant/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/163/Banner.png",
    "new_path": "/skins/163/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/163/Icon.png",
    "new_path": "/skins/163/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/163/ChibiIcon.png",
    "new_path": "/skins/163/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/163/ShipyardIcon.png",
    "new_path": "/skins/163/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/163/MaidIcon.png",
    "new_path": "/skins/163/Is_The_Order_A_Torpedo/Icon.png"
  },
  {
    "old_path": "/images/skins/163/MaidChibiIcon.png",
    "new_path": "/skins/163/Is_The_Order_A_Torpedo/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/163/MaidShipyardIcon.png",
    "new_path": "/skins/163/Is_The_Order_A_Torpedo/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/152/Banner.png",
    "new_path": "/skins/152/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/152/Icon.png",
    "new_path": "/skins/152/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/152/ChibiIcon.png",
    "new_path": "/skins/152/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/152/ShipyardIcon.png",
    "new_path": "/skins/152/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/152/SchoolBanner.png",
    "new_path": "/skins/152/Bunny_Breeder/Banner.png"
  },
  {
    "old_path": "/images/skins/152/SchoolIcon.png",
    "new_path": "/skins/152/Bunny_Breeder/Icon.png"
  },
  {
    "old_path": "/images/skins/152/SchoolChibiIcon.png",
    "new_path": "/skins/152/Bunny_Breeder/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/152/SchoolShipyardIcon.png",
    "new_path": "/skins/152/Bunny_Breeder/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/222/Banner.png",
    "new_path": "/skins/222/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/222/Icon.png",
    "new_path": "/skins/222/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/222/ChibiIcon.png",
    "new_path": "/skins/222/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/222/ShipyardIcon.png",
    "new_path": "/skins/222/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/222/KaiBanner.png",
    "new_path": "/skins/222/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/222/KaiIcon.png",
    "new_path": "/skins/222/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/222/KaiChibiIcon.png",
    "new_path": "/skins/222/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/222/KaiShipyardIcon.png",
    "new_path": "/skins/222/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/222/HalloweenBanner.png",
    "new_path": "/skins/222/Patrolling_Witch/Banner.png"
  },
  {
    "old_path": "/images/skins/222/HalloweenIcon.png",
    "new_path": "/skins/222/Patrolling_Witch/Icon.png"
  },
  {
    "old_path": "/images/skins/222/HalloweenChibiIcon.png",
    "new_path": "/skins/222/Patrolling_Witch/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/222/HalloweenShipyardIcon.png",
    "new_path": "/skins/222/Patrolling_Witch/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/228/Banner.png",
    "new_path": "/skins/228/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/228/Icon.png",
    "new_path": "/skins/228/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/228/ChibiIcon.png",
    "new_path": "/skins/228/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/228/ShipyardIcon.png",
    "new_path": "/skins/228/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/228/OriginalShipyardIcon.png",
    "new_path": "/skins/228/Original_Art/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/228/PartyBanner.png",
    "new_path": "/skins/228/The_Crane_that_Dances_With_the_Wind/Banner.png"
  },
  {
    "old_path": "/images/skins/228/PartyIcon.png",
    "new_path": "/skins/228/The_Crane_that_Dances_With_the_Wind/Icon.png"
  },
  {
    "old_path": "/images/skins/228/PartyChibiIcon.png",
    "new_path": "/skins/228/The_Crane_that_Dances_With_the_Wind/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/228/PartyShipyardIcon.png",
    "new_path": "/skins/228/The_Crane_that_Dances_With_the_Wind/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/228/RaceQueenBanner.png",
    "new_path": "/skins/228/Sororal_Wings/Banner.png"
  },
  {
    "old_path": "/images/skins/228/RaceQueenIcon.png",
    "new_path": "/skins/228/Sororal_Wings/Icon.png"
  },
  {
    "old_path": "/images/skins/228/RaceQueenChibiIcon.png",
    "new_path": "/skins/228/Sororal_Wings/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/228/RaceQueenShipyardIcon.png",
    "new_path": "/skins/228/Sororal_Wings/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/120/Banner.png",
    "new_path": "/skins/120/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/120/Icon.png",
    "new_path": "/skins/120/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/120/ChibiIcon.png",
    "new_path": "/skins/120/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/120/ShipyardIcon.png",
    "new_path": "/skins/120/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/026/Banner.png",
    "new_path": "/skins/026/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/026/Icon.png",
    "new_path": "/skins/026/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/026/ChibiIcon.png",
    "new_path": "/skins/026/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/026/ShipyardIcon.png",
    "new_path": "/skins/026/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/026/KaiBanner.png",
    "new_path": "/skins/026/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/026/KaiIcon.png",
    "new_path": "/skins/026/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/026/KaiChibiIcon.png",
    "new_path": "/skins/026/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/026/KaiShipyardIcon.png",
    "new_path": "/skins/026/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/371/Banner.png",
    "new_path": "/skins/371/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/371/Icon.png",
    "new_path": "/skins/371/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/371/ChibiIcon.png",
    "new_path": "/skins/371/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/371/ShipyardIcon.png",
    "new_path": "/skins/371/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/371/PartyBanner.png",
    "new_path": "/skins/371/White_Rose/Banner.png"
  },
  {
    "old_path": "/images/skins/371/PartyIcon.png",
    "new_path": "/skins/371/White_Rose/Icon.png"
  },
  {
    "old_path": "/images/skins/371/PartyChibiIcon.png",
    "new_path": "/skins/371/White_Rose/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/371/PartyShipyardIcon.png",
    "new_path": "/skins/371/White_Rose/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/371/SummerBanner.png",
    "new_path": "/skins/371/ScorchingHot_Seirios/Banner.png"
  },
  {
    "old_path": "/images/skins/371/SummerIcon.png",
    "new_path": "/skins/371/ScorchingHot_Seirios/Icon.png"
  },
  {
    "old_path": "/images/skins/371/SummerChibiIcon.png",
    "new_path": "/skins/371/ScorchingHot_Seirios/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/371/SummerShipyardIcon.png",
    "new_path": "/skins/371/ScorchingHot_Seirios/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/371/SpringBanner.png",
    "new_path": "/skins/371/Azure_Horizons/Banner.png"
  },
  {
    "old_path": "/images/skins/371/SpringIcon.png",
    "new_path": "/skins/371/Azure_Horizons/Icon.png"
  },
  {
    "old_path": "/images/skins/371/SpringChibiIcon.png",
    "new_path": "/skins/371/Azure_Horizons/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/371/SpringShipyardIcon.png",
    "new_path": "/skins/371/Azure_Horizons/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/417/Banner.png",
    "new_path": "/skins/417/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/417/Icon.png",
    "new_path": "/skins/417/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/417/ChibiIcon.png",
    "new_path": "/skins/417/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/417/ShipyardIcon.png",
    "new_path": "/skins/417/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/417/HalloweenBanner.png",
    "new_path": "/skins/417/Candy_Courier/Banner.png"
  },
  {
    "old_path": "/images/skins/417/HalloweenIcon.png",
    "new_path": "/skins/417/Candy_Courier/Icon.png"
  },
  {
    "old_path": "/images/skins/417/HalloweenChibiIcon.png",
    "new_path": "/skins/417/Candy_Courier/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/417/HalloweenShipyardIcon.png",
    "new_path": "/skins/417/Candy_Courier/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/537/Banner.png",
    "new_path": "/skins/537/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/537/Icon.png",
    "new_path": "/skins/537/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/537/ChibiIcon.png",
    "new_path": "/skins/537/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/537/ShipyardIcon.png",
    "new_path": "/skins/537/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/537/Special_ExerciseBanner.png",
    "new_path": "/skins/537/The_Machinery_of_Life/Banner.png"
  },
  {
    "old_path": "/images/skins/537/Special_ExerciseIcon.png",
    "new_path": "/skins/537/The_Machinery_of_Life/Icon.png"
  },
  {
    "old_path": "/images/skins/537/Special_ExerciseChibiIcon.png",
    "new_path": "/skins/537/The_Machinery_of_Life/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/537/Special_ExerciseShipyardIcon.png",
    "new_path": "/skins/537/The_Machinery_of_Life/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/226/Banner.png",
    "new_path": "/skins/226/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/226/Icon.png",
    "new_path": "/skins/226/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/226/ChibiIcon.png",
    "new_path": "/skins/226/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/226/ShipyardIcon.png",
    "new_path": "/skins/226/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/226/KaiBanner.png",
    "new_path": "/skins/226/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/226/KaiIcon.png",
    "new_path": "/skins/226/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/226/KaiChibiIcon.png",
    "new_path": "/skins/226/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/226/KaiShipyardIcon.png",
    "new_path": "/skins/226/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/226/New_YearBanner.png",
    "new_path": "/skins/226/The_Crane_Amidst_the_Pines/Banner.png"
  },
  {
    "old_path": "/images/skins/226/New_YearChibiIcon.png",
    "new_path": "/skins/226/The_Crane_Amidst_the_Pines/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/226/New_YearShipyardIcon.png",
    "new_path": "/skins/226/The_Crane_Amidst_the_Pines/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/226/SchoolBanner.png",
    "new_path": "/skins/226/The_Counselor_Girl/Banner.png"
  },
  {
    "old_path": "/images/skins/226/SchoolChibiIcon.png",
    "new_path": "/skins/226/The_Counselor_Girl/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/226/SchoolShipyardIcon.png",
    "new_path": "/skins/226/The_Counselor_Girl/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/30004/Banner.png",
    "new_path": "/skins/30004/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/30004/Icon.png",
    "new_path": "/skins/30004/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/30004/ShipyardIcon.png",
    "new_path": "/skins/30004/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/065/Banner.png",
    "new_path": "/skins/065/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/065/Icon.png",
    "new_path": "/skins/065/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/065/ChibiIcon.png",
    "new_path": "/skins/065/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/065/ShipyardIcon.png",
    "new_path": "/skins/065/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/065/PartyBanner.png",
    "new_path": "/skins/065/Solo_Concert/Banner.png"
  },
  {
    "old_path": "/images/skins/065/PartyIcon.png",
    "new_path": "/skins/065/Solo_Concert/Icon.png"
  },
  {
    "old_path": "/images/skins/065/PartyChibiIcon.png",
    "new_path": "/skins/065/Solo_Concert/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/065/PartyShipyardIcon.png",
    "new_path": "/skins/065/Solo_Concert/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/110/Banner.png",
    "new_path": "/skins/110/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/110/Icon.png",
    "new_path": "/skins/110/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/110/ChibiIcon.png",
    "new_path": "/skins/110/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/110/ShipyardIcon.png",
    "new_path": "/skins/110/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/110/New_YearBanner.png",
    "new_path": "/skins/110/New_Years_Little_Knight/Banner.png"
  },
  {
    "old_path": "/images/skins/110/New_YearIcon.png",
    "new_path": "/skins/110/New_Years_Little_Knight/Icon.png"
  },
  {
    "old_path": "/images/skins/110/New_YearChibiIcon.png",
    "new_path": "/skins/110/New_Years_Little_Knight/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/110/New_YearShipyardIcon.png",
    "new_path": "/skins/110/New_Years_Little_Knight/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/110/MaidBanner.png",
    "new_path": "/skins/110/Afternoon_Impromptu/Banner.png"
  },
  {
    "old_path": "/images/skins/110/MaidIcon.png",
    "new_path": "/skins/110/Afternoon_Impromptu/Icon.png"
  },
  {
    "old_path": "/images/skins/110/MaidChibiIcon.png",
    "new_path": "/skins/110/Afternoon_Impromptu/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/110/MaidShipyardIcon.png",
    "new_path": "/skins/110/Afternoon_Impromptu/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/440/Banner.png",
    "new_path": "/skins/440/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/440/Icon.png",
    "new_path": "/skins/440/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/440/ChibiIcon.png",
    "new_path": "/skins/440/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/440/ShipyardIcon.png",
    "new_path": "/skins/440/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/440/CasualBanner.png",
    "new_path": "/skins/440/Relaxation_Stratagem/Banner.png"
  },
  {
    "old_path": "/images/skins/440/CasualIcon.png",
    "new_path": "/skins/440/Relaxation_Stratagem/Icon.png"
  },
  {
    "old_path": "/images/skins/440/CasualChibiIcon.png",
    "new_path": "/skins/440/Relaxation_Stratagem/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/440/CasualShipyardIcon.png",
    "new_path": "/skins/440/Relaxation_Stratagem/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/441/Banner.png",
    "new_path": "/skins/441/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/441/Icon.png",
    "new_path": "/skins/441/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/441/ChibiIcon.png",
    "new_path": "/skins/441/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/441/ShipyardIcon.png",
    "new_path": "/skins/441/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/441/PrisonBanner.png",
    "new_path": "/skins/441/The_Lackadaisical_Lookout/Banner.png"
  },
  {
    "old_path": "/images/skins/441/PrisonIcon.png",
    "new_path": "/skins/441/The_Lackadaisical_Lookout/Icon.png"
  },
  {
    "old_path": "/images/skins/441/PrisonChibiIcon.png",
    "new_path": "/skins/441/The_Lackadaisical_Lookout/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/441/PrisonShipyardIcon.png",
    "new_path": "/skins/441/The_Lackadaisical_Lookout/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/003/Banner.png",
    "new_path": "/skins/003/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/003/Icon.png",
    "new_path": "/skins/003/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/003/ChibiIcon.png",
    "new_path": "/skins/003/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/003/ShipyardIcon.png",
    "new_path": "/skins/003/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/017/Banner.png",
    "new_path": "/skins/017/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/017/Icon.png",
    "new_path": "/skins/017/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/017/ChibiIcon.png",
    "new_path": "/skins/017/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/017/ShipyardIcon.png",
    "new_path": "/skins/017/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/305/Banner.png",
    "new_path": "/skins/305/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/305/Icon.png",
    "new_path": "/skins/305/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/305/ChibiIcon.png",
    "new_path": "/skins/305/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/305/ShipyardIcon.png",
    "new_path": "/skins/305/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/305/SpringChibiIcon.png",
    "new_path": "/skins/305/Blue_and_White_Pottery/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/305/SpringShipyardIcon.png",
    "new_path": "/skins/305/Blue_and_White_Pottery/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/305/New_YearBanner.png",
    "new_path": "/skins/305/Spirits_in_the_Snow/Banner.png"
  },
  {
    "old_path": "/images/skins/305/New_YearIcon.png",
    "new_path": "/skins/305/Spirits_in_the_Snow/Icon.png"
  },
  {
    "old_path": "/images/skins/305/New_YearChibiIcon.png",
    "new_path": "/skins/305/Spirits_in_the_Snow/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/305/New_YearShipyardIcon.png",
    "new_path": "/skins/305/Spirits_in_the_Snow/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/305/PartyBanner.png",
    "new_path": "/skins/305/Luxurious_Wheels/Banner.png"
  },
  {
    "old_path": "/images/skins/305/PartyIcon.png",
    "new_path": "/skins/305/Luxurious_Wheels/Icon.png"
  },
  {
    "old_path": "/images/skins/305/PartyChibiIcon.png",
    "new_path": "/skins/305/Luxurious_Wheels/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/305/PartyShipyardIcon.png",
    "new_path": "/skins/305/Luxurious_Wheels/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/409/Banner.png",
    "new_path": "/skins/409/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/409/Icon.png",
    "new_path": "/skins/409/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/409/ChibiIcon.png",
    "new_path": "/skins/409/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/409/ShipyardIcon.png",
    "new_path": "/skins/409/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/509/Banner.png",
    "new_path": "/skins/509/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/509/Icon.png",
    "new_path": "/skins/509/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/509/ChibiIcon.png",
    "new_path": "/skins/509/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/509/ShipyardIcon.png",
    "new_path": "/skins/509/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/509/BunnyBanner.png",
    "new_path": "/skins/509/Chillaxation_Station/Banner.png"
  },
  {
    "old_path": "/images/skins/509/BunnyIcon.png",
    "new_path": "/skins/509/Chillaxation_Station/Icon.png"
  },
  {
    "old_path": "/images/skins/509/BunnyChibiIcon.png",
    "new_path": "/skins/509/Chillaxation_Station/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/509/BunnyShipyardIcon.png",
    "new_path": "/skins/509/Chillaxation_Station/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/491/Banner.png",
    "new_path": "/skins/491/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/491/Icon.png",
    "new_path": "/skins/491/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/491/ChibiIcon.png",
    "new_path": "/skins/491/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/491/ShipyardIcon.png",
    "new_path": "/skins/491/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/491/CasualBanner.png",
    "new_path": "/skins/491/No_Snow_No_Life/Banner.png"
  },
  {
    "old_path": "/images/skins/491/CasualIcon.png",
    "new_path": "/skins/491/No_Snow_No_Life/Icon.png"
  },
  {
    "old_path": "/images/skins/491/CasualChibiIcon.png",
    "new_path": "/skins/491/No_Snow_No_Life/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/491/CasualShipyardIcon.png",
    "new_path": "/skins/491/No_Snow_No_Life/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/122/Banner.png",
    "new_path": "/skins/122/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/122/Icon.png",
    "new_path": "/skins/122/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/122/ChibiIcon.png",
    "new_path": "/skins/122/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/122/ShipyardIcon.png",
    "new_path": "/skins/122/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/122/KaiBanner.png",
    "new_path": "/skins/122/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/122/KaiIcon.png",
    "new_path": "/skins/122/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/122/KaiChibiIcon.png",
    "new_path": "/skins/122/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/122/KaiShipyardIcon.png",
    "new_path": "/skins/122/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Collab044/Banner.png",
    "new_path": "/skins/Collab044/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/Collab044/Icon.png",
    "new_path": "/skins/Collab044/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/Collab044/ChibiIcon.png",
    "new_path": "/skins/Collab044/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Collab044/ShipyardIcon.png",
    "new_path": "/skins/Collab044/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/350/Banner.png",
    "new_path": "/skins/350/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/350/Icon.png",
    "new_path": "/skins/350/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/350/ChibiIcon.png",
    "new_path": "/skins/350/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/350/ShipyardIcon.png",
    "new_path": "/skins/350/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/350/CasualBanner.png",
    "new_path": "/skins/350/Shopping_Time/Banner.png"
  },
  {
    "old_path": "/images/skins/350/CasualIcon.png",
    "new_path": "/skins/350/Shopping_Time/Icon.png"
  },
  {
    "old_path": "/images/skins/350/CasualChibiIcon.png",
    "new_path": "/skins/350/Shopping_Time/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/350/CasualShipyardIcon.png",
    "new_path": "/skins/350/Shopping_Time/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/350/SummerBanner.png",
    "new_path": "/skins/350/Loisirs_Balnaires/Banner.png"
  },
  {
    "old_path": "/images/skins/350/SummerIcon.png",
    "new_path": "/skins/350/Loisirs_Balnaires/Icon.png"
  },
  {
    "old_path": "/images/skins/350/SummerChibiIcon.png",
    "new_path": "/skins/350/Loisirs_Balnaires/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/350/SummerShipyardIcon.png",
    "new_path": "/skins/350/Loisirs_Balnaires/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/425/Banner.png",
    "new_path": "/skins/425/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/425/Icon.png",
    "new_path": "/skins/425/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/425/ChibiIcon.png",
    "new_path": "/skins/425/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/425/ShipyardIcon.png",
    "new_path": "/skins/425/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/425/New_YearBanner.png",
    "new_path": "/skins/425/Hundred_Flowers_Auspice/Banner.png"
  },
  {
    "old_path": "/images/skins/425/New_YearIcon.png",
    "new_path": "/skins/425/Hundred_Flowers_Auspice/Icon.png"
  },
  {
    "old_path": "/images/skins/425/New_YearChibiIcon.png",
    "new_path": "/skins/425/Hundred_Flowers_Auspice/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/425/New_YearShipyardIcon.png",
    "new_path": "/skins/425/Hundred_Flowers_Auspice/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/425/SchoolBanner.png",
    "new_path": "/skins/425/Straightfaced_Model_Student/Banner.png"
  },
  {
    "old_path": "/images/skins/425/SchoolIcon.png",
    "new_path": "/skins/425/Straightfaced_Model_Student/Icon.png"
  },
  {
    "old_path": "/images/skins/425/SchoolChibiIcon.png",
    "new_path": "/skins/425/Straightfaced_Model_Student/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/425/SchoolShipyardIcon.png",
    "new_path": "/skins/425/Straightfaced_Model_Student/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/425/ChristmasBanner.png",
    "new_path": "/skins/425/Uneventful_Holiday_Greetings/Banner.png"
  },
  {
    "old_path": "/images/skins/425/ChristmasIcon.png",
    "new_path": "/skins/425/Uneventful_Holiday_Greetings/Icon.png"
  },
  {
    "old_path": "/images/skins/425/ChristmasChibiIcon.png",
    "new_path": "/skins/425/Uneventful_Holiday_Greetings/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/425/ChristmasShipyardIcon.png",
    "new_path": "/skins/425/Uneventful_Holiday_Greetings/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/337/Banner.png",
    "new_path": "/skins/337/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/337/Icon.png",
    "new_path": "/skins/337/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/337/ChibiIcon.png",
    "new_path": "/skins/337/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/337/ShipyardIcon.png",
    "new_path": "/skins/337/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/337/SummerBanner.png",
    "new_path": "/skins/337/Sunlit_Tulips/Banner.png"
  },
  {
    "old_path": "/images/skins/337/SummerIcon.png",
    "new_path": "/skins/337/Sunlit_Tulips/Icon.png"
  },
  {
    "old_path": "/images/skins/337/SummerChibiIcon.png",
    "new_path": "/skins/337/Sunlit_Tulips/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/337/SummerShipyardIcon.png",
    "new_path": "/skins/337/Sunlit_Tulips/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/337/PartyBanner.png",
    "new_path": "/skins/337/Wine_and_Red_Roses/Banner.png"
  },
  {
    "old_path": "/images/skins/337/PartyIcon.png",
    "new_path": "/skins/337/Wine_and_Red_Roses/Icon.png"
  },
  {
    "old_path": "/images/skins/337/PartyChibiIcon.png",
    "new_path": "/skins/337/Wine_and_Red_Roses/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/337/PartyShipyardIcon.png",
    "new_path": "/skins/337/Wine_and_Red_Roses/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/468/Banner.png",
    "new_path": "/skins/468/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/468/Icon.png",
    "new_path": "/skins/468/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/468/ChibiIcon.png",
    "new_path": "/skins/468/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/468/ShipyardIcon.png",
    "new_path": "/skins/468/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/468/SummerBanner.png",
    "new_path": "/skins/468/Suzutsuki_Beachside_Attendant/Banner.png"
  },
  {
    "old_path": "/images/skins/468/SummerIcon.png",
    "new_path": "/skins/468/Suzutsuki_Beachside_Attendant/Icon.png"
  },
  {
    "old_path": "/images/skins/468/SummerChibiIcon.png",
    "new_path": "/skins/468/Suzutsuki_Beachside_Attendant/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/468/SummerShipyardIcon.png",
    "new_path": "/skins/468/Suzutsuki_Beachside_Attendant/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/468/New_YearBanner.png",
    "new_path": "/skins/468/Suzutsuki_Hanetsuki_Adept/Banner.png"
  },
  {
    "old_path": "/images/skins/468/New_YearIcon.png",
    "new_path": "/skins/468/Suzutsuki_Hanetsuki_Adept/Icon.png"
  },
  {
    "old_path": "/images/skins/468/New_YearChibiIcon.png",
    "new_path": "/skins/468/Suzutsuki_Hanetsuki_Adept/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/468/New_YearShipyardIcon.png",
    "new_path": "/skins/468/Suzutsuki_Hanetsuki_Adept/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/382/Banner.png",
    "new_path": "/skins/382/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/382/Icon.png",
    "new_path": "/skins/382/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/382/ChibiIcon.png",
    "new_path": "/skins/382/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/382/ShipyardIcon.png",
    "new_path": "/skins/382/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/393/Banner.png",
    "new_path": "/skins/393/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/393/Icon.png",
    "new_path": "/skins/393/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/393/ChibiIcon.png",
    "new_path": "/skins/393/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/393/ShipyardIcon.png",
    "new_path": "/skins/393/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/393/SchoolBanner.png",
    "new_path": "/skins/393/Study_Hall_Cyclamen/Banner.png"
  },
  {
    "old_path": "/images/skins/393/SchoolIcon.png",
    "new_path": "/skins/393/Study_Hall_Cyclamen/Icon.png"
  },
  {
    "old_path": "/images/skins/393/SchoolChibiIcon.png",
    "new_path": "/skins/393/Study_Hall_Cyclamen/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/393/SchoolShipyardIcon.png",
    "new_path": "/skins/393/Study_Hall_Cyclamen/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/393/SpringBanner.png",
    "new_path": "/skins/393/Beauty_of_White_Jade/Banner.png"
  },
  {
    "old_path": "/images/skins/393/SpringIcon.png",
    "new_path": "/skins/393/Beauty_of_White_Jade/Icon.png"
  },
  {
    "old_path": "/images/skins/393/SpringChibiIcon.png",
    "new_path": "/skins/393/Beauty_of_White_Jade/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/393/SpringShipyardIcon.png",
    "new_path": "/skins/393/Beauty_of_White_Jade/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/393/SummerBanner.png",
    "new_path": "/skins/393/Midsummer_Special_Service/Banner.png"
  },
  {
    "old_path": "/images/skins/393/SummerIcon.png",
    "new_path": "/skins/393/Midsummer_Special_Service/Icon.png"
  },
  {
    "old_path": "/images/skins/393/SummerChibiIcon.png",
    "new_path": "/skins/393/Midsummer_Special_Service/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/393/SummerShipyardIcon.png",
    "new_path": "/skins/393/Midsummer_Special_Service/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/256/Banner.png",
    "new_path": "/skins/256/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/256/Icon.png",
    "new_path": "/skins/256/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/256/ChibiIcon.png",
    "new_path": "/skins/256/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/256/ShipyardIcon.png",
    "new_path": "/skins/256/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/256/SpringBanner.png",
    "new_path": "/skins/256/The_Golden_Dragons_Festivities/Banner.png"
  },
  {
    "old_path": "/images/skins/256/SpringIcon.png",
    "new_path": "/skins/256/The_Golden_Dragons_Festivities/Icon.png"
  },
  {
    "old_path": "/images/skins/256/SpringChibiIcon.png",
    "new_path": "/skins/256/The_Golden_Dragons_Festivities/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/256/SpringShipyardIcon.png",
    "new_path": "/skins/256/The_Golden_Dragons_Festivities/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/230/Banner.png",
    "new_path": "/skins/230/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/230/Icon.png",
    "new_path": "/skins/230/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/230/ChibiIcon.png",
    "new_path": "/skins/230/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/230/ShipyardIcon.png",
    "new_path": "/skins/230/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/230/WeddingBanner.png",
    "new_path": "/skins/230/Wedding/Banner.png"
  },
  {
    "old_path": "/images/skins/230/WeddingIcon.png",
    "new_path": "/skins/230/Wedding/Icon.png"
  },
  {
    "old_path": "/images/skins/230/WeddingChibiIcon.png",
    "new_path": "/skins/230/Wedding/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/230/WeddingShipyardIcon.png",
    "new_path": "/skins/230/Wedding/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/230/PartyBanner.png",
    "new_path": "/skins/230/Forbidden_Fruit/Banner.png"
  },
  {
    "old_path": "/images/skins/230/PartyIcon.png",
    "new_path": "/skins/230/Forbidden_Fruit/Icon.png"
  },
  {
    "old_path": "/images/skins/230/PartyChibiIcon.png",
    "new_path": "/skins/230/Forbidden_Fruit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/230/PartyShipyardIcon.png",
    "new_path": "/skins/230/Forbidden_Fruit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/230/SpringBanner.png",
    "new_path": "/skins/230/Phoenixs_Spring_Song/Banner.png"
  },
  {
    "old_path": "/images/skins/230/SpringIcon.png",
    "new_path": "/skins/230/Phoenixs_Spring_Song/Icon.png"
  },
  {
    "old_path": "/images/skins/230/SpringChibiIcon.png",
    "new_path": "/skins/230/Phoenixs_Spring_Song/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/230/SpringShipyardIcon.png",
    "new_path": "/skins/230/Phoenixs_Spring_Song/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/230/RaceQueenBanner.png",
    "new_path": "/skins/230/Enraptured_Companion/Banner.png"
  },
  {
    "old_path": "/images/skins/230/RaceQueenIcon.png",
    "new_path": "/skins/230/Enraptured_Companion/Icon.png"
  },
  {
    "old_path": "/images/skins/230/RaceQueenChibiIcon.png",
    "new_path": "/skins/230/Enraptured_Companion/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/230/RaceQueenShipyardIcon.png",
    "new_path": "/skins/230/Enraptured_Companion/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/474/Banner.png",
    "new_path": "/skins/474/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/474/Icon.png",
    "new_path": "/skins/474/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/474/ChibiIcon.png",
    "new_path": "/skins/474/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/474/ShipyardIcon.png",
    "new_path": "/skins/474/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/200/Banner.png",
    "new_path": "/skins/200/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/200/Icon.png",
    "new_path": "/skins/200/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/200/ChibiIcon.png",
    "new_path": "/skins/200/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/200/ShipyardIcon.png",
    "new_path": "/skins/200/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/200/WeddingBanner.png",
    "new_path": "/skins/200/Wedding/Banner.png"
  },
  {
    "old_path": "/images/skins/200/WeddingIcon.png",
    "new_path": "/skins/200/Wedding/Icon.png"
  },
  {
    "old_path": "/images/skins/200/WeddingChibiIcon.png",
    "new_path": "/skins/200/Wedding/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/200/WeddingShipyardIcon.png",
    "new_path": "/skins/200/Wedding/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/200/SummerBanner.png",
    "new_path": "/skins/200/Beach_Rhapsody/Banner.png"
  },
  {
    "old_path": "/images/skins/200/SummerIcon.png",
    "new_path": "/skins/200/Beach_Rhapsody/Icon.png"
  },
  {
    "old_path": "/images/skins/200/SummerChibiIcon.png",
    "new_path": "/skins/200/Beach_Rhapsody/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/200/SummerShipyardIcon.png",
    "new_path": "/skins/200/Beach_Rhapsody/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/200/SpringBanner.png",
    "new_path": "/skins/200/The_Lessons_of_Spring/Banner.png"
  },
  {
    "old_path": "/images/skins/200/SpringIcon.png",
    "new_path": "/skins/200/The_Lessons_of_Spring/Icon.png"
  },
  {
    "old_path": "/images/skins/200/SpringChibiIcon.png",
    "new_path": "/skins/200/The_Lessons_of_Spring/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/200/SpringShipyardIcon.png",
    "new_path": "/skins/200/The_Lessons_of_Spring/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/200/SchoolChibiIcon.png",
    "new_path": "/skins/200/School_Romanza/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/200/SchoolShipyardIcon.png",
    "new_path": "/skins/200/School_Romanza/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/200/RaceQueenBanner.png",
    "new_path": "/skins/200/Full_Throttle_Charmer/Banner.png"
  },
  {
    "old_path": "/images/skins/200/RaceQueenIcon.png",
    "new_path": "/skins/200/Full_Throttle_Charmer/Icon.png"
  },
  {
    "old_path": "/images/skins/200/RaceQueenChibiIcon.png",
    "new_path": "/skins/200/Full_Throttle_Charmer/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/200/RaceQueenShipyardIcon.png",
    "new_path": "/skins/200/Full_Throttle_Charmer/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/496/Banner.png",
    "new_path": "/skins/496/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/496/Icon.png",
    "new_path": "/skins/496/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/496/ChibiIcon.png",
    "new_path": "/skins/496/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/496/ShipyardIcon.png",
    "new_path": "/skins/496/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/496/CasualBanner.png",
    "new_path": "/skins/496/Nostalgic_Pilsner/Banner.png"
  },
  {
    "old_path": "/images/skins/496/CasualIcon.png",
    "new_path": "/skins/496/Nostalgic_Pilsner/Icon.png"
  },
  {
    "old_path": "/images/skins/496/CasualChibiIcon.png",
    "new_path": "/skins/496/Nostalgic_Pilsner/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/496/CasualShipyardIcon.png",
    "new_path": "/skins/496/Nostalgic_Pilsner/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/496/Special_ExerciseBanner.png",
    "new_path": "/skins/496/As_You_Say_Maam/Banner.png"
  },
  {
    "old_path": "/images/skins/496/Special_ExerciseIcon.png",
    "new_path": "/skins/496/As_You_Say_Maam/Icon.png"
  },
  {
    "old_path": "/images/skins/496/Special_ExerciseChibiIcon.png",
    "new_path": "/skins/496/As_You_Say_Maam/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/496/Special_ExerciseShipyardIcon.png",
    "new_path": "/skins/496/As_You_Say_Maam/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/319/Banner.png",
    "new_path": "/skins/319/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/319/Icon.png",
    "new_path": "/skins/319/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/319/ChibiIcon.png",
    "new_path": "/skins/319/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/319/ShipyardIcon.png",
    "new_path": "/skins/319/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/319/KaiBanner.png",
    "new_path": "/skins/319/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/319/KaiIcon.png",
    "new_path": "/skins/319/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/319/KaiChibiIcon.png",
    "new_path": "/skins/319/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/319/KaiShipyardIcon.png",
    "new_path": "/skins/319/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/319/MiscBanner.png",
    "new_path": "/skins/319/Lost_Girl_and_Labyrinth_Butterfly/Banner.png"
  },
  {
    "old_path": "/images/skins/319/MiscIcon.png",
    "new_path": "/skins/319/Lost_Girl_and_Labyrinth_Butterfly/Icon.png"
  },
  {
    "old_path": "/images/skins/319/MiscChibiIcon.png",
    "new_path": "/skins/319/Lost_Girl_and_Labyrinth_Butterfly/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/319/MiscShipyardIcon.png",
    "new_path": "/skins/319/Lost_Girl_and_Labyrinth_Butterfly/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/452/Banner.png",
    "new_path": "/skins/452/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/452/Icon.png",
    "new_path": "/skins/452/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/452/ChibiIcon.png",
    "new_path": "/skins/452/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/452/ShipyardIcon.png",
    "new_path": "/skins/452/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/452/SummerBanner.png",
    "new_path": "/skins/452/Overthinking_Summer/Banner.png"
  },
  {
    "old_path": "/images/skins/452/SummerIcon.png",
    "new_path": "/skins/452/Overthinking_Summer/Icon.png"
  },
  {
    "old_path": "/images/skins/452/SummerChibiIcon.png",
    "new_path": "/skins/452/Overthinking_Summer/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/452/SummerShipyardIcon.png",
    "new_path": "/skins/452/Overthinking_Summer/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/433/Banner.png",
    "new_path": "/skins/433/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/433/Icon.png",
    "new_path": "/skins/433/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/433/ChibiIcon.png",
    "new_path": "/skins/433/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/433/ShipyardIcon.png",
    "new_path": "/skins/433/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/433/PrisonBanner.png",
    "new_path": "/skins/433/The_Bound_Cruiser/Banner.png"
  },
  {
    "old_path": "/images/skins/433/PrisonIcon.png",
    "new_path": "/skins/433/The_Bound_Cruiser/Icon.png"
  },
  {
    "old_path": "/images/skins/433/PrisonChibiIcon.png",
    "new_path": "/skins/433/The_Bound_Cruiser/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/433/PrisonShipyardIcon.png",
    "new_path": "/skins/433/The_Bound_Cruiser/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/433/CasualBanner.png",
    "new_path": "/skins/433/The_Blue_Snoozer/Banner.png"
  },
  {
    "old_path": "/images/skins/433/CasualIcon.png",
    "new_path": "/skins/433/The_Blue_Snoozer/Icon.png"
  },
  {
    "old_path": "/images/skins/433/CasualChibiIcon.png",
    "new_path": "/skins/433/The_Blue_Snoozer/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/433/CasualShipyardIcon.png",
    "new_path": "/skins/433/The_Blue_Snoozer/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/475/Banner.png",
    "new_path": "/skins/475/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/475/Icon.png",
    "new_path": "/skins/475/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/475/ChibiIcon.png",
    "new_path": "/skins/475/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/475/ShipyardIcon.png",
    "new_path": "/skins/475/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/058/Banner.png",
    "new_path": "/skins/058/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/058/Icon.png",
    "new_path": "/skins/058/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/058/ChibiIcon.png",
    "new_path": "/skins/058/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/058/ShipyardIcon.png",
    "new_path": "/skins/058/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/150/Banner.png",
    "new_path": "/skins/150/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/150/Icon.png",
    "new_path": "/skins/150/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/150/ChibiIcon.png",
    "new_path": "/skins/150/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/150/ShipyardIcon.png",
    "new_path": "/skins/150/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/150/HalloweenBanner.png",
    "new_path": "/skins/150/Halloween_Terror/Banner.png"
  },
  {
    "old_path": "/images/skins/150/HalloweenIcon.png",
    "new_path": "/skins/150/Halloween_Terror/Icon.png"
  },
  {
    "old_path": "/images/skins/150/HalloweenChibiIcon.png",
    "new_path": "/skins/150/Halloween_Terror/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/150/HalloweenShipyardIcon.png",
    "new_path": "/skins/150/Halloween_Terror/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/014/Banner.png",
    "new_path": "/skins/014/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/014/Icon.png",
    "new_path": "/skins/014/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/014/ChibiIcon.png",
    "new_path": "/skins/014/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/014/ShipyardIcon.png",
    "new_path": "/skins/014/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/511/Banner.png",
    "new_path": "/skins/511/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/511/Icon.png",
    "new_path": "/skins/511/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/511/ChibiIcon.png",
    "new_path": "/skins/511/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/511/ShipyardIcon.png",
    "new_path": "/skins/511/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/511/BunnyBanner.png",
    "new_path": "/skins/511/Show_Stopper/Banner.png"
  },
  {
    "old_path": "/images/skins/511/BunnyIcon.png",
    "new_path": "/skins/511/Show_Stopper/Icon.png"
  },
  {
    "old_path": "/images/skins/511/BunnyChibiIcon.png",
    "new_path": "/skins/511/Show_Stopper/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/511/BunnyShipyardIcon.png",
    "new_path": "/skins/511/Show_Stopper/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/251/Banner.png",
    "new_path": "/skins/251/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/251/Icon.png",
    "new_path": "/skins/251/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/251/ChibiIcon.png",
    "new_path": "/skins/251/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/251/ShipyardIcon.png",
    "new_path": "/skins/251/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/251/SummerBanner.png",
    "new_path": "/skins/251/SnowMelting_Summer/Banner.png"
  },
  {
    "old_path": "/images/skins/251/SummerIcon.png",
    "new_path": "/skins/251/SnowMelting_Summer/Icon.png"
  },
  {
    "old_path": "/images/skins/251/SummerChibiIcon.png",
    "new_path": "/skins/251/SnowMelting_Summer/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/251/SummerShipyardIcon.png",
    "new_path": "/skins/251/SnowMelting_Summer/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/251/PartyBanner.png",
    "new_path": "/skins/251/Iron_Blood_Snowstorm/Banner.png"
  },
  {
    "old_path": "/images/skins/251/PartyIcon.png",
    "new_path": "/skins/251/Iron_Blood_Snowstorm/Icon.png"
  },
  {
    "old_path": "/images/skins/251/PartyChibiIcon.png",
    "new_path": "/skins/251/Iron_Blood_Snowstorm/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/251/PartyShipyardIcon.png",
    "new_path": "/skins/251/Iron_Blood_Snowstorm/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/251/New_YearBanner.png",
    "new_path": "/skins/251/Seasonal_Pine_and_the_Frost_Flower/Banner.png"
  },
  {
    "old_path": "/images/skins/251/New_YearIcon.png",
    "new_path": "/skins/251/Seasonal_Pine_and_the_Frost_Flower/Icon.png"
  },
  {
    "old_path": "/images/skins/251/New_YearChibiIcon.png",
    "new_path": "/skins/251/Seasonal_Pine_and_the_Frost_Flower/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/251/New_YearShipyardIcon.png",
    "new_path": "/skins/251/Seasonal_Pine_and_the_Frost_Flower/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Collab052/Banner.png",
    "new_path": "/skins/Collab052/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/Collab052/Icon.png",
    "new_path": "/skins/Collab052/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/Collab052/ChibiIcon.png",
    "new_path": "/skins/Collab052/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Collab052/ShipyardIcon.png",
    "new_path": "/skins/Collab052/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Collab052/SummerBanner.png",
    "new_path": "/skins/Collab052/Under_the_Clear_Sky/Banner.png"
  },
  {
    "old_path": "/images/skins/Collab052/SummerIcon.png",
    "new_path": "/skins/Collab052/Under_the_Clear_Sky/Icon.png"
  },
  {
    "old_path": "/images/skins/Collab052/SummerChibiIcon.png",
    "new_path": "/skins/Collab052/Under_the_Clear_Sky/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Collab052/SummerShipyardIcon.png",
    "new_path": "/skins/Collab052/Under_the_Clear_Sky/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/503/Banner.png",
    "new_path": "/skins/503/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/503/Icon.png",
    "new_path": "/skins/503/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/503/ChibiIcon.png",
    "new_path": "/skins/503/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/503/ShipyardIcon.png",
    "new_path": "/skins/503/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/503/SummerBanner.png",
    "new_path": "/skins/503/Shady_Seaside/Banner.png"
  },
  {
    "old_path": "/images/skins/503/SummerIcon.png",
    "new_path": "/skins/503/Shady_Seaside/Icon.png"
  },
  {
    "old_path": "/images/skins/503/SummerChibiIcon.png",
    "new_path": "/skins/503/Shady_Seaside/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/503/SummerShipyardIcon.png",
    "new_path": "/skins/503/Shady_Seaside/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/215/Banner.png",
    "new_path": "/skins/215/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/215/Icon.png",
    "new_path": "/skins/215/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/215/ChibiIcon.png",
    "new_path": "/skins/215/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/215/ShipyardIcon.png",
    "new_path": "/skins/215/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/215/SummerBanner.png",
    "new_path": "/skins/215/Hometown_Zest/Banner.png"
  },
  {
    "old_path": "/images/skins/215/SummerIcon.png",
    "new_path": "/skins/215/Hometown_Zest/Icon.png"
  },
  {
    "old_path": "/images/skins/215/SummerChibiIcon.png",
    "new_path": "/skins/215/Hometown_Zest/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/215/SummerShipyardIcon.png",
    "new_path": "/skins/215/Hometown_Zest/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/414/Banner.png",
    "new_path": "/skins/414/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/414/Icon.png",
    "new_path": "/skins/414/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/414/ChibiIcon.png",
    "new_path": "/skins/414/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/414/ShipyardIcon.png",
    "new_path": "/skins/414/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/414/SummerBanner.png",
    "new_path": "/skins/414/Summers_Hotness/Banner.png"
  },
  {
    "old_path": "/images/skins/414/SummerIcon.png",
    "new_path": "/skins/414/Summers_Hotness/Icon.png"
  },
  {
    "old_path": "/images/skins/414/SummerChibiIcon.png",
    "new_path": "/skins/414/Summers_Hotness/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/414/SummerShipyardIcon.png",
    "new_path": "/skins/414/Summers_Hotness/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/399/Banner.png",
    "new_path": "/skins/399/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/399/Icon.png",
    "new_path": "/skins/399/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/399/ChibiIcon.png",
    "new_path": "/skins/399/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/399/ShipyardIcon.png",
    "new_path": "/skins/399/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/399/SchoolBanner.png",
    "new_path": "/skins/399/Ironbrass_Trombonist/Banner.png"
  },
  {
    "old_path": "/images/skins/399/SchoolIcon.png",
    "new_path": "/skins/399/Ironbrass_Trombonist/Icon.png"
  },
  {
    "old_path": "/images/skins/399/SchoolChibiIcon.png",
    "new_path": "/skins/399/Ironbrass_Trombonist/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/399/SchoolShipyardIcon.png",
    "new_path": "/skins/399/Ironbrass_Trombonist/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/416/Banner.png",
    "new_path": "/skins/416/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/416/Icon.png",
    "new_path": "/skins/416/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/416/ChibiIcon.png",
    "new_path": "/skins/416/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/416/ShipyardIcon.png",
    "new_path": "/skins/416/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/416/SchoolBanner.png",
    "new_path": "/skins/416/Kleiner_Hai/Banner.png"
  },
  {
    "old_path": "/images/skins/416/SchoolIcon.png",
    "new_path": "/skins/416/Kleiner_Hai/Icon.png"
  },
  {
    "old_path": "/images/skins/416/SchoolChibiIcon.png",
    "new_path": "/skins/416/Kleiner_Hai/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/416/SchoolShipyardIcon.png",
    "new_path": "/skins/416/Kleiner_Hai/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/416/CasualBanner.png",
    "new_path": "/skins/416/A_Cute_Sharky_Reverie/Banner.png"
  },
  {
    "old_path": "/images/skins/416/CasualIcon.png",
    "new_path": "/skins/416/A_Cute_Sharky_Reverie/Icon.png"
  },
  {
    "old_path": "/images/skins/416/CasualChibiIcon.png",
    "new_path": "/skins/416/A_Cute_Sharky_Reverie/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/416/CasualShipyardIcon.png",
    "new_path": "/skins/416/A_Cute_Sharky_Reverie/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/416/IdolBanner.png",
    "new_path": "/skins/416/Garnished_Supershark/Banner.png"
  },
  {
    "old_path": "/images/skins/416/IdolIcon.png",
    "new_path": "/skins/416/Garnished_Supershark/Icon.png"
  },
  {
    "old_path": "/images/skins/416/IdolChibiIcon.png",
    "new_path": "/skins/416/Garnished_Supershark/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/416/IdolShipyardIcon.png",
    "new_path": "/skins/416/Garnished_Supershark/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/416/New_YearBanner.png",
    "new_path": "/skins/416/New_Year_Small_Shark/Banner.png"
  },
  {
    "old_path": "/images/skins/416/New_YearIcon.png",
    "new_path": "/skins/416/New_Year_Small_Shark/Icon.png"
  },
  {
    "old_path": "/images/skins/416/New_YearChibiIcon.png",
    "new_path": "/skins/416/New_Year_Small_Shark/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/416/New_YearShipyardIcon.png",
    "new_path": "/skins/416/New_Year_Small_Shark/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/528/Banner.png",
    "new_path": "/skins/528/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/528/Icon.png",
    "new_path": "/skins/528/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/528/ChibiIcon.png",
    "new_path": "/skins/528/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/528/ShipyardIcon.png",
    "new_path": "/skins/528/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/528/MaidBanner.png",
    "new_path": "/skins/528/Maid_Just_for_You/Banner.png"
  },
  {
    "old_path": "/images/skins/528/MaidIcon.png",
    "new_path": "/skins/528/Maid_Just_for_You/Icon.png"
  },
  {
    "old_path": "/images/skins/528/MaidChibiIcon.png",
    "new_path": "/skins/528/Maid_Just_for_You/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/528/MaidShipyardIcon.png",
    "new_path": "/skins/528/Maid_Just_for_You/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/484/Banner.png",
    "new_path": "/skins/484/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/484/Icon.png",
    "new_path": "/skins/484/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/484/ChibiIcon.png",
    "new_path": "/skins/484/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/484/ShipyardIcon.png",
    "new_path": "/skins/484/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/484/New_YearBanner.png",
    "new_path": "/skins/484/New_Years_Nightingale/Banner.png"
  },
  {
    "old_path": "/images/skins/484/New_YearIcon.png",
    "new_path": "/skins/484/New_Years_Nightingale/Icon.png"
  },
  {
    "old_path": "/images/skins/484/New_YearChibiIcon.png",
    "new_path": "/skins/484/New_Years_Nightingale/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/484/New_YearShipyardIcon.png",
    "new_path": "/skins/484/New_Years_Nightingale/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/492/Banner.png",
    "new_path": "/skins/492/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/492/Icon.png",
    "new_path": "/skins/492/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/492/ChibiIcon.png",
    "new_path": "/skins/492/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/492/ShipyardIcon.png",
    "new_path": "/skins/492/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/492/SpringBanner.png",
    "new_path": "/skins/492/Spring_Festival_Scheme/Banner.png"
  },
  {
    "old_path": "/images/skins/492/SpringIcon.png",
    "new_path": "/skins/492/Spring_Festival_Scheme/Icon.png"
  },
  {
    "old_path": "/images/skins/492/SpringChibiIcon.png",
    "new_path": "/skins/492/Spring_Festival_Scheme/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/492/SpringShipyardIcon.png",
    "new_path": "/skins/492/Spring_Festival_Scheme/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/343/Banner.png",
    "new_path": "/skins/343/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/343/Icon.png",
    "new_path": "/skins/343/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/343/ChibiIcon.png",
    "new_path": "/skins/343/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/343/ShipyardIcon.png",
    "new_path": "/skins/343/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/343/BikeChibiIcon.png",
    "new_path": "/skins/343/Rookie_Rider/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/343/BikeShipyardIcon.png",
    "new_path": "/skins/343/Rookie_Rider/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/343/PartyBanner.png",
    "new_path": "/skins/343/Eigenen_Raum/Banner.png"
  },
  {
    "old_path": "/images/skins/343/PartyIcon.png",
    "new_path": "/skins/343/Eigenen_Raum/Icon.png"
  },
  {
    "old_path": "/images/skins/343/PartyChibiIcon.png",
    "new_path": "/skins/343/Eigenen_Raum/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/343/PartyShipyardIcon.png",
    "new_path": "/skins/343/Eigenen_Raum/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/343/MaidBanner.png",
    "new_path": "/skins/343/Urban_Maid/Banner.png"
  },
  {
    "old_path": "/images/skins/343/MaidIcon.png",
    "new_path": "/skins/343/Urban_Maid/Icon.png"
  },
  {
    "old_path": "/images/skins/343/MaidChibiIcon.png",
    "new_path": "/skins/343/Urban_Maid/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/343/MaidShipyardIcon.png",
    "new_path": "/skins/343/Urban_Maid/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/400/Banner.png",
    "new_path": "/skins/400/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/400/Icon.png",
    "new_path": "/skins/400/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/400/ChibiIcon.png",
    "new_path": "/skins/400/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/400/ShipyardIcon.png",
    "new_path": "/skins/400/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/386/Banner.png",
    "new_path": "/skins/386/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/386/Icon.png",
    "new_path": "/skins/386/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/386/ChibiIcon.png",
    "new_path": "/skins/386/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/386/ShipyardIcon.png",
    "new_path": "/skins/386/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/386/PartyBanner.png",
    "new_path": "/skins/386/Party_Knight/Banner.png"
  },
  {
    "old_path": "/images/skins/386/PartyIcon.png",
    "new_path": "/skins/386/Party_Knight/Icon.png"
  },
  {
    "old_path": "/images/skins/386/PartyChibiIcon.png",
    "new_path": "/skins/386/Party_Knight/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/386/PartyShipyardIcon.png",
    "new_path": "/skins/386/Party_Knight/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/344/Banner.png",
    "new_path": "/skins/344/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/344/Icon.png",
    "new_path": "/skins/344/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/344/ChibiIcon.png",
    "new_path": "/skins/344/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/344/ShipyardIcon.png",
    "new_path": "/skins/344/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/387/Banner.png",
    "new_path": "/skins/387/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/387/Icon.png",
    "new_path": "/skins/387/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/387/ChibiIcon.png",
    "new_path": "/skins/387/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/387/ShipyardIcon.png",
    "new_path": "/skins/387/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/387/SchoolBanner.png",
    "new_path": "/skins/387/Science_Rules/Banner.png"
  },
  {
    "old_path": "/images/skins/387/SchoolIcon.png",
    "new_path": "/skins/387/Science_Rules/Icon.png"
  },
  {
    "old_path": "/images/skins/387/SchoolChibiIcon.png",
    "new_path": "/skins/387/Science_Rules/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/387/SchoolShipyardIcon.png",
    "new_path": "/skins/387/Science_Rules/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/387/SpringBanner.png",
    "new_path": "/skins/387/New_Years_Chemistry/Banner.png"
  },
  {
    "old_path": "/images/skins/387/SpringIcon.png",
    "new_path": "/skins/387/New_Years_Chemistry/Icon.png"
  },
  {
    "old_path": "/images/skins/387/SpringChibiIcon.png",
    "new_path": "/skins/387/New_Years_Chemistry/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/387/SpringShipyardIcon.png",
    "new_path": "/skins/387/New_Years_Chemistry/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/341/Banner.png",
    "new_path": "/skins/341/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/341/Icon.png",
    "new_path": "/skins/341/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/341/ChibiIcon.png",
    "new_path": "/skins/341/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/341/ShipyardIcon.png",
    "new_path": "/skins/341/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/341/PartyBanner.png",
    "new_path": "/skins/341/Soft_Serenade/Banner.png"
  },
  {
    "old_path": "/images/skins/341/PartyIcon.png",
    "new_path": "/skins/341/Soft_Serenade/Icon.png"
  },
  {
    "old_path": "/images/skins/341/PartyChibiIcon.png",
    "new_path": "/skins/341/Soft_Serenade/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/341/PartyShipyardIcon.png",
    "new_path": "/skins/341/Soft_Serenade/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/467/Banner.png",
    "new_path": "/skins/467/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/467/Icon.png",
    "new_path": "/skins/467/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/467/ChibiIcon.png",
    "new_path": "/skins/467/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/467/ShipyardIcon.png",
    "new_path": "/skins/467/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/467/CasualBanner.png",
    "new_path": "/skins/467/Secret_Gaming_Session/Banner.png"
  },
  {
    "old_path": "/images/skins/467/CasualIcon.png",
    "new_path": "/skins/467/Secret_Gaming_Session/Icon.png"
  },
  {
    "old_path": "/images/skins/467/CasualChibiIcon.png",
    "new_path": "/skins/467/Secret_Gaming_Session/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/467/CasualShipyardIcon.png",
    "new_path": "/skins/467/Secret_Gaming_Session/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/529/Banner.png",
    "new_path": "/skins/529/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/529/Icon.png",
    "new_path": "/skins/529/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/529/ChibiIcon.png",
    "new_path": "/skins/529/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/529/ShipyardIcon.png",
    "new_path": "/skins/529/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/529/MaidBanner.png",
    "new_path": "/skins/529/Mayhem_Maid/Banner.png"
  },
  {
    "old_path": "/images/skins/529/MaidIcon.png",
    "new_path": "/skins/529/Mayhem_Maid/Icon.png"
  },
  {
    "old_path": "/images/skins/529/MaidChibiIcon.png",
    "new_path": "/skins/529/Mayhem_Maid/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/529/MaidShipyardIcon.png",
    "new_path": "/skins/529/Mayhem_Maid/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/286/Banner.png",
    "new_path": "/skins/286/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/286/Icon.png",
    "new_path": "/skins/286/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/286/ChibiIcon.png",
    "new_path": "/skins/286/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/286/ShipyardIcon.png",
    "new_path": "/skins/286/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/286/BunnyBanner.png",
    "new_path": "/skins/286/Soft_and_Fluffy_Therapy/Banner.png"
  },
  {
    "old_path": "/images/skins/286/BunnyIcon.png",
    "new_path": "/skins/286/Soft_and_Fluffy_Therapy/Icon.png"
  },
  {
    "old_path": "/images/skins/286/BunnyChibiIcon.png",
    "new_path": "/skins/286/Soft_and_Fluffy_Therapy/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/286/BunnyShipyardIcon.png",
    "new_path": "/skins/286/Soft_and_Fluffy_Therapy/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/142/Banner.png",
    "new_path": "/skins/142/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/142/Icon.png",
    "new_path": "/skins/142/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/142/ChibiIcon.png",
    "new_path": "/skins/142/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/142/ShipyardIcon.png",
    "new_path": "/skins/142/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/142/WeddingBanner.png",
    "new_path": "/skins/142/Wedding/Banner.png"
  },
  {
    "old_path": "/images/skins/142/WeddingIcon.png",
    "new_path": "/skins/142/Wedding/Icon.png"
  },
  {
    "old_path": "/images/skins/142/WeddingChibiIcon.png",
    "new_path": "/skins/142/Wedding/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/142/WeddingShipyardIcon.png",
    "new_path": "/skins/142/Wedding/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/142/EventBanner.png",
    "new_path": "/skins/142/Little_Star_Songstress/Banner.png"
  },
  {
    "old_path": "/images/skins/142/EventIcon.png",
    "new_path": "/skins/142/Little_Star_Songstress/Icon.png"
  },
  {
    "old_path": "/images/skins/142/EventChibiIcon.png",
    "new_path": "/skins/142/Little_Star_Songstress/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/142/EventShipyardIcon.png",
    "new_path": "/skins/142/Little_Star_Songstress/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/142/SpringBanner.png",
    "new_path": "/skins/142/The_Gift_of_Spring/Banner.png"
  },
  {
    "old_path": "/images/skins/142/SpringIcon.png",
    "new_path": "/skins/142/The_Gift_of_Spring/Icon.png"
  },
  {
    "old_path": "/images/skins/142/SpringChibiIcon.png",
    "new_path": "/skins/142/The_Gift_of_Spring/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/142/SpringShipyardIcon.png",
    "new_path": "/skins/142/The_Gift_of_Spring/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/142/CasualBanner.png",
    "new_path": "/skins/142/LongAwaited_Date/Banner.png"
  },
  {
    "old_path": "/images/skins/142/CasualIcon.png",
    "new_path": "/skins/142/LongAwaited_Date/Icon.png"
  },
  {
    "old_path": "/images/skins/142/CasualChibiIcon.png",
    "new_path": "/skins/142/LongAwaited_Date/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/142/CasualShipyardIcon.png",
    "new_path": "/skins/142/LongAwaited_Date/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/142/New_YearBanner.png",
    "new_path": "/skins/142/Prayer_of_Plum_and_Snow/Banner.png"
  },
  {
    "old_path": "/images/skins/142/New_YearIcon.png",
    "new_path": "/skins/142/Prayer_of_Plum_and_Snow/Icon.png"
  },
  {
    "old_path": "/images/skins/142/New_YearChibiIcon.png",
    "new_path": "/skins/142/Prayer_of_Plum_and_Snow/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/142/New_YearShipyardIcon.png",
    "new_path": "/skins/142/Prayer_of_Plum_and_Snow/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/142/IdolBanner.png",
    "new_path": "/skins/142/Angelic_Night/Banner.png"
  },
  {
    "old_path": "/images/skins/142/IdolIcon.png",
    "new_path": "/skins/142/Angelic_Night/Icon.png"
  },
  {
    "old_path": "/images/skins/142/IdolChibiIcon.png",
    "new_path": "/skins/142/Angelic_Night/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/142/IdolShipyardIcon.png",
    "new_path": "/skins/142/Angelic_Night/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/142/Casual2Banner.png",
    "new_path": "/skins/142/IcySweet_Storytime/Banner.png"
  },
  {
    "old_path": "/images/skins/142/Casual2Icon.png",
    "new_path": "/skins/142/IcySweet_Storytime/Icon.png"
  },
  {
    "old_path": "/images/skins/142/Casual2ChibiIcon.png",
    "new_path": "/skins/142/IcySweet_Storytime/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/142/Casual2ShipyardIcon.png",
    "new_path": "/skins/142/IcySweet_Storytime/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/001/Banner.png",
    "new_path": "/skins/001/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/001/Icon.png",
    "new_path": "/skins/001/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/001/ChibiIcon.png",
    "new_path": "/skins/001/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/001/ShipyardIcon.png",
    "new_path": "/skins/001/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/001/EventBanner.png",
    "new_path": "/skins/001/Universal_Enhanced_Rigging_Experimental/Banner.png"
  },
  {
    "old_path": "/images/skins/001/EventIcon.png",
    "new_path": "/skins/001/Universal_Enhanced_Rigging_Experimental/Icon.png"
  },
  {
    "old_path": "/images/skins/001/EventChibiIcon.png",
    "new_path": "/skins/001/Universal_Enhanced_Rigging_Experimental/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/001/EventShipyardIcon.png",
    "new_path": "/skins/001/Universal_Enhanced_Rigging_Experimental/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/316/Banner.png",
    "new_path": "/skins/316/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/316/Icon.png",
    "new_path": "/skins/316/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/316/ChibiIcon.png",
    "new_path": "/skins/316/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/316/ShipyardIcon.png",
    "new_path": "/skins/316/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/316/ChristmasBanner.png",
    "new_path": "/skins/316/Seasonal_Shogun/Banner.png"
  },
  {
    "old_path": "/images/skins/316/ChristmasIcon.png",
    "new_path": "/skins/316/Seasonal_Shogun/Icon.png"
  },
  {
    "old_path": "/images/skins/316/ChristmasChibiIcon.png",
    "new_path": "/skins/316/Seasonal_Shogun/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/316/ChristmasShipyardIcon.png",
    "new_path": "/skins/316/Seasonal_Shogun/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/316/SchoolBanner.png",
    "new_path": "/skins/316/SengokuShredder/Banner.png"
  },
  {
    "old_path": "/images/skins/316/SchoolIcon.png",
    "new_path": "/skins/316/SengokuShredder/Icon.png"
  },
  {
    "old_path": "/images/skins/316/SchoolChibiIcon.png",
    "new_path": "/skins/316/SengokuShredder/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/316/SchoolShipyardIcon.png",
    "new_path": "/skins/316/SengokuShredder/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/429/Banner.png",
    "new_path": "/skins/429/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/429/Icon.png",
    "new_path": "/skins/429/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/429/ChibiIcon.png",
    "new_path": "/skins/429/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/429/ShipyardIcon.png",
    "new_path": "/skins/429/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/429/MiscBanner.png",
    "new_path": "/skins/429/Snow_Vanguard/Banner.png"
  },
  {
    "old_path": "/images/skins/429/MiscIcon.png",
    "new_path": "/skins/429/Snow_Vanguard/Icon.png"
  },
  {
    "old_path": "/images/skins/429/MiscChibiIcon.png",
    "new_path": "/skins/429/Snow_Vanguard/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/429/MiscShipyardIcon.png",
    "new_path": "/skins/429/Snow_Vanguard/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Collab034/Banner.png",
    "new_path": "/skins/Collab034/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/Collab034/Icon.png",
    "new_path": "/skins/Collab034/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/Collab034/ChibiIcon.png",
    "new_path": "/skins/Collab034/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Collab034/ShipyardIcon.png",
    "new_path": "/skins/Collab034/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Collab034/CollabBanner.png",
    "new_path": "/skins/Collab034/Uruuru_Utawarerumono/Banner.png"
  },
  {
    "old_path": "/images/skins/Collab034/CollabIcon.png",
    "new_path": "/skins/Collab034/Uruuru_Utawarerumono/Icon.png"
  },
  {
    "old_path": "/images/skins/Collab034/CollabChibiIcon.png",
    "new_path": "/skins/Collab034/Uruuru_Utawarerumono/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Collab034/CollabShipyardIcon.png",
    "new_path": "/skins/Collab034/Uruuru_Utawarerumono/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/274/Banner.png",
    "new_path": "/skins/274/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/274/Icon.png",
    "new_path": "/skins/274/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/274/ChibiIcon.png",
    "new_path": "/skins/274/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/274/ShipyardIcon.png",
    "new_path": "/skins/274/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/274/SleepyBanner.png",
    "new_path": "/skins/274/Sleepy_Uzuki/Banner.png"
  },
  {
    "old_path": "/images/skins/274/SleepyIcon.png",
    "new_path": "/skins/274/Sleepy_Uzuki/Icon.png"
  },
  {
    "old_path": "/images/skins/274/SleepyChibiIcon.png",
    "new_path": "/skins/274/Sleepy_Uzuki/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/274/SleepyShipyardIcon.png",
    "new_path": "/skins/274/Sleepy_Uzuki/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/464/Banner.png",
    "new_path": "/skins/464/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/464/Icon.png",
    "new_path": "/skins/464/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/464/ChibiIcon.png",
    "new_path": "/skins/464/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/464/ShipyardIcon.png",
    "new_path": "/skins/464/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/464/HospitalBanner.png",
    "new_path": "/skins/464/Mischievous_Little_Nurse/Banner.png"
  },
  {
    "old_path": "/images/skins/464/HospitalIcon.png",
    "new_path": "/skins/464/Mischievous_Little_Nurse/Icon.png"
  },
  {
    "old_path": "/images/skins/464/HospitalChibiIcon.png",
    "new_path": "/skins/464/Mischievous_Little_Nurse/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/464/HospitalShipyardIcon.png",
    "new_path": "/skins/464/Mischievous_Little_Nurse/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/464/PartyBanner.png",
    "new_path": "/skins/464/Queen_Valiant_I/Banner.png"
  },
  {
    "old_path": "/images/skins/464/PartyIcon.png",
    "new_path": "/skins/464/Queen_Valiant_I/Icon.png"
  },
  {
    "old_path": "/images/skins/464/PartyChibiIcon.png",
    "new_path": "/skins/464/Queen_Valiant_I/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/464/PartyShipyardIcon.png",
    "new_path": "/skins/464/Queen_Valiant_I/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/103/Banner.png",
    "new_path": "/skins/103/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/103/Icon.png",
    "new_path": "/skins/103/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/103/ChibiIcon.png",
    "new_path": "/skins/103/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/103/ShipyardIcon.png",
    "new_path": "/skins/103/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/103/WeddingBanner.png",
    "new_path": "/skins/103/Wedding/Banner.png"
  },
  {
    "old_path": "/images/skins/103/WeddingIcon.png",
    "new_path": "/skins/103/Wedding/Icon.png"
  },
  {
    "old_path": "/images/skins/103/WeddingChibiIcon.png",
    "new_path": "/skins/103/Wedding/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/103/WeddingShipyardIcon.png",
    "new_path": "/skins/103/Wedding/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/103/SpringIcon.png",
    "new_path": "/skins/103/The_Breath_of_Spring/Icon.png"
  },
  {
    "old_path": "/images/skins/103/SpringChibiIcon.png",
    "new_path": "/skins/103/The_Breath_of_Spring/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/103/SpringShipyardIcon.png",
    "new_path": "/skins/103/The_Breath_of_Spring/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/103/NurseBanner.png",
    "new_path": "/skins/103/Little_Devil_in_White/Banner.png"
  },
  {
    "old_path": "/images/skins/103/NurseIcon.png",
    "new_path": "/skins/103/Little_Devil_in_White/Icon.png"
  },
  {
    "old_path": "/images/skins/103/NurseChibiIcon.png",
    "new_path": "/skins/103/Little_Devil_in_White/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/103/NurseShipyardIcon.png",
    "new_path": "/skins/103/Little_Devil_in_White/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/103/FestivalBanner.png",
    "new_path": "/skins/103/Night_Princesss_Regalia/Banner.png"
  },
  {
    "old_path": "/images/skins/103/FestivalIcon.png",
    "new_path": "/skins/103/Night_Princesss_Regalia/Icon.png"
  },
  {
    "old_path": "/images/skins/103/FestivalChibiIcon.png",
    "new_path": "/skins/103/Night_Princesss_Regalia/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/103/FestivalShipyardIcon.png",
    "new_path": "/skins/103/Night_Princesss_Regalia/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/103/IdolBanner.png",
    "new_path": "/skins/103/Night_Princess_Idol/Banner.png"
  },
  {
    "old_path": "/images/skins/103/IdolIcon.png",
    "new_path": "/skins/103/Night_Princess_Idol/Icon.png"
  },
  {
    "old_path": "/images/skins/103/IdolChibiIcon.png",
    "new_path": "/skins/103/Night_Princess_Idol/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/103/IdolShipyardIcon.png",
    "new_path": "/skins/103/Night_Princess_Idol/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/457/Banner.png",
    "new_path": "/skins/457/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/457/Icon.png",
    "new_path": "/skins/457/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/457/ChibiIcon.png",
    "new_path": "/skins/457/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/457/ShipyardIcon.png",
    "new_path": "/skins/457/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/457/SummerBanner.png",
    "new_path": "/skins/457/Innocent_Summer_Knight/Banner.png"
  },
  {
    "old_path": "/images/skins/457/SummerIcon.png",
    "new_path": "/skins/457/Innocent_Summer_Knight/Icon.png"
  },
  {
    "old_path": "/images/skins/457/SummerChibiIcon.png",
    "new_path": "/skins/457/Innocent_Summer_Knight/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/457/SummerShipyardIcon.png",
    "new_path": "/skins/457/Innocent_Summer_Knight/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/457/PartyBanner.png",
    "new_path": "/skins/457/OneGirl_Orchestra/Banner.png"
  },
  {
    "old_path": "/images/skins/457/PartyIcon.png",
    "new_path": "/skins/457/OneGirl_Orchestra/Icon.png"
  },
  {
    "old_path": "/images/skins/457/PartyChibiIcon.png",
    "new_path": "/skins/457/OneGirl_Orchestra/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/457/PartyShipyardIcon.png",
    "new_path": "/skins/457/OneGirl_Orchestra/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Collab004/Banner.png",
    "new_path": "/skins/Collab004/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/Collab004/Icon.png",
    "new_path": "/skins/Collab004/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/Collab004/ChibiIcon.png",
    "new_path": "/skins/Collab004/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Collab004/ShipyardIcon.png",
    "new_path": "/skins/Collab004/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/080/Banner.png",
    "new_path": "/skins/080/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/080/Icon.png",
    "new_path": "/skins/080/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/080/ChibiIcon.png",
    "new_path": "/skins/080/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/080/ShipyardIcon.png",
    "new_path": "/skins/080/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/080/SummerBanner.png",
    "new_path": "/skins/080/Revigorating_Hestia/Banner.png"
  },
  {
    "old_path": "/images/skins/080/SummerIcon.png",
    "new_path": "/skins/080/Revigorating_Hestia/Icon.png"
  },
  {
    "old_path": "/images/skins/080/SummerChibiIcon.png",
    "new_path": "/skins/080/Revigorating_Hestia/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/080/SummerShipyardIcon.png",
    "new_path": "/skins/080/Revigorating_Hestia/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/146/Banner.png",
    "new_path": "/skins/146/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/146/Icon.png",
    "new_path": "/skins/146/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/146/ChibiIcon.png",
    "new_path": "/skins/146/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/146/ShipyardIcon.png",
    "new_path": "/skins/146/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/146/CasualBanner.png",
    "new_path": "/skins/146/The_Goddess_Day_Off/Banner.png"
  },
  {
    "old_path": "/images/skins/146/CasualIcon.png",
    "new_path": "/skins/146/The_Goddess_Day_Off/Icon.png"
  },
  {
    "old_path": "/images/skins/146/CasualChibiIcon.png",
    "new_path": "/skins/146/The_Goddess_Day_Off/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/146/CasualShipyardIcon.png",
    "new_path": "/skins/146/The_Goddess_Day_Off/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/146/SpringBanner.png",
    "new_path": "/skins/146/Guidance_of_the_Spring_Goddess/Banner.png"
  },
  {
    "old_path": "/images/skins/146/SpringIcon.png",
    "new_path": "/skins/146/Guidance_of_the_Spring_Goddess/Icon.png"
  },
  {
    "old_path": "/images/skins/146/SpringChibiIcon.png",
    "new_path": "/skins/146/Guidance_of_the_Spring_Goddess/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/146/SpringShipyardIcon.png",
    "new_path": "/skins/146/Guidance_of_the_Spring_Goddess/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/048/Banner.png",
    "new_path": "/skins/048/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/048/Icon.png",
    "new_path": "/skins/048/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/048/ChibiIcon.png",
    "new_path": "/skins/048/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/048/ShipyardIcon.png",
    "new_path": "/skins/048/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/048/SleepyBanner.png",
    "new_path": "/skins/048/Sweet_Dreams/Banner.png"
  },
  {
    "old_path": "/images/skins/048/SleepyIcon.png",
    "new_path": "/skins/048/Sweet_Dreams/Icon.png"
  },
  {
    "old_path": "/images/skins/048/SleepyChibiIcon.png",
    "new_path": "/skins/048/Sweet_Dreams/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/048/SleepyShipyardIcon.png",
    "new_path": "/skins/048/Sweet_Dreams/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/048/SchoolBanner.png",
    "new_path": "/skins/048/Leisurely_ABCs/Banner.png"
  },
  {
    "old_path": "/images/skins/048/SchoolIcon.png",
    "new_path": "/skins/048/Leisurely_ABCs/Icon.png"
  },
  {
    "old_path": "/images/skins/048/SchoolChibiIcon.png",
    "new_path": "/skins/048/Leisurely_ABCs/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/048/SchoolShipyardIcon.png",
    "new_path": "/skins/048/Leisurely_ABCs/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/490/Banner.png",
    "new_path": "/skins/490/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/490/Icon.png",
    "new_path": "/skins/490/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/490/ChibiIcon.png",
    "new_path": "/skins/490/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/490/ShipyardIcon.png",
    "new_path": "/skins/490/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/490/PartyBanner.png",
    "new_path": "/skins/490/Fair_Ladys_Invitation/Banner.png"
  },
  {
    "old_path": "/images/skins/490/PartyIcon.png",
    "new_path": "/skins/490/Fair_Ladys_Invitation/Icon.png"
  },
  {
    "old_path": "/images/skins/490/PartyChibiIcon.png",
    "new_path": "/skins/490/Fair_Ladys_Invitation/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/490/PartyShipyardIcon.png",
    "new_path": "/skins/490/Fair_Ladys_Invitation/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/500/Banner.png",
    "new_path": "/skins/500/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/500/Icon.png",
    "new_path": "/skins/500/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/500/ChibiIcon.png",
    "new_path": "/skins/500/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/500/ShipyardIcon.png",
    "new_path": "/skins/500/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/500/SummerBanner.png",
    "new_path": "/skins/500/The_Flower_of_La_Spezia/Banner.png"
  },
  {
    "old_path": "/images/skins/500/SummerIcon.png",
    "new_path": "/skins/500/The_Flower_of_La_Spezia/Icon.png"
  },
  {
    "old_path": "/images/skins/500/SummerChibiIcon.png",
    "new_path": "/skins/500/The_Flower_of_La_Spezia/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/500/SummerShipyardIcon.png",
    "new_path": "/skins/500/The_Flower_of_La_Spezia/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/538/Banner.png",
    "new_path": "/skins/538/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/538/Icon.png",
    "new_path": "/skins/538/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/538/ChibiIcon.png",
    "new_path": "/skins/538/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/538/ShipyardIcon.png",
    "new_path": "/skins/538/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/538/Special_ExerciseBanner.png",
    "new_path": "/skins/538/An_Irresistible_AR_Adventure/Banner.png"
  },
  {
    "old_path": "/images/skins/538/Special_ExerciseIcon.png",
    "new_path": "/skins/538/An_Irresistible_AR_Adventure/Icon.png"
  },
  {
    "old_path": "/images/skins/538/Special_ExerciseChibiIcon.png",
    "new_path": "/skins/538/An_Irresistible_AR_Adventure/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/538/Special_ExerciseShipyardIcon.png",
    "new_path": "/skins/538/An_Irresistible_AR_Adventure/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/173/Banner.png",
    "new_path": "/skins/173/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/173/Icon.png",
    "new_path": "/skins/173/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/173/ChibiIcon.png",
    "new_path": "/skins/173/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/173/ShipyardIcon.png",
    "new_path": "/skins/173/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/173/ChristmasBanner.png",
    "new_path": "/skins/173/Holiday_Special_Wakaba/Banner.png"
  },
  {
    "old_path": "/images/skins/173/ChristmasIcon.png",
    "new_path": "/skins/173/Holiday_Special_Wakaba/Icon.png"
  },
  {
    "old_path": "/images/skins/173/ChristmasChibiIcon.png",
    "new_path": "/skins/173/Holiday_Special_Wakaba/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/173/ChristmasShipyardIcon.png",
    "new_path": "/skins/173/Holiday_Special_Wakaba/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/131/Banner.png",
    "new_path": "/skins/131/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/131/Icon.png",
    "new_path": "/skins/131/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/131/ChibiIcon.png",
    "new_path": "/skins/131/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/131/ShipyardIcon.png",
    "new_path": "/skins/131/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/131/KaiBanner.png",
    "new_path": "/skins/131/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/131/KaiIcon.png",
    "new_path": "/skins/131/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/131/KaiChibiIcon.png",
    "new_path": "/skins/131/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/131/KaiShipyardIcon.png",
    "new_path": "/skins/131/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/131/ChristmasBanner.png",
    "new_path": "/skins/131/Christmas_Warrior/Banner.png"
  },
  {
    "old_path": "/images/skins/131/ChristmasIcon.png",
    "new_path": "/skins/131/Christmas_Warrior/Icon.png"
  },
  {
    "old_path": "/images/skins/131/ChristmasChibiIcon.png",
    "new_path": "/skins/131/Christmas_Warrior/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/131/ChristmasShipyardIcon.png",
    "new_path": "/skins/131/Christmas_Warrior/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/131/IdolBanner.png",
    "new_path": "/skins/131/Under_Pleasure/Banner.png"
  },
  {
    "old_path": "/images/skins/131/IdolIcon.png",
    "new_path": "/skins/131/Under_Pleasure/Icon.png"
  },
  {
    "old_path": "/images/skins/131/IdolChibiIcon.png",
    "new_path": "/skins/131/Under_Pleasure/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/131/IdolShipyardIcon.png",
    "new_path": "/skins/131/Under_Pleasure/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/064/Banner.png",
    "new_path": "/skins/064/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/064/Icon.png",
    "new_path": "/skins/064/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/064/ChibiIcon.png",
    "new_path": "/skins/064/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/064/ShipyardIcon.png",
    "new_path": "/skins/064/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/079/Banner.png",
    "new_path": "/skins/079/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/079/Icon.png",
    "new_path": "/skins/079/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/079/ChibiIcon.png",
    "new_path": "/skins/079/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/079/ShipyardIcon.png",
    "new_path": "/skins/079/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/485/Banner.png",
    "new_path": "/skins/485/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/485/Icon.png",
    "new_path": "/skins/485/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/485/ChibiIcon.png",
    "new_path": "/skins/485/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/485/ShipyardIcon.png",
    "new_path": "/skins/485/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/485/New_YearBanner.png",
    "new_path": "/skins/485/Obsidian_Elegance/Banner.png"
  },
  {
    "old_path": "/images/skins/485/New_YearIcon.png",
    "new_path": "/skins/485/Obsidian_Elegance/Icon.png"
  },
  {
    "old_path": "/images/skins/485/New_YearChibiIcon.png",
    "new_path": "/skins/485/Obsidian_Elegance/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/485/New_YearShipyardIcon.png",
    "new_path": "/skins/485/Obsidian_Elegance/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/485/PartyBanner.png",
    "new_path": "/skins/485/Urbane_Onyx/Banner.png"
  },
  {
    "old_path": "/images/skins/485/PartyIcon.png",
    "new_path": "/skins/485/Urbane_Onyx/Icon.png"
  },
  {
    "old_path": "/images/skins/485/PartyChibiIcon.png",
    "new_path": "/skins/485/Urbane_Onyx/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/485/PartyShipyardIcon.png",
    "new_path": "/skins/485/Urbane_Onyx/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/062/Banner.png",
    "new_path": "/skins/062/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/062/Icon.png",
    "new_path": "/skins/062/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/062/ChibiIcon.png",
    "new_path": "/skins/062/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/062/ShipyardIcon.png",
    "new_path": "/skins/062/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/062/OriginalBanner.png",
    "new_path": "/skins/062/Original_Art/Banner.png"
  },
  {
    "old_path": "/images/skins/062/OriginalIcon.png",
    "new_path": "/skins/062/Original_Art/Icon.png"
  },
  {
    "old_path": "/images/skins/062/OriginalChibiIcon.png",
    "new_path": "/skins/062/Original_Art/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/062/OriginalShipyardIcon.png",
    "new_path": "/skins/062/Original_Art/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Collab007/Banner.png",
    "new_path": "/skins/Collab007/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/Collab007/Icon.png",
    "new_path": "/skins/Collab007/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/Collab007/ChibiIcon.png",
    "new_path": "/skins/Collab007/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Collab007/ShipyardIcon.png",
    "new_path": "/skins/Collab007/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Collab007/CollabIcon.png",
    "new_path": "/skins/Collab007/Goddesses_Humility/Icon.png"
  },
  {
    "old_path": "/images/skins/Collab007/CollabChibiIcon.png",
    "new_path": "/skins/Collab007/Goddesses_Humility/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Collab007/CollabShipyardIcon.png",
    "new_path": "/skins/Collab007/Goddesses_Humility/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/049/Banner.png",
    "new_path": "/skins/049/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/049/Icon.png",
    "new_path": "/skins/049/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/049/ChibiIcon.png",
    "new_path": "/skins/049/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/049/ShipyardIcon.png",
    "new_path": "/skins/049/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/049/PartyBanner.png",
    "new_path": "/skins/049/The_Generals_Banquet/Banner.png"
  },
  {
    "old_path": "/images/skins/049/PartyIcon.png",
    "new_path": "/skins/049/The_Generals_Banquet/Icon.png"
  },
  {
    "old_path": "/images/skins/049/PartyChibiIcon.png",
    "new_path": "/skins/049/The_Generals_Banquet/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/049/PartyShipyardIcon.png",
    "new_path": "/skins/049/The_Generals_Banquet/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/049/HalloweenBanner.png",
    "new_path": "/skins/049/Domineering_Witchita/Banner.png"
  },
  {
    "old_path": "/images/skins/049/HalloweenIcon.png",
    "new_path": "/skins/049/Domineering_Witchita/Icon.png"
  },
  {
    "old_path": "/images/skins/049/HalloweenChibiIcon.png",
    "new_path": "/skins/049/Domineering_Witchita/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/049/HalloweenShipyardIcon.png",
    "new_path": "/skins/049/Domineering_Witchita/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/287/Banner.png",
    "new_path": "/skins/287/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/287/Icon.png",
    "new_path": "/skins/287/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/287/ChibiIcon.png",
    "new_path": "/skins/287/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/287/ShipyardIcon.png",
    "new_path": "/skins/287/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/287/BunnyBanner.png",
    "new_path": "/skins/287/Now_for_a_Magic_Trick/Banner.png"
  },
  {
    "old_path": "/images/skins/287/BunnyIcon.png",
    "new_path": "/skins/287/Now_for_a_Magic_Trick/Icon.png"
  },
  {
    "old_path": "/images/skins/287/BunnyChibiIcon.png",
    "new_path": "/skins/287/Now_for_a_Magic_Trick/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/287/BunnyShipyardIcon.png",
    "new_path": "/skins/287/Now_for_a_Magic_Trick/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/209/Banner.png",
    "new_path": "/skins/209/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/209/Icon.png",
    "new_path": "/skins/209/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/209/ChibiIcon.png",
    "new_path": "/skins/209/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/209/ShipyardIcon.png",
    "new_path": "/skins/209/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/209/KaiBanner.png",
    "new_path": "/skins/209/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/209/KaiIcon.png",
    "new_path": "/skins/209/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/209/KaiChibiIcon.png",
    "new_path": "/skins/209/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/209/KaiShipyardIcon.png",
    "new_path": "/skins/209/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/209/WeddingBanner.png",
    "new_path": "/skins/209/Wedding/Banner.png"
  },
  {
    "old_path": "/images/skins/209/WeddingIcon.png",
    "new_path": "/skins/209/Wedding/Icon.png"
  },
  {
    "old_path": "/images/skins/209/WeddingChibiIcon.png",
    "new_path": "/skins/209/Wedding/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/209/WeddingShipyardIcon.png",
    "new_path": "/skins/209/Wedding/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/209/SummerBanner.png",
    "new_path": "/skins/209/Summer_Offensive/Banner.png"
  },
  {
    "old_path": "/images/skins/209/SummerIcon.png",
    "new_path": "/skins/209/Summer_Offensive/Icon.png"
  },
  {
    "old_path": "/images/skins/209/SummerChibiIcon.png",
    "new_path": "/skins/209/Summer_Offensive/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/209/SummerShipyardIcon.png",
    "new_path": "/skins/209/Summer_Offensive/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/209/ChristmasBanner.png",
    "new_path": "/skins/209/Holiday_Offensive/Banner.png"
  },
  {
    "old_path": "/images/skins/209/ChristmasIcon.png",
    "new_path": "/skins/209/Holiday_Offensive/Icon.png"
  },
  {
    "old_path": "/images/skins/209/ChristmasChibiIcon.png",
    "new_path": "/skins/209/Holiday_Offensive/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/209/ChristmasShipyardIcon.png",
    "new_path": "/skins/209/Holiday_Offensive/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/209/PartyBanner.png",
    "new_path": "/skins/209/Dressy_Black_Cat/Banner.png"
  },
  {
    "old_path": "/images/skins/209/PartyIcon.png",
    "new_path": "/skins/209/Dressy_Black_Cat/Icon.png"
  },
  {
    "old_path": "/images/skins/209/PartyChibiIcon.png",
    "new_path": "/skins/209/Dressy_Black_Cat/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/209/PartyShipyardIcon.png",
    "new_path": "/skins/209/Dressy_Black_Cat/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/209/AtreBanner.png",
    "new_path": "/skins/209/Sales_Clerk_Offensive/Banner.png"
  },
  {
    "old_path": "/images/skins/209/AtreIcon.png",
    "new_path": "/skins/209/Sales_Clerk_Offensive/Icon.png"
  },
  {
    "old_path": "/images/skins/209/AtreChibiIcon.png",
    "new_path": "/skins/209/Sales_Clerk_Offensive/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/209/AtreShipyardIcon.png",
    "new_path": "/skins/209/Sales_Clerk_Offensive/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/209/BeachBanner.png",
    "new_path": "/skins/209/Vacation_Offensive/Banner.png"
  },
  {
    "old_path": "/images/skins/209/BeachIcon.png",
    "new_path": "/skins/209/Vacation_Offensive/Icon.png"
  },
  {
    "old_path": "/images/skins/209/BeachChibiIcon.png",
    "new_path": "/skins/209/Vacation_Offensive/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/209/BeachShipyardIcon.png",
    "new_path": "/skins/209/Vacation_Offensive/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/209/SchoolBanner.png",
    "new_path": "/skins/209/Street_Corner_Offensive/Banner.png"
  },
  {
    "old_path": "/images/skins/209/SchoolIcon.png",
    "new_path": "/skins/209/Street_Corner_Offensive/Icon.png"
  },
  {
    "old_path": "/images/skins/209/SchoolChibiIcon.png",
    "new_path": "/skins/209/Street_Corner_Offensive/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/209/SchoolShipyardIcon.png",
    "new_path": "/skins/209/Street_Corner_Offensive/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/257/Banner.png",
    "new_path": "/skins/257/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/257/Icon.png",
    "new_path": "/skins/257/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/257/ChibiIcon.png",
    "new_path": "/skins/257/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/257/ShipyardIcon.png",
    "new_path": "/skins/257/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/257/WeddingBanner.png",
    "new_path": "/skins/257/Wedding/Banner.png"
  },
  {
    "old_path": "/images/skins/257/WeddingIcon.png",
    "new_path": "/skins/257/Wedding/Icon.png"
  },
  {
    "old_path": "/images/skins/257/WeddingChibiIcon.png",
    "new_path": "/skins/257/Wedding/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/257/WeddingShipyardIcon.png",
    "new_path": "/skins/257/Wedding/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/493/Banner.png",
    "new_path": "/skins/493/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/493/Icon.png",
    "new_path": "/skins/493/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/493/ChibiIcon.png",
    "new_path": "/skins/493/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/493/ShipyardIcon.png",
    "new_path": "/skins/493/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/493/SpringBanner.png",
    "new_path": "/skins/493/Snowy_Pines_Warmth/Banner.png"
  },
  {
    "old_path": "/images/skins/493/SpringIcon.png",
    "new_path": "/skins/493/Snowy_Pines_Warmth/Icon.png"
  },
  {
    "old_path": "/images/skins/493/SpringChibiIcon.png",
    "new_path": "/skins/493/Snowy_Pines_Warmth/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/493/SpringShipyardIcon.png",
    "new_path": "/skins/493/Snowy_Pines_Warmth/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/297/Banner.png",
    "new_path": "/skins/297/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/297/Icon.png",
    "new_path": "/skins/297/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/297/ChibiIcon.png",
    "new_path": "/skins/297/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/297/ShipyardIcon.png",
    "new_path": "/skins/297/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/297/SchoolBanner.png",
    "new_path": "/skins/297/Sports_Festival_Preparations/Banner.png"
  },
  {
    "old_path": "/images/skins/297/SchoolIcon.png",
    "new_path": "/skins/297/Sports_Festival_Preparations/Icon.png"
  },
  {
    "old_path": "/images/skins/297/SchoolChibiIcon.png",
    "new_path": "/skins/297/Sports_Festival_Preparations/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/297/SchoolShipyardIcon.png",
    "new_path": "/skins/297/Sports_Festival_Preparations/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/297/SpringBanner.png",
    "new_path": "/skins/297/Firecrackers_and_Steamed_Buns/Banner.png"
  },
  {
    "old_path": "/images/skins/297/SpringIcon.png",
    "new_path": "/skins/297/Firecrackers_and_Steamed_Buns/Icon.png"
  },
  {
    "old_path": "/images/skins/297/SpringChibiIcon.png",
    "new_path": "/skins/297/Firecrackers_and_Steamed_Buns/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/297/SpringShipyardIcon.png",
    "new_path": "/skins/297/Firecrackers_and_Steamed_Buns/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/125/Banner.png",
    "new_path": "/skins/125/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/125/Icon.png",
    "new_path": "/skins/125/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/125/ChibiIcon.png",
    "new_path": "/skins/125/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/125/ShipyardIcon.png",
    "new_path": "/skins/125/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/125/KaiBanner.png",
    "new_path": "/skins/125/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/125/KaiIcon.png",
    "new_path": "/skins/125/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/125/KaiChibiIcon.png",
    "new_path": "/skins/125/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/125/KaiShipyardIcon.png",
    "new_path": "/skins/125/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/125/WeddingBanner.png",
    "new_path": "/skins/125/Wedding/Banner.png"
  },
  {
    "old_path": "/images/skins/125/WeddingIcon.png",
    "new_path": "/skins/125/Wedding/Icon.png"
  },
  {
    "old_path": "/images/skins/125/WeddingChibiIcon.png",
    "new_path": "/skins/125/Wedding/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/125/WeddingShipyardIcon.png",
    "new_path": "/skins/125/Wedding/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/125/SchoolBanner.png",
    "new_path": "/skins/125/Truth_Seeker/Banner.png"
  },
  {
    "old_path": "/images/skins/125/SchoolIcon.png",
    "new_path": "/skins/125/Truth_Seeker/Icon.png"
  },
  {
    "old_path": "/images/skins/125/SchoolChibiIcon.png",
    "new_path": "/skins/125/Truth_Seeker/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/125/SchoolShipyardIcon.png",
    "new_path": "/skins/125/Truth_Seeker/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/125/SummerBanner.png",
    "new_path": "/skins/125/Summoner_from_the_Azure_Depths/Banner.png"
  },
  {
    "old_path": "/images/skins/125/SummerIcon.png",
    "new_path": "/skins/125/Summoner_from_the_Azure_Depths/Icon.png"
  },
  {
    "old_path": "/images/skins/125/SummerChibiIcon.png",
    "new_path": "/skins/125/Summoner_from_the_Azure_Depths/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/125/SummerShipyardIcon.png",
    "new_path": "/skins/125/Summoner_from_the_Azure_Depths/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/076/Banner.png",
    "new_path": "/skins/076/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/076/Icon.png",
    "new_path": "/skins/076/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/076/ChibiIcon.png",
    "new_path": "/skins/076/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/076/ShipyardIcon.png",
    "new_path": "/skins/076/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/076/PartyBanner.png",
    "new_path": "/skins/076/Evening_I_Cant_Remember/Banner.png"
  },
  {
    "old_path": "/images/skins/076/PartyIcon.png",
    "new_path": "/skins/076/Evening_I_Cant_Remember/Icon.png"
  },
  {
    "old_path": "/images/skins/076/PartyChibiIcon.png",
    "new_path": "/skins/076/Evening_I_Cant_Remember/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/076/PartyShipyardIcon.png",
    "new_path": "/skins/076/Evening_I_Cant_Remember/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/076/TravelBanner.png",
    "new_path": "/skins/076/Saintly_Wings/Banner.png"
  },
  {
    "old_path": "/images/skins/076/TravelIcon.png",
    "new_path": "/skins/076/Saintly_Wings/Icon.png"
  },
  {
    "old_path": "/images/skins/076/TravelChibiIcon.png",
    "new_path": "/skins/076/Saintly_Wings/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/076/TravelShipyardIcon.png",
    "new_path": "/skins/076/Saintly_Wings/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/166/Banner.png",
    "new_path": "/skins/166/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/166/Icon.png",
    "new_path": "/skins/166/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/166/ChibiIcon.png",
    "new_path": "/skins/166/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/166/ShipyardIcon.png",
    "new_path": "/skins/166/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/166/WeddingBanner.png",
    "new_path": "/skins/166/Wedding/Banner.png"
  },
  {
    "old_path": "/images/skins/166/WeddingIcon.png",
    "new_path": "/skins/166/Wedding/Icon.png"
  },
  {
    "old_path": "/images/skins/166/WeddingChibiIcon.png",
    "new_path": "/skins/166/Wedding/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/166/WeddingShipyardIcon.png",
    "new_path": "/skins/166/Wedding/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/166/EventBanner.png",
    "new_path": "/skins/166/Sovereign_of_the_Swing/Banner.png"
  },
  {
    "old_path": "/images/skins/166/EventIcon.png",
    "new_path": "/skins/166/Sovereign_of_the_Swing/Icon.png"
  },
  {
    "old_path": "/images/skins/166/EventChibiIcon.png",
    "new_path": "/skins/166/Sovereign_of_the_Swing/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/166/EventShipyardIcon.png",
    "new_path": "/skins/166/Sovereign_of_the_Swing/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/166/SpringBanner.png",
    "new_path": "/skins/166/Winters_Snowy_Wind/Banner.png"
  },
  {
    "old_path": "/images/skins/166/SpringIcon.png",
    "new_path": "/skins/166/Winters_Snowy_Wind/Icon.png"
  },
  {
    "old_path": "/images/skins/166/SpringChibiIcon.png",
    "new_path": "/skins/166/Winters_Snowy_Wind/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/166/SpringShipyardIcon.png",
    "new_path": "/skins/166/Winters_Snowy_Wind/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/10085/Banner.png",
    "new_path": "/skins/10085/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/10085/Icon.png",
    "new_path": "/skins/10085/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/10085/ChibiIcon.png",
    "new_path": "/skins/10085/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/10085/ShipyardIcon.png",
    "new_path": "/skins/10085/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/10085/CasualBanner.png",
    "new_path": "/skins/10085/A_Dream_Upon_an_Open_Windowsill/Banner.png"
  },
  {
    "old_path": "/images/skins/10085/CasualIcon.png",
    "new_path": "/skins/10085/A_Dream_Upon_an_Open_Windowsill/Icon.png"
  },
  {
    "old_path": "/images/skins/10085/CasualChibiIcon.png",
    "new_path": "/skins/10085/A_Dream_Upon_an_Open_Windowsill/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/10085/CasualShipyardIcon.png",
    "new_path": "/skins/10085/A_Dream_Upon_an_Open_Windowsill/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/185/Banner.png",
    "new_path": "/skins/185/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/185/Icon.png",
    "new_path": "/skins/185/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/185/ChibiIcon.png",
    "new_path": "/skins/185/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/185/ShipyardIcon.png",
    "new_path": "/skins/185/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/185/BunnyBanner.png",
    "new_path": "/skins/185/We_are_Succubi/Banner.png"
  },
  {
    "old_path": "/images/skins/185/BunnyIcon.png",
    "new_path": "/skins/185/We_are_Succubi/Icon.png"
  },
  {
    "old_path": "/images/skins/185/BunnyChibiIcon.png",
    "new_path": "/skins/185/We_are_Succubi/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/185/BunnyShipyardIcon.png",
    "new_path": "/skins/185/We_are_Succubi/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/179/Banner.png",
    "new_path": "/skins/179/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/179/Icon.png",
    "new_path": "/skins/179/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/179/ChibiIcon.png",
    "new_path": "/skins/179/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/179/ShipyardIcon.png",
    "new_path": "/skins/179/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/179/KaiBanner.png",
    "new_path": "/skins/179/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/179/KaiIcon.png",
    "new_path": "/skins/179/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/179/KaiChibiIcon.png",
    "new_path": "/skins/179/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/179/KaiShipyardIcon.png",
    "new_path": "/skins/179/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/164/Banner.png",
    "new_path": "/skins/164/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/164/Icon.png",
    "new_path": "/skins/164/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/164/ChibiIcon.png",
    "new_path": "/skins/164/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/164/ShipyardIcon.png",
    "new_path": "/skins/164/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/164/KaiBanner.png",
    "new_path": "/skins/164/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/164/KaiIcon.png",
    "new_path": "/skins/164/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/164/KaiChibiIcon.png",
    "new_path": "/skins/164/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/164/KaiShipyardIcon.png",
    "new_path": "/skins/164/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/164/WeddingBanner.png",
    "new_path": "/skins/164/Wedding/Banner.png"
  },
  {
    "old_path": "/images/skins/164/WeddingIcon.png",
    "new_path": "/skins/164/Wedding/Icon.png"
  },
  {
    "old_path": "/images/skins/164/WeddingChibiIcon.png",
    "new_path": "/skins/164/Wedding/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/164/WeddingShipyardIcon.png",
    "new_path": "/skins/164/Wedding/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/164/New_YearBanner.png",
    "new_path": "/skins/164/Shogun_of_Snowballs/Banner.png"
  },
  {
    "old_path": "/images/skins/164/New_YearChibiIcon.png",
    "new_path": "/skins/164/Shogun_of_Snowballs/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/164/New_YearShipyardIcon.png",
    "new_path": "/skins/164/Shogun_of_Snowballs/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/164/LawsonBanner.png",
    "new_path": "/skins/164/Meat_Bun_Hunter/Banner.png"
  },
  {
    "old_path": "/images/skins/164/LawsonIcon.png",
    "new_path": "/skins/164/Meat_Bun_Hunter/Icon.png"
  },
  {
    "old_path": "/images/skins/164/LawsonChibiIcon.png",
    "new_path": "/skins/164/Meat_Bun_Hunter/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/164/LawsonShipyardIcon.png",
    "new_path": "/skins/164/Meat_Bun_Hunter/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/164/PartyBanner.png",
    "new_path": "/skins/164/Carnivore_Carnival/Banner.png"
  },
  {
    "old_path": "/images/skins/164/PartyIcon.png",
    "new_path": "/skins/164/Carnivore_Carnival/Icon.png"
  },
  {
    "old_path": "/images/skins/164/PartyChibiIcon.png",
    "new_path": "/skins/164/Carnivore_Carnival/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/164/PartyShipyardIcon.png",
    "new_path": "/skins/164/Carnivore_Carnival/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/164/ChristmasBanner.png",
    "new_path": "/skins/164/Woofy_Floofy_Christmas_Night/Banner.png"
  },
  {
    "old_path": "/images/skins/164/ChristmasIcon.png",
    "new_path": "/skins/164/Woofy_Floofy_Christmas_Night/Icon.png"
  },
  {
    "old_path": "/images/skins/164/ChristmasChibiIcon.png",
    "new_path": "/skins/164/Woofy_Floofy_Christmas_Night/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/164/ChristmasShipyardIcon.png",
    "new_path": "/skins/164/Woofy_Floofy_Christmas_Night/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/176/Banner.png",
    "new_path": "/skins/176/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/176/Icon.png",
    "new_path": "/skins/176/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/176/ChibiIcon.png",
    "new_path": "/skins/176/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/176/ShipyardIcon.png",
    "new_path": "/skins/176/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/176/KaiBanner.png",
    "new_path": "/skins/176/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/176/KaiIcon.png",
    "new_path": "/skins/176/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/176/KaiChibiIcon.png",
    "new_path": "/skins/176/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/176/KaiShipyardIcon.png",
    "new_path": "/skins/176/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/176/MaidChibiIcon.png",
    "new_path": "/skins/176/MaidInTraining/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/176/MaidShipyardIcon.png",
    "new_path": "/skins/176/MaidInTraining/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/176/SpringBanner.png",
    "new_path": "/skins/176/Twilight_Blossom/Banner.png"
  },
  {
    "old_path": "/images/skins/176/SpringIcon.png",
    "new_path": "/skins/176/Twilight_Blossom/Icon.png"
  },
  {
    "old_path": "/images/skins/176/SpringChibiIcon.png",
    "new_path": "/skins/176/Twilight_Blossom/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/176/SpringShipyardIcon.png",
    "new_path": "/skins/176/Twilight_Blossom/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/176/PartyBanner.png",
    "new_path": "/skins/176/Evening_Flower/Banner.png"
  },
  {
    "old_path": "/images/skins/176/PartyIcon.png",
    "new_path": "/skins/176/Evening_Flower/Icon.png"
  },
  {
    "old_path": "/images/skins/176/PartyChibiIcon.png",
    "new_path": "/skins/176/Evening_Flower/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/176/PartyShipyardIcon.png",
    "new_path": "/skins/176/Evening_Flower/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/176/FestivalBanner.png",
    "new_path": "/skins/176/Summer_Festival_Shopping/Banner.png"
  },
  {
    "old_path": "/images/skins/176/FestivalIcon.png",
    "new_path": "/skins/176/Summer_Festival_Shopping/Icon.png"
  },
  {
    "old_path": "/images/skins/176/FestivalChibiIcon.png",
    "new_path": "/skins/176/Summer_Festival_Shopping/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/176/FestivalShipyardIcon.png",
    "new_path": "/skins/176/Summer_Festival_Shopping/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/233/Banner.png",
    "new_path": "/skins/233/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/233/Icon.png",
    "new_path": "/skins/233/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/233/ChibiIcon.png",
    "new_path": "/skins/233/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/233/ShipyardIcon.png",
    "new_path": "/skins/233/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/233/KaiBanner.png",
    "new_path": "/skins/233/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/233/KaiIcon.png",
    "new_path": "/skins/233/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/233/KaiChibiIcon.png",
    "new_path": "/skins/233/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/233/KaiShipyardIcon.png",
    "new_path": "/skins/233/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/233/SchoolBanner.png",
    "new_path": "/skins/233/Rebellious_Top_Student/Banner.png"
  },
  {
    "old_path": "/images/skins/233/SchoolIcon.png",
    "new_path": "/skins/233/Rebellious_Top_Student/Icon.png"
  },
  {
    "old_path": "/images/skins/233/SchoolChibiIcon.png",
    "new_path": "/skins/233/Rebellious_Top_Student/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/233/SchoolShipyardIcon.png",
    "new_path": "/skins/233/Rebellious_Top_Student/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/346/Banner.png",
    "new_path": "/skins/346/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/346/Icon.png",
    "new_path": "/skins/346/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/346/ChibiIcon.png",
    "new_path": "/skins/346/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/346/ShipyardIcon.png",
    "new_path": "/skins/346/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/264/Banner.png",
    "new_path": "/skins/264/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/264/Icon.png",
    "new_path": "/skins/264/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/264/ChibiIcon.png",
    "new_path": "/skins/264/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/264/ShipyardIcon.png",
    "new_path": "/skins/264/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/379/Banner.png",
    "new_path": "/skins/379/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/379/Icon.png",
    "new_path": "/skins/379/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/379/ChibiIcon.png",
    "new_path": "/skins/379/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/379/ShipyardIcon.png",
    "new_path": "/skins/379/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/379/CasualBanner.png",
    "new_path": "/skins/379/HighRise_HighStyle/Banner.png"
  },
  {
    "old_path": "/images/skins/379/CasualIcon.png",
    "new_path": "/skins/379/HighRise_HighStyle/Icon.png"
  },
  {
    "old_path": "/images/skins/379/CasualChibiIcon.png",
    "new_path": "/skins/379/HighRise_HighStyle/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/379/CasualShipyardIcon.png",
    "new_path": "/skins/379/HighRise_HighStyle/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/379/FestivalBanner.png",
    "new_path": "/skins/379/Of_Koi_and_Evening_Hues/Banner.png"
  },
  {
    "old_path": "/images/skins/379/FestivalIcon.png",
    "new_path": "/skins/379/Of_Koi_and_Evening_Hues/Icon.png"
  },
  {
    "old_path": "/images/skins/379/FestivalChibiIcon.png",
    "new_path": "/skins/379/Of_Koi_and_Evening_Hues/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/379/FestivalShipyardIcon.png",
    "new_path": "/skins/379/Of_Koi_and_Evening_Hues/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/265/Banner.png",
    "new_path": "/skins/265/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/265/Icon.png",
    "new_path": "/skins/265/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/265/ChibiIcon.png",
    "new_path": "/skins/265/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/265/ShipyardIcon.png",
    "new_path": "/skins/265/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/266/Banner.png",
    "new_path": "/skins/266/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/266/Icon.png",
    "new_path": "/skins/266/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/266/ChibiIcon.png",
    "new_path": "/skins/266/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/266/ShipyardIcon.png",
    "new_path": "/skins/266/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/236/Banner.png",
    "new_path": "/skins/236/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/236/Icon.png",
    "new_path": "/skins/236/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/236/ChibiIcon.png",
    "new_path": "/skins/236/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/236/ShipyardIcon.png",
    "new_path": "/skins/236/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/236/KaiBanner.png",
    "new_path": "/skins/236/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/236/KaiIcon.png",
    "new_path": "/skins/236/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/236/KaiChibiIcon.png",
    "new_path": "/skins/236/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/236/KaiShipyardIcon.png",
    "new_path": "/skins/236/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/236/WeddingBanner.png",
    "new_path": "/skins/236/Wedding/Banner.png"
  },
  {
    "old_path": "/images/skins/236/WeddingIcon.png",
    "new_path": "/skins/236/Wedding/Icon.png"
  },
  {
    "old_path": "/images/skins/236/WeddingChibiIcon.png",
    "new_path": "/skins/236/Wedding/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/236/WeddingShipyardIcon.png",
    "new_path": "/skins/236/Wedding/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/236/BilibiliBanner.png",
    "new_path": "/skins/236/Philosophy_Sensei/Banner.png"
  },
  {
    "old_path": "/images/skins/236/BilibiliIcon.png",
    "new_path": "/skins/236/Philosophy_Sensei/Icon.png"
  },
  {
    "old_path": "/images/skins/236/BilibiliChibiIcon.png",
    "new_path": "/skins/236/Philosophy_Sensei/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/236/BilibiliShipyardIcon.png",
    "new_path": "/skins/236/Philosophy_Sensei/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/236/SummerBanner.png",
    "new_path": "/skins/236/Breezy_Doubles/Banner.png"
  },
  {
    "old_path": "/images/skins/236/SummerIcon.png",
    "new_path": "/skins/236/Breezy_Doubles/Icon.png"
  },
  {
    "old_path": "/images/skins/236/SummerChibiIcon.png",
    "new_path": "/skins/236/Breezy_Doubles/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/236/SummerShipyardIcon.png",
    "new_path": "/skins/236/Breezy_Doubles/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/236/CoCoBanner.png",
    "new_path": "/skins/236/Perfect_Smile/Banner.png"
  },
  {
    "old_path": "/images/skins/236/CoCoIcon.png",
    "new_path": "/skins/236/Perfect_Smile/Icon.png"
  },
  {
    "old_path": "/images/skins/236/CoCoChibiIcon.png",
    "new_path": "/skins/236/Perfect_Smile/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/236/CoCoShipyardIcon.png",
    "new_path": "/skins/236/Perfect_Smile/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/236/PartyBanner.png",
    "new_path": "/skins/236/The_Banquets_Honor_Student/Banner.png"
  },
  {
    "old_path": "/images/skins/236/PartyIcon.png",
    "new_path": "/skins/236/The_Banquets_Honor_Student/Icon.png"
  },
  {
    "old_path": "/images/skins/236/PartyChibiIcon.png",
    "new_path": "/skins/236/The_Banquets_Honor_Student/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/236/PartyShipyardIcon.png",
    "new_path": "/skins/236/The_Banquets_Honor_Student/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/236/BlurayBanner.png",
    "new_path": "/skins/236/Caf_Trainee_New_Base/Banner.png"
  },
  {
    "old_path": "/images/skins/236/BlurayIcon.png",
    "new_path": "/skins/236/Caf_Trainee_New_Base/Icon.png"
  },
  {
    "old_path": "/images/skins/236/BlurayChibiIcon.png",
    "new_path": "/skins/236/Caf_Trainee_New_Base/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/236/BlurayShipyardIcon.png",
    "new_path": "/skins/236/Caf_Trainee_New_Base/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/236/IdolBanner.png",
    "new_path": "/skins/236/Serious_Idol_Acting_Manager/Banner.png"
  },
  {
    "old_path": "/images/skins/236/IdolIcon.png",
    "new_path": "/skins/236/Serious_Idol_Acting_Manager/Icon.png"
  },
  {
    "old_path": "/images/skins/236/IdolChibiIcon.png",
    "new_path": "/skins/236/Serious_Idol_Acting_Manager/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/236/IdolShipyardIcon.png",
    "new_path": "/skins/236/Serious_Idol_Acting_Manager/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/236/KinokuniyaBanner.png",
    "new_path": "/skins/236/The_Eyecatch_in_the_Rye/Banner.png"
  },
  {
    "old_path": "/images/skins/236/KinokuniyaIcon.png",
    "new_path": "/skins/236/The_Eyecatch_in_the_Rye/Icon.png"
  },
  {
    "old_path": "/images/skins/236/KinokuniyaChibiIcon.png",
    "new_path": "/skins/236/The_Eyecatch_in_the_Rye/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/236/KinokuniyaShipyardIcon.png",
    "new_path": "/skins/236/The_Eyecatch_in_the_Rye/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/236/Bluray2Banner.png",
    "new_path": "/skins/236/Keeper_of_the_ComfFort/Banner.png"
  },
  {
    "old_path": "/images/skins/236/Bluray2Icon.png",
    "new_path": "/skins/236/Keeper_of_the_ComfFort/Icon.png"
  },
  {
    "old_path": "/images/skins/236/Bluray2ChibiIcon.png",
    "new_path": "/skins/236/Keeper_of_the_ComfFort/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/236/Bluray2ShipyardIcon.png",
    "new_path": "/skins/236/Keeper_of_the_ComfFort/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/487/Banner.png",
    "new_path": "/skins/487/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/487/Icon.png",
    "new_path": "/skins/487/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/487/ChibiIcon.png",
    "new_path": "/skins/487/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/487/ShipyardIcon.png",
    "new_path": "/skins/487/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/487/New_YearBanner.png",
    "new_path": "/skins/487/Festivalgoing_Fiend/Banner.png"
  },
  {
    "old_path": "/images/skins/487/New_YearIcon.png",
    "new_path": "/skins/487/Festivalgoing_Fiend/Icon.png"
  },
  {
    "old_path": "/images/skins/487/New_YearChibiIcon.png",
    "new_path": "/skins/487/Festivalgoing_Fiend/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/487/New_YearShipyardIcon.png",
    "new_path": "/skins/487/Festivalgoing_Fiend/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/237/Banner.png",
    "new_path": "/skins/237/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/237/Icon.png",
    "new_path": "/skins/237/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/237/ChibiIcon.png",
    "new_path": "/skins/237/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/237/ShipyardIcon.png",
    "new_path": "/skins/237/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/237/SummerBanner.png",
    "new_path": "/skins/237/Hot_Summers_Cool_Breeze/Banner.png"
  },
  {
    "old_path": "/images/skins/237/SummerChibiIcon.png",
    "new_path": "/skins/237/Hot_Summers_Cool_Breeze/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/237/SummerShipyardIcon.png",
    "new_path": "/skins/237/Hot_Summers_Cool_Breeze/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/466/Banner.png",
    "new_path": "/skins/466/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/466/Icon.png",
    "new_path": "/skins/466/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/466/ChibiIcon.png",
    "new_path": "/skins/466/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/466/ShipyardIcon.png",
    "new_path": "/skins/466/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/466/CasualBanner.png",
    "new_path": "/skins/466/Sharing_is_Caring/Banner.png"
  },
  {
    "old_path": "/images/skins/466/CasualIcon.png",
    "new_path": "/skins/466/Sharing_is_Caring/Icon.png"
  },
  {
    "old_path": "/images/skins/466/CasualChibiIcon.png",
    "new_path": "/skins/466/Sharing_is_Caring/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/466/CasualShipyardIcon.png",
    "new_path": "/skins/466/Sharing_is_Caring/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/488/Banner.png",
    "new_path": "/skins/488/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/488/Icon.png",
    "new_path": "/skins/488/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/488/ChibiIcon.png",
    "new_path": "/skins/488/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/488/ShipyardIcon.png",
    "new_path": "/skins/488/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/488/New_YearBanner.png",
    "new_path": "/skins/488/New_Year_Smorgasbord/Banner.png"
  },
  {
    "old_path": "/images/skins/488/New_YearIcon.png",
    "new_path": "/skins/488/New_Year_Smorgasbord/Icon.png"
  },
  {
    "old_path": "/images/skins/488/New_YearChibiIcon.png",
    "new_path": "/skins/488/New_Year_Smorgasbord/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/488/New_YearShipyardIcon.png",
    "new_path": "/skins/488/New_Year_Smorgasbord/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/345/Banner.png",
    "new_path": "/skins/345/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/345/Icon.png",
    "new_path": "/skins/345/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/345/ChibiIcon.png",
    "new_path": "/skins/345/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/345/ShipyardIcon.png",
    "new_path": "/skins/345/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/345/New_YearBanner.png",
    "new_path": "/skins/345/Projekt_Kirschblte/Banner.png"
  },
  {
    "old_path": "/images/skins/345/New_YearIcon.png",
    "new_path": "/skins/345/Projekt_Kirschblte/Icon.png"
  },
  {
    "old_path": "/images/skins/345/New_YearChibiIcon.png",
    "new_path": "/skins/345/Projekt_Kirschblte/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/345/New_YearShipyardIcon.png",
    "new_path": "/skins/345/Projekt_Kirschblte/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/388/Banner.png",
    "new_path": "/skins/388/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/388/Icon.png",
    "new_path": "/skins/388/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/388/ChibiIcon.png",
    "new_path": "/skins/388/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/388/ShipyardIcon.png",
    "new_path": "/skins/388/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/267/Banner.png",
    "new_path": "/skins/267/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/267/Icon.png",
    "new_path": "/skins/267/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/267/ChibiIcon.png",
    "new_path": "/skins/267/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/267/ShipyardIcon.png",
    "new_path": "/skins/267/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/267/SummerBanner.png",
    "new_path": "/skins/267/Her_First_Summer/Banner.png"
  },
  {
    "old_path": "/images/skins/267/SummerIcon.png",
    "new_path": "/skins/267/Her_First_Summer/Icon.png"
  },
  {
    "old_path": "/images/skins/267/SummerChibiIcon.png",
    "new_path": "/skins/267/Her_First_Summer/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/267/SummerShipyardIcon.png",
    "new_path": "/skins/267/Her_First_Summer/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/267/SportBanner.png",
    "new_path": "/skins/267/Girls_Relay/Banner.png"
  },
  {
    "old_path": "/images/skins/267/SportIcon.png",
    "new_path": "/skins/267/Girls_Relay/Icon.png"
  },
  {
    "old_path": "/images/skins/267/SportChibiIcon.png",
    "new_path": "/skins/267/Girls_Relay/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/267/SportShipyardIcon.png",
    "new_path": "/skins/267/Girls_Relay/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/267/IdolBanner.png",
    "new_path": "/skins/267/StarLitChocolate/Banner.png"
  },
  {
    "old_path": "/images/skins/267/IdolIcon.png",
    "new_path": "/skins/267/StarLitChocolate/Icon.png"
  },
  {
    "old_path": "/images/skins/267/IdolChibiIcon.png",
    "new_path": "/skins/267/StarLitChocolate/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/267/IdolShipyardIcon.png",
    "new_path": "/skins/267/StarLitChocolate/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/267/SpringBanner.png",
    "new_path": "/skins/267/Jianzhi_Fantasia/Banner.png"
  },
  {
    "old_path": "/images/skins/267/SpringIcon.png",
    "new_path": "/skins/267/Jianzhi_Fantasia/Icon.png"
  },
  {
    "old_path": "/images/skins/267/SpringChibiIcon.png",
    "new_path": "/skins/267/Jianzhi_Fantasia/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/267/SpringShipyardIcon.png",
    "new_path": "/skins/267/Jianzhi_Fantasia/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/267/MaidBanner.png",
    "new_path": "/skins/267/Chronicles_of_the_Dust_Wars/Banner.png"
  },
  {
    "old_path": "/images/skins/267/MaidIcon.png",
    "new_path": "/skins/267/Chronicles_of_the_Dust_Wars/Icon.png"
  },
  {
    "old_path": "/images/skins/267/MaidChibiIcon.png",
    "new_path": "/skins/267/Chronicles_of_the_Dust_Wars/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/267/MaidShipyardIcon.png",
    "new_path": "/skins/267/Chronicles_of_the_Dust_Wars/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/413/Banner.png",
    "new_path": "/skins/413/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/413/Icon.png",
    "new_path": "/skins/413/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/413/ChibiIcon.png",
    "new_path": "/skins/413/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/413/ShipyardIcon.png",
    "new_path": "/skins/413/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/413/SummerBanner.png",
    "new_path": "/skins/413/Poolside_Coincidence/Banner.png"
  },
  {
    "old_path": "/images/skins/413/SummerIcon.png",
    "new_path": "/skins/413/Poolside_Coincidence/Icon.png"
  },
  {
    "old_path": "/images/skins/413/SummerChibiIcon.png",
    "new_path": "/skins/413/Poolside_Coincidence/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/413/SummerShipyardIcon.png",
    "new_path": "/skins/413/Poolside_Coincidence/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/385/Banner.png",
    "new_path": "/skins/385/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/385/Icon.png",
    "new_path": "/skins/385/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/385/ChibiIcon.png",
    "new_path": "/skins/385/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/385/ShipyardIcon.png",
    "new_path": "/skins/385/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/229/Banner.png",
    "new_path": "/skins/229/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/229/Icon.png",
    "new_path": "/skins/229/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/229/ChibiIcon.png",
    "new_path": "/skins/229/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/229/ShipyardIcon.png",
    "new_path": "/skins/229/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/229/OriginalShipyardIcon.png",
    "new_path": "/skins/229/Original_Art/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/229/FestivalBanner.png",
    "new_path": "/skins/229/Ceremonial_Crane/Banner.png"
  },
  {
    "old_path": "/images/skins/229/FestivalIcon.png",
    "new_path": "/skins/229/Ceremonial_Crane/Icon.png"
  },
  {
    "old_path": "/images/skins/229/FestivalChibiIcon.png",
    "new_path": "/skins/229/Ceremonial_Crane/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/229/FestivalShipyardIcon.png",
    "new_path": "/skins/229/Ceremonial_Crane/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/229/RaceQueenBanner.png",
    "new_path": "/skins/229/The_Winds_True_Name/Banner.png"
  },
  {
    "old_path": "/images/skins/229/RaceQueenIcon.png",
    "new_path": "/skins/229/The_Winds_True_Name/Icon.png"
  },
  {
    "old_path": "/images/skins/229/RaceQueenChibiIcon.png",
    "new_path": "/skins/229/The_Winds_True_Name/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/229/RaceQueenShipyardIcon.png",
    "new_path": "/skins/229/The_Winds_True_Name/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Plan020/Banner.png",
    "new_path": "/skins/Plan020/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/Plan020/Icon.png",
    "new_path": "/skins/Plan020/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/Plan020/ChibiIcon.png",
    "new_path": "/skins/Plan020/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Plan020/ShipyardIcon.png",
    "new_path": "/skins/Plan020/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/349/Banner.png",
    "new_path": "/skins/349/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/349/Icon.png",
    "new_path": "/skins/349/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/349/ChibiIcon.png",
    "new_path": "/skins/349/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/349/ShipyardIcon.png",
    "new_path": "/skins/349/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/349/KaiBanner.png",
    "new_path": "/skins/349/Retrofit/Banner.png"
  },
  {
    "old_path": "/images/skins/349/KaiIcon.png",
    "new_path": "/skins/349/Retrofit/Icon.png"
  },
  {
    "old_path": "/images/skins/349/KaiChibiIcon.png",
    "new_path": "/skins/349/Retrofit/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/349/KaiShipyardIcon.png",
    "new_path": "/skins/349/Retrofit/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/349/SummerBanner.png",
    "new_path": "/skins/349/Cte_dAzur/Banner.png"
  },
  {
    "old_path": "/images/skins/349/SummerIcon.png",
    "new_path": "/skins/349/Cte_dAzur/Icon.png"
  },
  {
    "old_path": "/images/skins/349/SummerChibiIcon.png",
    "new_path": "/skins/349/Cte_dAzur/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/349/SummerShipyardIcon.png",
    "new_path": "/skins/349/Cte_dAzur/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/349/MaidBanner.png",
    "new_path": "/skins/349/Maid_Fantastique/Banner.png"
  },
  {
    "old_path": "/images/skins/349/MaidIcon.png",
    "new_path": "/skins/349/Maid_Fantastique/Icon.png"
  },
  {
    "old_path": "/images/skins/349/MaidChibiIcon.png",
    "new_path": "/skins/349/Maid_Fantastique/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/349/MaidShipyardIcon.png",
    "new_path": "/skins/349/Maid_Fantastique/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/349/PartyBanner.png",
    "new_path": "/skins/349/Gilded_Dance/Banner.png"
  },
  {
    "old_path": "/images/skins/349/PartyIcon.png",
    "new_path": "/skins/349/Gilded_Dance/Icon.png"
  },
  {
    "old_path": "/images/skins/349/PartyChibiIcon.png",
    "new_path": "/skins/349/Gilded_Dance/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/349/PartyShipyardIcon.png",
    "new_path": "/skins/349/Gilded_Dance/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Collab057/Banner.png",
    "new_path": "/skins/Collab057/Default/Banner.png"
  },
  {
    "old_path": "/images/skins/Collab057/Icon.png",
    "new_path": "/skins/Collab057/Default/Icon.png"
  },
  {
    "old_path": "/images/skins/Collab057/ChibiIcon.png",
    "new_path": "/skins/Collab057/Default/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Collab057/ShipyardIcon.png",
    "new_path": "/skins/Collab057/Default/ShipyardIcon.png"
  },
  {
    "old_path": "/images/skins/Collab057/SummerBanner.png",
    "new_path": "/skins/Collab057/Summer_Vacation/Banner.png"
  },
  {
    "old_path": "/images/skins/Collab057/SummerIcon.png",
    "new_path": "/skins/Collab057/Summer_Vacation/Icon.png"
  },
  {
    "old_path": "/images/skins/Collab057/SummerChibiIcon.png",
    "new_path": "/skins/Collab057/Summer_Vacation/ChibiIcon.png"
  },
  {
    "old_path": "/images/skins/Collab057/SummerShipyardIcon.png",
    "new_path": "/skins/Collab057/Summer_Vacation/ShipyardIcon.png"
  }
];

async function moveFile(oldPath, newPath) {
  // 1. Create the destination directory
  // Set the `recursive` option to `true` to create all the subdirectories
  await fs.mkdir(path.join(__dirname, path.dirname(new_path)), { recursive: true });
  try {
    // 2. Rename the file (move it to the new directory)
    await fs.rename(oldPath, newPath);
  } catch (error) {
    if (error.code === 'EXDEV') {
      // 3. Copy the file as a fallback
      await fs.copyFile(oldPath, newPath);
      // Remove the old file
      await fs.unlink(oldPath);
    } else {
      // Throw any other error
      throw error;
    }
  }
}

skin_path.forEach((skin) => {
  // fs.mkdir(path.join(__dirname, path.dirname(skin.new_path)), { recursive:true }, (err) => { if ( err ) throw err });
  const oldpath = path.join(__dirname, skin.old_path);
  const newpath = path.join(__dirname, skin.new_path);
  fs.rename(oldpath, newpath, (err) => {if (err) throw err });
});
   
const old_path = "/cs.js";
const new_path = "/skins/cs.js";
// fs.mkdir(path.join(__dirname, '/skins'), { recursive:true }, (err) => {
//   if( err ) throw err;
// })