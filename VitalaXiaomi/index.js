console.log("Hello world");

const puppeteer = require("puppeteer");

const arrLinkSkayGooglePixel = [
  "https://skay.ua/google-pixel/71440-google-pixel-8a-8128gb-obsidian-us.html",
  "https://skay.ua/google-pixel/71441-google-pixel-8a-8128gb-bay-us.html",
  "https://skay.ua/google-pixel/71576-google-pixel-8a-8128gb-porcelain-us.html",
  "https://skay.ua/google-pixel/71577-google-pixel-8a-8128gb-aloe-us.html",
  "https://skay.ua/google-pixel/67465-google-pixel-8-8128gb-obsidian-us.html",
  "https://skay.ua/google-pixel/68077-google-pixel-8-8128gb-hazel-us.html",
  "https://skay.ua/google-pixel/67610-google-pixel-8-8128gb-rose-us.html",
  "https://skay.ua/google-pixel/70231-google-pixel-8-8128gb-mint-us.html",
  "https://skay.ua/google-pixel/67399-google-pixel-8-8256gb-obsidian-us.html",
  "https://skay.ua/google-pixel/67378-google-pixel-8-8256gb-hazel-us.html",
  "https://skay.ua/google-pixel/67379-google-pixel-8-8256gb-rose-us.html",
  "https://skay.ua/google-pixel/67499-google-pixel-8-pro-12128gb-obsidian-us.html",
  "https://skay.ua/google-pixel/67636-google-pixel-8-pro-12128gb-porcelain-us.html",
  "https://skay.ua/google-pixel/67608-google-pixel-8-pro-12128gb-bay-us.html",
  "https://skay.ua/google-pixel/69718-google-pixel-8-pro-12128gb-mint-us.html",
  "https://skay.ua/google-pixel/67767-google-pixel-8-pro-12256gb-obsidian-us.html",
  "https://skay.ua/google-pixel/68011-google-pixel-8-pro-12256gb-porcelain-us.html",
  "https://skay.ua/google-pixel/68399-google-pixel-8-pro-12256gb-bay-us.html",
  "https://skay.ua/google-pixel/68200-google-pixel-8-pro-12512gb-obsidian-us.html",
  "https://skay.ua/google-pixel/67609-google-pixel-8-pro-12512gb-porcelain-us.html",
  "https://skay.ua/google-pixel/69420-google-pixel-8-pro-12512gb-bay-us.html",
  "https://skay.ua/google-pixel/67637-google-pixel-8-pro-121tb-obsidian-us.html",
];

const arrLinkJabkoGooglePixel = [
  "https://jabko.ua/gadzheti-i-drugoe/smartfoni/smartfoni-google-pixel/smartfon-google-pixel-8a-8128gb-obsidian-global",
  "https://jabko.ua/gadzheti-i-drugoe/smartfoni/smartfoni-google-pixel/smartfon-google-pixel-8a-8128gb-bay",
  "https://jabko.ua/gadzheti-i-drugoe/smartfoni/smartfoni-google-pixel/smartfon-google-pixel-8a-8128gb-porcelain-global",
  "https://jabko.ua/gadzheti-i-drugoe/smartfoni/smartfoni-google-pixel/smartfon-google-pixel-8a-8128gb-mint-global",
  "https://jabko.ua/gadzheti-i-drugoe/smartfoni/smartfoni-google-pixel/smartfon-google-pixel-8-8-128--jade-",
  "https://jabko.ua/gadzheti-i-drugoe/smartfoni/smartfoni-google-pixel/smartfon-google-pixel-8-8-128--haze-",
  "https://jabko.ua/gadzheti-i-drugoe/smartfoni/smartfoni-google-pixel/smartfon-google-pixel-8-8-128--peony-",
  "https://jabko.ua/gadzheti-i-drugoe/smartfoni/smartfoni-google-pixel/smartfon-google-pixel-8-8128gb-mint-global",
  "https://jabko.ua/gadzheti-i-drugoe/smartfoni/smartfoni-google-pixel/smartfon-google-pixel-8-8-256gb--obsidian-",
  "https://jabko.ua/gadzheti-i-drugoe/smartfoni/smartfoni-google-pixel/smartfon-google-pixel-8-8-256gb--hazel-",
  "https://jabko.ua/gadzheti-i-drugoe/smartfoni/smartfoni-google-pixel/smartfon-google-pixel-8-8-256gb--rose-",
  "https://jabko.ua/gadzheti-i-drugoe/smartfoni/smartfoni-google-pixel/smartfon-google-pixel-8-pro-12-128gb--obsidian-",
  "https://jabko.ua/gadzheti-i-drugoe/smartfoni/smartfoni-google-pixel/smartfon-google-pixel-8-pro-12-128gb--porcelain-",
  "https://jabko.ua/gadzheti-i-drugoe/smartfoni/smartfoni-google-pixel/smartfon-google-pixel-8-pro-12-128gb--bay-",
  "https://jabko.ua/gadzheti-i-drugoe/smartfoni/smartfoni-google-pixel/smartfon-google-pixel-8-pro-12128gb-mint-global",
  "https://jabko.ua/gadzheti-i-drugoe/smartfoni/smartfoni-google-pixel/smartfon-google-pixel-8-pro-12-256--jade-",
  "https://jabko.ua/gadzheti-i-drugoe/smartfoni/smartfoni-google-pixel/smartfon-google-pixel-8-pro-12-256--porcelain-",
  "https://jabko.ua/gadzheti-i-drugoe/smartfoni/smartfoni-google-pixel/smartfon-google-pixel-8-pro-12-256--sky-",
  "https://jabko.ua/gadzheti-i-drugoe/smartfoni/smartfoni-google-pixel/smartfon-google-pixel-8-pro-12-512gb--obsidian-",
  "https://jabko.ua/gadzheti-i-drugoe/smartfoni/smartfoni-google-pixel/smartfon-google-pixel-8-pro-12-512gb--porcelain-",
  "https://jabko.ua/gadzheti-i-drugoe/smartfoni/smartfoni-google-pixel/smartfon-google-pixel-8-pro-12-512gb--bay-",
  "https://jabko.ua/gadzheti-i-drugoe/smartfoni/smartfoni-google-pixel/smartfon-google-pixel-8-pro-121tv-obsidian",
];

const arrLinkChinaGadgetsGooglePixel = [
  "https://www.china-gadgets.com.ua/products/smartfon-google-pixel-8a-8128gb-obsidian-",
  "https://www.china-gadgets.com.ua/products/smartfon-google-pixel-8a-8128gb-bay",
  "https://www.china-gadgets.com.ua/products/smartfon-google-pixel-8a-8128gb-porcelain",
  "https://www.china-gadgets.com.ua/products/smartfon-google-pixel-8a-8128gb-aloe-",
  "https://www.china-gadgets.com.ua/products/smartfon-google-pixel-8-8128gb-obsidian-",
  "https://www.china-gadgets.com.ua/products/smartfon-google-pixel-8-8128gb-hazel-",
  "https://www.china-gadgets.com.ua/products/smartfon-google-pixel-8-8128gb-rose-",
  "https://www.china-gadgets.com.ua/products/smartfon-google-pixel-8-8256gb-obsidian-",
  "https://www.china-gadgets.com.ua/products/smartfon-google-pixel-8-8256gb-hazel-",
  "https://www.china-gadgets.com.ua/products/smartfon-google-pixel-8-8256gb-rose-",
  "https://www.china-gadgets.com.ua/products/smartfon-google-pixel-8-pro-12128gb-obsidian",
  "https://www.china-gadgets.com.ua/products/smartfon-google-pixel-8-pro-12128gb-porcelain-",
  "https://www.china-gadgets.com.ua/products/smartfon-google-pixel-8-pro-12128gb-bay-",
  "https://www.china-gadgets.com.ua/products/smartfon-google-pixel-8-pro-12128gb-mint-",
  "https://www.china-gadgets.com.ua/products/smartfon-google-pixel-8-pro-12256gb-obsidian-",
  "https://www.china-gadgets.com.ua/products/smartfon-google-pixel-8-pro-12256gb-porcelain-",
  "https://www.china-gadgets.com.ua/products/smartfon-google-pixel-8-pro-12256gb-bay-",
  "https://www.china-gadgets.com.ua/products/smartfon-google-pixel-8-pro-12512gb-obsidian",
  "https://www.china-gadgets.com.ua/products/smartfon-google-pixel-8-pro-12512gb-porcelain-",
  "https://www.china-gadgets.com.ua/products/smartfon-google-pixel-8-pro-12512gb-bay-",
];
const arrLinkSotaXiaomi = [

  "https://sota.store/ru/google-pixel-8a-8-128gb-bay-172709.html",
  "https://sota.store/ru/google-pixel-8a-8-128gb-porcelain-172710.html",
  "https://sota.store/ru/google-pixel-8a-8-128gb-aloe-173953.html",
  "https://sota.store/ru/google-pixel-8-8-128gb-obsidian-147560.html",
  "https://sota.store/ru/google-pixel-8-8-128gb-hazel-147561.html",
  "https://sota.store/ru/google-pixel-8-8-128gb-rose-147562.html",
  "https://sota.store/ru/google-pixel-8-8-256gb-obsidian-149182.html",
  "https://sota.store/ru/google-pixel-8-pro-12-128gb-obsidian-148318.html",
  "https://sota.store/ru/google-pixel-8-pro-12-128gb-porcelain-148455.html",
  "https://sota.store/ru/google-pixel-8-pro-12-128gb-bay-148454.html",
  "https://sota.store/ru/google-pixel-8-pro-12-128gb-mint-162572.html",
  "https://sota.store/ru/google-pixel-8-pro-12-256gb-obsidian-148085.html",
  "https://sota.store/ru/google-pixel-8-pro-12-256gb-porcelain-148087.html",
  "https://sota.store/ru/google-pixel-8-pro-12-256gb-bay-148446.html",
  "https://sota.store/ru/google-pixel-8-pro-12-512gb-porcelain-149408.html",
  "https://sota.store/ru/google-pixel-8-pro-12-512gb-bay-149409.html",
  "https://sota.store/ru/google-pixel-8a-8-128gb-obsidian-172564.html",

];
const arrLinkPixophoneGooglePixel = [
  "https://pixophone.com/smartfon_google_pixel_8a_8_128gb_obsidian_global_version",
  "https://pixophone.com/smartfon_google_pixel_8a_8_128gb_bay_global_version",
  "https://pixophone.com/smartfon_google_pixel_8a_8_128gb_porcelain_global_version",
  "https://pixophone.com/smartfon_google_pixel_8a_8_128gb_aloe_global_version",
  "https://pixophone.com/smartfon_google_pixel_8_8_128gb_obsidian_global_version",
  "https://pixophone.com/smartfon_google_pixel_8_8_128gb_hazel_global_version",
  "https://pixophone.com/smartfon_google_pixel_8_8_128gb_rose_global_version",
  "https://pixophone.com/smartfon_google_pixel_8_8_128gb_mint_global_version",
  "https://pixophone.com/smartfon_google_pixel_8_8_256gb_obsidian_global_version",
  "https://pixophone.com/smartfon_google_pixel_8_8_256gb_hazel_global_version",
  "https://pixophone.com/smartfon_google_pixel_8_8_256gb_rose_global_version",
  "https://pixophone.com/smartfon_google_pixel_8_pro_12_128gb_obsidian_global_version",
  "https://pixophone.com/smartfon_google_pixel_8_pro_12_128gb_porcelain_global_version",
  "https://pixophone.com/smartfon_google_pixel_8_pro_12_128gb_bay_global_version",
  "https://pixophone.com/smartfon_google_pixel_8_pro_12_128gb_mint_global_version",
  "https://pixophone.com/smartfon_google_pixel_8_pro_12_256gb_obsidian_global_version",
  "https://pixophone.com/smartfon_google_pixel_8_pro_12_256gb_porcelain_global_version",
  "https://pixophone.com/smartfon_google_pixel_8_pro_12_256gb_bay_global_version",
  "https://pixophone.com/smartfon_google_pixel_8_pro_12_512gb_obsidian_global_version",
  "https://pixophone.com/smartfon_google_pixel_8_pro_12_512gb_porcelain_global_version",
  "https://pixophone.com/smartfon_google_pixel_8_pro_12_512gb_bay_global_version",
  "https://pixophone.com/smartfon_google_pixel_8_pro_12_1tb_obsidian",
  "https://touch.com.ua/ua/item/google-pixel-8a-8-128gb-obsidian/",
  "https://touch.com.ua/ua/item/google-pixel-8a-8-128gb-bay/",
  "https://touch.com.ua/ua/item/google-pixel-8a-8-128gb-porcelain/",
  "https://touch.com.ua/ua/item/google-pixel-8a-8-128gb-aloe/",
  "https://touch.com.ua/ua/item/google-pixel-8-8-128gb-obsidian/",
  "https://touch.com.ua/ua/item/google-pixel-8-8-128gb-hazel/",
  "https://touch.com.ua/ua/item/google-pixel-8-8-128gb-rose/",
  "https://touch.com.ua/ua/item/google-pixel-8-8-256gb-obsidian/",
  "https://touch.com.ua/ua/item/google-pixel-8-8-256gb-hazel/",
  "https://touch.com.ua/ua/item/google-pixel-8-8-256gb-rose/",
  "https://touch.com.ua/ua/item/google-pixel-8-pro-12-128gb-obsidian/",
  "https://touch.com.ua/ua/item/google-pixel-8-pro-12-128gb-porcelain/",
  "https://touch.com.ua/ua/item/google-pixel-8-pro-12-128gb-bay/",
  "https://touch.com.ua/ua/item/google-pixel-8-pro-12-256gb-obsidian/",
  "https://touch.com.ua/ua/item/google-pixel-8-pro-12-256gb-porcelain/",
  "https://touch.com.ua/ua/item/google-pixel-8-pro-12-512gb-bay/",
  "https://touch.com.ua/ua/item/google-pixel-8-pro-12-512gb-obsidian/",
  "https://touch.com.ua/ua/item/google-pixel-8-pro-12-512gb-porcelain/",
  "https://touch.com.ua/ua/item/google-pixel-8-pro-12-512gb-bay/"
];




const arrLinkSkayXiaomi = [
  "https://skay.ua/rasprodazha-xiaomi/72017-xiaomi-poco-f6-pro-12512gb-black-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/72309-xiaomi-poco-f6-12512gb-green-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/72018-xiaomi-poco-f6-pro-12512gb-white-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/72446-xiaomi-poco-f6-pro-12256gb-black-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/72391-xiaomi-poco-f6-12512gb-black-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/72277-xiaomi-poco-f6-12512gb-titanium-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/72309-xiaomi-poco-f6-12512gb-green-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/68219-xiaomi-poco-c65-6128gb-black-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/68220-xiaomi-poco-c65-6128gb-blue-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/69799-xiaomi-poco-c65-6128gb-purple-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/68450-xiaomi-poco-c65-8256gb-black-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/68449-xiaomi-poco-c65-8256gb-blue-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/69098-xiaomi-poco-c65-8256gb-purple-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/72288-xiaomi-poco-m6-5g-6128gb-black-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/72289-xiaomi-poco-m6-5g-6128gb-silver-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/72400-xiaomi-poco-m6-5g-8256gb-black-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/72290-xiaomi-poco-m6-5g-8256gb-silver-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/72291-xiaomi-poco-m6-5g-8256gb-purple-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/70471-xiaomi-14-12512gb-black-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/70484-xiaomi-14-12512gb-white-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/70603-xiaomi-14-12512gb-jade-green-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/70472-xiaomi-14-12256gb-black-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/70485-xiaomi-14-12256gb-white-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/70700-xiaomi-14-12256gb-jade-green-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/72209-xiaomi-14-ultra-16512gb-black-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/72208-xiaomi-14-ultra-16512gb-white-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/70207-xiaomi-poco-m6-pro-12512gb-black-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/70884-xiaomi-poco-m6-pro-12512gb-blue-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/70885-xiaomi-poco-m6-pro-12512gb-purple-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/69389-xiaomi-poco-m6-pro-8256gb-black-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/69389-xiaomi-poco-m6-pro-8256gb-black-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/69390-xiaomi-poco-m6-pro-8256gb-purple-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/71635-xiaomi-poco-x6-5g-12256gb-black-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/72310-xiaomi-poco-x6-5g-12256gb-blue-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/72286-xiaomi-poco-x6-5g-12256gb-white-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/71829-xiaomi-poco-x6-5g-8256gb-black-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/71912-xiaomi-poco-x6-5g-8256gb-blue-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/72287-xiaomi-poco-x6-5g-8256gb-white-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/70208-xiaomi-poco-x6-pro-5g-12512gb-black-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/70209-xiaomi-poco-x6-pro-5g-12512gb-grey-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/70210-xiaomi-poco-x6-pro-5g-12512gb-yellow-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/72392-xiaomi-poco-x6-pro-5g-8256gb-black-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/72071-xiaomi-poco-x6-pro-5g-8256gb-grey-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/71305-xiaomi-poco-x6-pro-5g-8256gb-yellow-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/72039-xiaomi-redmi-13-8256gb-midnight-black-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/72319-xiaomi-redmi-13-8256gb-ocean-blue-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/72320-xiaomi-redmi-13-8256b-pearl-pink-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/71832-xiaomi-redmi-13-6128gb-midnight-black-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/71833-xiaomi-redmi-13-6128gb-ocean-blue-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/71834-xiaomi-redmi-13-6128gb-pearl-pink-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/71022-xiaomi-redmi-a3-364gb-midnight-black-no-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/71636-xiaomi-redmi-a3-4128gb-forest-green-no-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/72001-xiaomi-redmi-a3-364gb-forest-green-no-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/71637-xiaomi-redmi-a3-4128gb-midnight-black-no-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/71638-xiaomi-redmi-a3-4128gb-star-blue-no-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/71636-xiaomi-redmi-a3-4128gb-forest-green-no-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/69279-xiaomi-redmi-13c-4128gb-midnight-black-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/69278-xiaomi-redmi-13c-4128gb-navy-blue-nfc-eu-no-adapter.html",
"https://skay.ua/rasprodazha-xiaomi/70463-xiaomi-redmi-13c-4128gb-clover-green-nfc-eu-no-adapter.html",
"https://skay.ua/rasprodazha-xiaomi/67811-xiaomi-redmi-13c-6128gb-midnight-black-no-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/67810-xiaomi-redmi-13c-6128gb-navy-blue-no-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/70463-xiaomi-redmi-13c-4128gb-clover-green-nfc-eu-no-adapter.html",
"https://skay.ua/rasprodazha-xiaomi/70142-xiaomi-redmi-13c-6128gb-glacier-white-no-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/70462-xiaomi-redmi-13c-8256gb-midnight-black-nfc-eu-no-adapter.html",
"https://skay.ua/rasprodazha-xiaomi/69096-xiaomi-redmi-13c-8256gb-navy-blue-nfc-eu-no-adapter.html",
"https://skay.ua/rasprodazha-xiaomi/69097-xiaomi-redmi-13c-8256gb-clover-green-nfc-eu-no-adapter.html",
"https://skay.ua/rasprodazha-xiaomi/70141-xiaomi-redmi-13c-8256gb-glacier-white-no-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/69290-xiaomi-redmi-note-13-6128gb-midnight-black-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/69289-xiaomi-redmi-note-13-6128gb-ice-blue-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/69291-xiaomi-redmi-note-13-6128gb-mint-green-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/69293-xiaomi-redmi-note-13-8256gb-midnight-black-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/69292-xiaomi-redmi-note-13-8256gb-ice-blue-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/69294-xiaomi-redmi-note-13-8256gb-mint-green-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/69296-xiaomi-redmi-note-13-5g-6128gb-graphite-black-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/69295-xiaomi-redmi-note-13-5g-6128gb-ocean-teal-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/70886-xiaomi-redmi-note-13-5g-6128gb-arctic-white-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/69297-xiaomi-redmi-note-13-5g-8256gb-graphite-black-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/69202-xiaomi-redmi-note-13-5g-8256gb-ocean-teal-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/69298-xiaomi-redmi-note-13-5g-8256gb-arctic-white-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/69137-xiaomi-redmi-note-13-pro-8256gb-midnight-black-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/69300-xiaomi-redmi-note-13-pro-8256gb-lavander-purple-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/69138-xiaomi-redmi-note-13-pro-8256gb-forest-green-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/69139-xiaomi-redmi-note-13-pro-12512gb-midnight-black-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/69301-xiaomi-redmi-note-13-pro-12512gb-lavander-purple-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/69140-xiaomi-redmi-note-13-pro-12512gb-forest-green-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/69131-xiaomi-redmi-note-13-pro-5g-8256gb-midnight-black-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/69133-xiaomi-redmi-note-13-pro-5g-8256gb-aurora-purple-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/69132-xiaomi-redmi-note-13-pro-5g-8256gb-ocean-teal-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/69134-xiaomi-redmi-note-13-pro-5g-12512gb-midnight-black-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/69136-xiaomi-redmi-note-13-pro-5g-12512gb-aurora-purple-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/69141-xiaomi-redmi-note-13-pro-plus-5g-8256gb-midnight-black-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/69142-xiaomi-redmi-note-13-pro-plus-5g-8256gb-aurora-purple-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/69724-xiaomi-redmi-note-13-pro-plus-5g-8256gb-moonlight-white-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/69143-xiaomi-redmi-note-13-pro-plus-5g-12512gb-midnight-black-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/69299-xiaomi-redmi-note-13-pro-plus-5g-12512gb-aurora-purple-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/70235-xiaomi-redmi-note-13-pro-plus-5g-12512gb-moonlight-white-nfc-eu.html",
"https://skay.ua/rasprodazha-xiaomi/71279-xiaomi-redmi-note-13-pro-plus-5g-12512gb-mystic-silver-nfc-eu.html",
];
const arrLinkJabkoXiaomi = [
  "https://jabko.ua/gadzheti-i-drugoe/smartfoni/smartfony-xiaomi/smartfon-xiaomi-14-12512gb-black-ua",
"https://jabko.ua/gadzheti-i-drugoe/smartfoni/smartfony-xiaomi/smartfon-xiaomi-14-12512gb-white-ua",
"https://jabko.ua/gadzheti-i-drugoe/smartfoni/smartfony-xiaomi/smartfon-xiaomi-14-12512gb-jade-green-ua",
"https://jabko.ua/gadzheti-i-drugoe/smartfoni/smartfony-xiaomi/smartfon-xiaomi-14-ultra-16512gb-black-ua",
"https://jabko.ua/gadzheti-i-drugoe/smartfoni/smartfony-xiaomi/smartfon-xiaomi-14-ultra-16512gb-white-ua",
"https://jabko.ua/gadzheti-i-drugoe/smartfoni/smartfony-xiaomi/smartfon-xiaomi-redmi-note-13-pro-5g-8256gb-midnight-black-ua",-
"https://jabko.ua/gadzheti-i-drugoe/smartfoni/smartfony-xiaomi/smartfon-xiaomi-redmi-note-13-pro-5g-8256gb-aurora-purple-ua",-
"https://jabko.ua/gadzheti-i-drugoe/smartfoni/smartfony-xiaomi/smartfon-xiaomi-redmi-note-13-pro-5g-8256gb-ocean-teal-ua",
"https://jabko.ua/gadzheti-i-drugoe/smartfoni/smartfony-xiaomi/smartfon-xiaomi-redmi-note-13-pro-5g-8256gb-midnight-black-ua",
"https://jabko.ua/gadzheti-i-drugoe/smartfoni/smartfony-xiaomi/smartfon-xiaomi-redmi-note-13-pro-5g-8256gb-aurora-purple-ua",
"https://jabko.ua/gadzheti-i-drugoe/smartfoni/smartfony-xiaomi/smartfon-xiaomi-redmi-note-13-pro-5g-8256gb-moonlight-white-ua",
"https://jabko.ua/gadzheti-i-drugoe/smartfoni/smartfony-xiaomi/smartfon-xiaomi-redmi-note-13-pro-5g-12512gb-midnight-black-ua",
"https://jabko.ua/gadzheti-i-drugoe/smartfoni/smartfony-xiaomi/smartfon-xiaomi-redmi-note-13-pro-5g-12512gb-aurora-purple-ua",
"https://jabko.ua/gadzheti-i-drugoe/smartfoni/smartfony-xiaomi/smartfon-xiaomi-redmi-note-13-pro-5g-12512gb-moonlight-white-ua",
"https://jabko.ua/gadzheti-i-drugoe/smartfoni/smartfony-xiaomi/smartfon-xiaomi-redmi-note-13-pro-5g-12512gb-mystic-silver-ua",
];
const arrLinkChinaGadgetsXiaomi = [
  "https://www.china-gadgets.com.ua/products/smartfon-xiaomi-poco-f6-pro-12512gb-black-",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-poco-f6-pro-12512gb-white-",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-poco-f6-pro-12256gb-black-",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-poco-f6-pro-12256gb-white-",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-poco-f6-12512gb-black-",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-poco-f6-12512gb-titanium-",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-poco-f6-12512gb-green-",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-poco-m6-6128gb-black-",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-poco-m6-6128gb-silver",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-poco-m6-6128gb-purple",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-poco-m6-8256gb-black-",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-poco-m6-8256gb-silver",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-poco-m6-8256gb-purple",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-14-12512gb-black-",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-14-12512gb-white-",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-14-12512gb-green",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-14-12256gb-black-",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-14-12256gb-white-",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-14-12256gb-green",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-14-ultra-16512gb-black-",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-14-ultra-16512gb-white-",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-poco-m6-pro-12512gb-black-",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-poco-m6-pro-12512gb-blue-",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-poco-m6-pro-12512gb-purple-",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-poco-m6-pro-8256gb-black-",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-poco-m6-pro-8256gb-blue-",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-poco-m6-pro-8256gb-purple-",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-poco-x6-5g-12256gb-black",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-poco-x6-5g-12256gb-blue-",
"https://www.china-gadgets.com.ua/products/74333",
"https://www.china-gadgets.com.ua/products/9998",
"https://www.china-gadgets.com.ua/products/45865",
"https://www.china-gadgets.com.ua/products/666",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-poco-x6-pro-12512gb-black-",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-poco-x6-pro-12512gb-grey",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-poco-x6-pro-12512gb-yellow-",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-poco-x6-pro-8256gb-black-",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-poco-x6-pro-8256gb-grey",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-poco-x6-pro-8256gb-yellow-",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-redmi-13-8256gb-black-",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-redmi-13-8256gb-blue-",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-redmi-13-8256gb-pink-",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-redmi-13-6128gb-blue-",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-redmi-13-6128gb-black-",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-redmi-13-6128gb-pink-",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-redmi-a3-364gb-midnight-black",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-redmi-a3-364gb-star-blue",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-redmi-a3-364gb-forest-green",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-redmi-a3-4128gb-midnight-black",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-redmi-a3-4128gb-star-blue",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-redmi-a3-4128gb-forest-green",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-redmi-13c-4128gb-midnight-black",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-redmi-13c-4128gb-navy-blue",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-redmi-13c-8256gb-midnight-black",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-redmi-13c-8256gb-navy-blue",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-redmi-13c-8256gb-clover-green",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-4redmi-note-13-6128gb-midnight-black",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-redmi-note-13-4g-6128gb-ice-blue",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-redmi-note-13-4g-6128gb-mint-green",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-redmi-note-13-4g-8256gb-midnight-black",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-redmi-note-13-4g-8256gb-ice-blue",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-redmi-note-13-4g-8256gb-mint-green",
"https://www.china-gadgets.com.ua/products/32668887",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-redmi-note-13-5g-6128gb-arctic-white",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-redmi-note-13-5g-8256gb-graphite-black",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-redmi-note-13-5g-8256gb-ocean-teal-",
"https://www.china-gadgets.com.ua/products/88865",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-redmi-note-13-pro-4g-8256gb-midnight-black-",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-redmi-note-13-pro-4g-8256gb-lavender-purple",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-redmi-note-13-pro-4g-12512gb-forest-green",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-redmi-note-13-pro-4g-12512gb-midnight-black-",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-redmi-note-13-pro-4g-12512gb-lavender-purple",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-redmi-note-13-pro-4g-8256gb-forest-green",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-redmi-note-13-pro-5g-8256gb-midnight-black-",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-redmi-note-13-pro-5g-8256gb-purple-",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-redmi-note-13-pro-5g-8256gb-ocean-teal",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-redmi-note-13-pro-5g-12512gb-midnight-black-",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-redmi-note-13-pro-5g-12512gb-purple-",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-redmi-note-13-pro-8256gb-black-",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-redmi-note-13-pro-8256gb-aurora-purple-",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-redmi-note-13-pro-8256gb-white-",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-redmi-note-13-pro-12512gb-black-",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-redmi-note-13-pro-12512gb-aurora-purple-",
"https://www.china-gadgets.com.ua/products/smartfon-xiaomi-redmi-note-13-pro-12512gb-white-",
];

const arrLinkPixophoneXiaomi = [
  "https://pixophone.com/smartfon_xiaomi_poco_f6_pro_12_512gb_white",
  "https://pixophone.com/smartfon_xiaomi_poco_f6_pro_12_256gb_black",
  "https://pixophone.com/smartfon_xiaomi_poco_f6_pro_12_256gb_white",
  "https://pixophone.com/smartfon_xiaomi_poco_f6_12_512gb_black",
  "https://pixophone.com/smartfon_xiaomi_poco_f6_12_512gb_titanium",
  "https://pixophone.com/smartfon_xiaomi_poco_f6_12_512gb_green",
  "https://pixophone.com/smartfon_xiaomi_poco_c65_6_128gb_black_global_version",
  "https://pixophone.com/smartfon_xiaomi_poco_c65_6_128gb_blue_global_version",
  "https://pixophone.com/smartfon_xiaomi_poco_c65_6_128gb_purple_global_version",
  "https://pixophone.com/smartfon_xiaomi_poco_c65_8_256gb_black_global_version",
  "https://pixophone.com/smartfon_xiaomi_poco_c65_8_256gb_blue_global_version",
  "https://pixophone.com/smartfon_xiaomi_poco_c65_8_256gb_purple_global_version",
  "https://pixophone.com/smartfon_xiaomi_14_12_512gb_black_global_version",
  "https://pixophone.com/smartfon_xiaomi_14_12_512gb_white_global_version",
  "https://pixophone.com/smartfon_xiaomi_14_12_512gb_rock_green_global_version",
  "https://pixophone.com/smartfon_xiaomi_14_12_256gb_black_global_version",
  "https://pixophone.com/smartfon_xiaomi_14_12_256gb_white_global_version",
  "https://pixophone.com/smartfon_xiaomi_14_12_256gb_rock_green_global_version",
  "https://pixophone.com/smartfon_xiaomi_14_ultra_16_512gb_black_global_version",
  "https://pixophone.com/smartfon_xiaomi_14_ultra_16_512gb_white_global_version",
  "https://pixophone.com/smartfon_xiaomi_poco_m6_pro_12_512gb_black_global_version",
  "https://pixophone.com/smartfon_xiaomi_poco_m6_pro_12_512gb_blue_global_version",
  "https://pixophone.com/smartfon_xiaomi_poco_m6_pro_12_512gb_purple_global_version",
  "https://pixophone.com/smartfon_xiaomi_poco_m6_pro_8_256gb_black_global_version",
  "https://pixophone.com/smartfon_xiaomi_poco_m6_pro_8_256gb_blue_global_version",
  "https://pixophone.com/smartfon_xiaomi_poco_m6_pro_8_256gb_purple_global_version",
  "https://pixophone.com/smartfon_xiaomi_poco_x6_8_256gb_black_global_version",
  "https://pixophone.com/smartfon_xiaomi_poco_x6_12_512gb_blue_global_version",
  "https://pixophone.com/smartfon_xiaomi_poco_x6_12_256gb_white_global_version",
  "https://pixophone.com/smartfon_xiaomi_poco_x6_8_256gb_black_global_version",
  "https://pixophone.com/smartfon_xiaomi_poco_x6_8_256gb_blue_global_version",
  "https://pixophone.com/smartfon_xiaomi_poco_x6_8_256gb_white_global_version",
  "https://pixophone.com/smartfon_xiaomi_poco_x6_pro_5g_12_512gb_black_global_version",
  "https://pixophone.com/smartfon_xiaomi_poco_x6_pro_5g_12_512gb_gray_global_version",
  "https://pixophone.com/smartfon_xiaomi_poco_x6_pro_5g_12_512gb_yellow_global_version",
  "https://pixophone.com/smartfon_xiaomi_poco_x6_pro_5g_8_256gb_black_global_version",
  "https://pixophone.com/smartfon_xiaomi_poco_x6_pro_5g_8_256gb_gray_eu",
  "https://pixophone.com/smartfon_xiaomi_poco_x6_pro_5g_8_256gb_yellow_global_version",
  "https://pixophone.com/smartfon_xiaomi_redmi_a3_3_64gb_midnight_black_ua",
  "https://pixophone.com/smartfon_xiaomi_redmi_a3_3_64gb_star_blue_ua",
  "https://pixophone.com/smartfon_xiaomi_redmi_a3_3_64gb_forest_green_ua",
  "https://pixophone.com/smartfon_xiaomi_redmi_a3_4_128gb_midnight_black_ua",
  "https://pixophone.com/smartfon_xiaomi_redmi_a3_4_128gb_star_blue_ua",
  "https://pixophone.com/smartfon_xiaomi_redmi_13c_4_128gb_midnight_black_global_version",
  "https://pixophone.com/smartfon_xiaomi_redmi_13c_4_128gb_navy_blue_global_version",
  "https://pixophone.com/smartfon_xiaomi_redmi_13c_4_128gb_clover_green_global_version",
  "https://pixophone.com/smartfon_xiaomi_redmi_13c_6_128gb_midnight_black_global_version",
  "https://pixophone.com/smartfon_xiaomi_redmi_13c_6_128gb_navy_blue_global_version",
  "https://pixophone.com/smartfon_xiaomi_redmi_13c_6_128gb_clover_green_global_version",
  "https://pixophone.com/smartfon_xiaomi_redmi_13c_8_256gb_midnight_black_global_version",
  "https://pixophone.com/smartfon_xiaomi_redmi_13c_8_256gb_navy_blue_global_version",
  "https://pixophone.com/smartfon_xiaomi_redmi_13c_8_256gb_clover_green_global_version",
  "https://pixophone.com/smartfon_xiaomi_redmi_note_13_4g_6_128gb_midnight_black_ua",
  "https://pixophone.com/smartfon_xiaomi_redmi_note_13_4g_6_128gb_ice_blue_global_version",
  "https://pixophone.com/smartfon_xiaomi_redmi_note_13_4g_6_128gb_mint_green_global_version",
  "https://pixophone.com/smartfon_xiaomi_redmi_note_13_4g_8_256gb_midnight_black_global_version",
  "https://pixophone.com/smartfon_xiaomi_redmi_note_13_4g_8_256gb_ice_blue_global_version",
  "https://pixophone.com/smartfon_xiaomi_redmi_note_13_4g_8_256gb_mint_green_global_version",
  "https://pixophone.com/smartfon_xiaomi_redmi_note_13_5g_6_128gb_graphite_black_global_version",
  "https://pixophone.com/smartfon_xiaomi_redmi_note_13_5g_6_128gb_ocean_teal_global_version",
  "https://pixophone.com/smartfon_xiaomi_redmi_note_13_5g_6_128gb_arctic_white_global_version",
  "https://pixophone.com/smartfon_xiaomi_redmi_note_13_5g_8_256gb_graphite_black_global_version",
  "https://pixophone.com/smartfon_xiaomi_redmi_note_13_5g_8_256gb_ocean_teal_global_version",
  "https://pixophone.com/smartfon_xiaomi_redmi_note_13_5g_8_256gb_arctic_white_global_version",
  "https://pixophone.com/smartfon_xiaomi_redmi_note_13_pro_4g_8_256gb_midnight_black_global_version",
  "https://pixophone.com/smartfon_xiaomi_redmi_note_13_pro_4g_8_256gb_lavender_purple_global_version",
  "https://pixophone.com/smartfon_xiaomi_redmi_note_13_pro_4g_8_256gb_forest_green_global_version",
  "https://pixophone.com/smartfon_xiaomi_redmi_note_13_pro_4g_12_512gb_midnight_black_global_version",
  "https://pixophone.com/smartfon_xiaomi_redmi_note_13_pro_4g_12_512gb_lavender_purple_global_version",
  "https://pixophone.com/smartfon_xiaomi_redmi_note_13_pro_4g_12_512gb_forest_green_global_version",
  "https://pixophone.com/smartfon_xiaomi_redmi_note_13_pro_5g_8_256gb_midnight_black_global_version",
  "https://pixophone.com/smartfon_xiaomi_redmi_note_13_pro_5g_8_256gb_purple_global_version",
  "https://pixophone.com/smartfon_xiaomi_redmi_note_13_pro_5g_8_256gb_ocean_teal_eu",
  "https://pixophone.com/smartfon_xiaomi_redmi_note_13_pro_5g_12_512gb_midnight_black_global_version",
  "https://pixophone.com/smartfon_xiaomi_redmi_note_13_pro_5g_12_512gb_purple_global_version",
  "https://pixophone.com/smartfon_xiaomi_redmi_note_13_pro_8_256gb_black_global_version",
  "https://pixophone.com/smartfon_xiaomi_redmi_note_13_pro_8_256gb_aurora_purple_global_version",
  "https://pixophone.com/smartfon_xiaomi_redmi_note_13_pro_8_256gb_white_global_version",
  "https://pixophone.com/smartfon_xiaomi_redmi_note_13_pro_12_512gb_black_global_version",
  "https://pixophone.com/smartfon_xiaomi_redmi_note_13_pro_12_512gb_aurora_purple_global_version",
  "https://pixophone.com/smartfon_xiaomi_redmi_note_13_pro_12_512gb_white_global_version",
];
const arrLinkTouchXiaomi = [
  "https://touch.com.ua/ua/item/xiaomi-poco-f6-pro-12-512gb-black-global-eu/",
  "https://touch.com.ua/ua/item/xiaomi-poco-f6-pro-12-512gb-white-global-eu/",
  "https://touch.com.ua/ua/item/xiaomi-poco-f6-pro-12-256gb-black-global-eu/",
  "https://touch.com.ua/ua/item/xiaomi-poco-f6-pro-12-256gb-white-global-eu/",
  "https://touch.com.ua/ua/item/xiaomi-poco-f6-12-512gb-black-global-eu/",
  "https://touch.com.ua/ua/item/xiaomi-poco-f6-12-512gb-titanium-global-eu/",
  "https://touch.com.ua/ua/item/xiaomi-poco-f6-12-512gb-green-global-eu/",
  "https://touch.com.ua/item/xiaomi-poco-c65-6-128gb-black-global-eu/",
  "https://touch.com.ua/item/xiaomi-poco-c65-6-128gb-blue-global-eu/",
  "https://touch.com.ua/item/xiaomi-poco-c65-6-128gb-purple-global-eu/",
  "https://touch.com.ua/item/xiaomi-poco-c65-8-256gb-black-global-eu/",
  "https://touch.com.ua/item/xiaomi-poco-c65-8-256gb-blue-global-eu/",
  "https://touch.com.ua/item/xiaomi-poco-c65-8-256gb-purple-global-eu/",
  "https://touch.com.ua/item/xiaomi-poco-m6-6-128gb-black-global-eu/",
  "https://touch.com.ua/item/xiaomi-poco-m6-6-128gb-silver-global-eu/",
  "https://touch.com.ua/item/xiaomi-poco-m6-6-128gb-purple-global-eu/",
  "https://touch.com.ua/item/xiaomi-poco-m6-8-256gb-black-global-eu/",
  "https://touch.com.ua/item/xiaomi-poco-m6-8-256gb-silver-global-eu/",
  "https://touch.com.ua/item/xiaomi-poco-m6-8-256gb-purple-global-eu/",
  "https://touch.com.ua/ua/item/xiaomi-14-12-512gb-black-global-eu/",
  "https://touch.com.ua/ua/item/xiaomi-14-12-512gb-white-global-eu/",
  "https://touch.com.ua/ua/item/xiaomi-14-12-512gb-green-global-eu/",
  "https://touch.com.ua/ua/item/xiaomi-14-12-256gb-black-global-eu/",
  "https://touch.com.ua/ua/item/xiaomi-14-12-256gb-white-global-eu/",
  "https://touch.com.ua/ua/item/xiaomi-14-12-256gb-green-global-eu/",
  "https://touch.com.ua/item/xiaomi-14-ultra-16-512gb-black-global-eu/",
  "https://touch.com.ua/item/xiaomi-14-ultra-16-512gb-white-global-eu/",
  "https://touch.com.ua/ua/item/xiaomi-poco-m6-pro-8-256gb-black-global-eu/",
  "https://touch.com.ua/ua/item/xiaomi-poco-m6-pro-8-256gb-blue-global-eu/",
  "https://touch.com.ua/ua/item/xiaomi-poco-m6-pro-8-256gb-purple-global-eu/",
  "https://touch.com.ua/ua/item/xiaomi-poco-m6-pro-12-512gb-black-global-eu/",
  "https://touch.com.ua/ua/item/xiaomi-poco-m6-pro-12-512gb-blue-global-eu/",
  "https://touch.com.ua/ua/item/xiaomi-poco-m6-pro-12-512gb-purple-global-eu/",
  "https://touch.com.ua/item/xiaomi-poco-x6-5g-12-256-black-global-eu/",
  "https://touch.com.ua/item/xiaomi-poco-x6-5g-12-256-blue-global-eu/",
  "https://touch.com.ua/item/xiaomi-poco-x6-5g-12-256-white-global-eu/",
  "https://touch.com.ua/item/xiaomi-poco-x6-5g-8-256-black-global-eu/",
  "https://touch.com.ua/item/xiaomi-poco-x6-5g-8-256-blue-global-eu/",
  "https://touch.com.ua/item/xiaomi-poco-x6-5g-8-256-white-global-eu/",
  "https://touch.com.ua/item/xiaomi-poco-x6-pro-5g-12-512-black-global-eu/",
  "https://touch.com.ua/item/xiaomi-poco-x6-pro-5g-12-512-grey-global-eu/",
  "https://touch.com.ua/item/xiaomi-poco-x6-pro-5g-12-512-yellow-global-eu/",
  "https://touch.com.ua/item/xiaomi-poco-x6-pro-5g-8-256-black-global-eu/",
  "https://touch.com.ua/item/xiaomi-poco-x6-pro-5g-8-256-grey-global-eu/",
  "https://touch.com.ua/item/xiaomi-poco-x6-pro-5g-8-256-yellow-global-eu/",
  "https://touch.com.ua/item/xiaomi-redmi-13-8-256gb-black-global-eu/",
  "https://touch.com.ua/item/xiaomi-redmi-13-8-256gb-blue-global-eu/",
  "https://touch.com.ua/item/xiaomi-redmi-13-8-256gb-pink-global-eu/",
  "https://touch.com.ua/item/xiaomi-redmi-13-6-128gb-black-global-eu/",
  "https://touch.com.ua/item/xiaomi-redmi-13-6-128gb-blue-global-eu/",
  "https://touch.com.ua/item/xiaomi-redmi-13-6-128gb-pink-global-eu/",
  "https://touch.com.ua/item/xiaomi-redmi-a3-3-64gb-black-global-eu/",
  "https://touch.com.ua/item/xiaomi-redmi-a3-3-64gb-star-blue-global-eu/",
  "https://touch.com.ua/item/xiaomi-redmi-a3-3-64gb-forest-green-global-eu/",
  "https://touch.com.ua/item/xiaomi-redmi-a3-4-128gb-black-global-eu/",
  "https://touch.com.ua/item/xiaomi-redmi-a3-4-128gb-star-blue-global-eu/",
  "https://touch.com.ua/item/xiaomi-redmi-a3-4-128gb-forest-green-global-eu/",
  "https://touch.com.ua/item/xiaomi-redmi-13c-4-128gb-midnight-black-global-eu/",
  "https://touch.com.ua/item/xiaomi-redmi-13c-4-128gb-navy-blue-global-eu/",
  "https://touch.com.ua/item/xiaomi-redmi-13c-4-128gb-clover-green-global-eu/",
  "https://touch.com.ua/item/xiaomi-redmi-13c-6-128gb-midnight-black-global-eu/",
  "https://touch.com.ua/item/xiaomi-redmi-13c-6-128gb-navy-blue-global-eu/",
  "https://touch.com.ua/item/xiaomi-redmi-13c-6-128gb-clover-green-global-eu-111943-smartfony-smartfoni/",
  "https://touch.com.ua/item/xiaomi-redmi-13c-8-256gb-midnight-black-global-eu/",
  "https://touch.com.ua/item/xiaomi-redmi-13c-8-256gb-navy-blue-global-eu/",
  "https://touch.com.ua/item/xiaomi-redmi-13c-8-256gb-clover-green-global-eu/",
  "https://touch.com.ua/item/xiaomi-redmi-note-13-6-128-midnight-black-global-eu/",
  "https://touch.com.ua/item/xiaomi-redmi-note-13-6-128-ice-blue-global-eu/",
  "https://touch.com.ua/item/xiaomi-redmi-note-13-6-128-mint-green-global-eu/",
  "https://touch.com.ua/item/xiaomi-redmi-note-13-8-256-midnight-black-global-eu/",
  "https://touch.com.ua/item/xiaomi-redmi-note-13-8-256-ice-blue-global-eu/",
  "https://touch.com.ua/item/xiaomi-redmi-note-13-8-256-mint-green-global-eu/",
  "https://touch.com.ua/item/xiaomi-redmi-note-13-5g-6-128-midnight-black-global-eu/",
  "https://touch.com.ua/item/xiaomi-redmi-note-13-5g-6-128-ocean-teal-global-eu/",
  "https://touch.com.ua/item/xiaomi-redmi-note-13-5g-6-128-arctic-white-global-eu/",
  "https://touch.com.ua/item/xiaomi-redmi-note-13-5g-8-256-graphite-black-global-eu/",
  "https://touch.com.ua/item/xiaomi-redmi-note-13-5g-8-256-ocean-teal-global-eu/",
  "https://touch.com.ua/item/xiaomi-redmi-note-13-5g-8-256-arctic-white-global-eu/",
  "https://touch.com.ua/item/xiaomi-redmi-note-13-pro-8-256-midnight-black-global-eu/",
  "https://touch.com.ua/item/xiaomi-redmi-note-13-pro-8-256-lavender-purple-global-eu/",
  "https://touch.com.ua/item/xiaomi-redmi-note-13-pro-8-256-forest-green-global-eu/",
  "https://touch.com.ua/item/xiaomi-redmi-note-13-pro-12-512-midnight-black-global-eu/",
  "https://touch.com.ua/item/xiaomi-redmi-note-13-pro-12-512-lavender-purple-global-eu/",
  "https://touch.com.ua/item/xiaomi-redmi-note-13-pro-12-512-forest-green-global-eu/",
  "https://touch.com.ua/item/xiaomi-redmi-note-13-pro-5g-8-256-midnight-black-global-eu/",
  "https://touch.com.ua/item/xiaomi-redmi-note-13-pro-5g-8-256-purple-global-eu/",
  "https://touch.com.ua/item/xiaomi-redmi-note-13-pro-5g-8-256-ocean-teal-global-eu/",
  "https://touch.com.ua/item/xiaomi-redmi-note-13-pro-5g-12-512-midnight-black-global-eu/",
  "https://touch.com.ua/item/xiaomi-redmi-note-13-pro-5g-12-512-purple-global-eu/",
  "https://touch.com.ua/item/xiaomi-redmi-note-13-pro-8-256-black-global-eu/",
  "https://touch.com.ua/item/xiaomi-redmi-note-13-pro-8-256-aurora-purple-global-eu/",
  "https://touch.com.ua/item/xiaomi-redmi-note-13-pro-8-256-white-global-eu/",
  "https://touch.com.ua/item/xiaomi-redmi-note-13-pro-12-512-black-global-eu/",
  "https://touch.com.ua/item/xiaomi-redmi-note-13-pro-12-512-aurora-purple-global-eu/",
  "https://touch.com.ua/item/xiaomi-redmi-note-13-pro-12-512-white-global-eu/",
  "https://touch.com.ua/item/xiaomi-redmi-note-13-pro-12-512-mystic-silver-global-eu/",
];

async function f() {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  for (let i = 0; i < arrLinkSkayGooglePixel.length; i += 1) {
    await page.goto(arrLinkSkayGooglePixel[i]);
    const n = await page.$("#txt");

    let arr1 = await page.evaluate(() => {

      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".products-item-cost") != null) {
        return text2 + 'SKAY: ' + document.querySelector(".products-item-cost").innerText
      } else { return }

    });

    console.log(arr1)
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkJabkoGooglePixel.length; i += 1) {
    await page.goto(arrLinkJabkoGooglePixel[i]);

    let arr2 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".price-new__uah") != null) {
        return (
          text2 + "Jabko: " + document.querySelector(".price-new__uah").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr2);
    page.setDefaultNavigationTimeout(0);
  }

  for (let i = 0; i < arrLinkChinaGadgetsGooglePixel.length; i += 1) {
    await page.goto(arrLinkChinaGadgetsGooglePixel[i]);
    const n = await page.$("#txt");

    let arr3 = await page.evaluate(() => {

      let text2 = document.querySelector(".product-name").innerText;
      if (document.querySelector(".price") != null) {
        return text2 + 'CG: ' + document.querySelector(".price").innerText
      } else { return text2 }

    });

    console.log(arr3)
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkPixophoneGooglePixel.length; i += 1) {
    await page.goto(arrLinkPixophoneGooglePixel[i]);
    const n = await page.$("#txt");

    let arr1 = await page.evaluate(() => {

      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".autocalc-product-special") != null) {
        return text2 + 'Pix: ' + document.querySelector(".autocalc-product-special").innerText
      } else { return }

    });

    console.log(arr1)
    await page.setDefaultNavigationTimeout(0);
  }


  for (let i = 0; i < arrLinkSkayXiaomi.length; i += 1) {
    await page.goto(arrLinkSkayXiaomi[i]);
    const n = await page.$("#txt");

    let arr1 = await page.evaluate(() => {

      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".products-item-cost") != null) {
        return text2 + 'SKAY: ' + document.querySelector(".products-item-cost").innerText
      } else { return }

    });

    console.log(arr1)
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkJabkoXiaomi.length; i += 1) {
    await page.goto(arrLinkJabkoXiaomi[i]);

    let arr2 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".price-new__uah") != null) {
        return (
          text2 + "Jabko: " + document.querySelector(".price-new__uah").innerText
        );
      } else {
        return text2;
      }
    });

    console.log(arr2);
    page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkChinaGadgetsXiaomi.length; i += 1) {
    await page.goto(arrLinkChinaGadgetsXiaomi[i]);
    const n = await page.$("#txt");

    let arr3 = await page.evaluate(() => {

      let text2 = document.querySelector(".product-name").innerText;
      if (document.querySelector(".price") != null) {
        return text2 + 'CG: ' + document.querySelector(".price").innerText
      } else { return text2 }

    });

    console.log(arr3)
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkPixophoneXiaomi.length; i += 1) {
    await page.goto(arrLinkPixophoneXiaomi[i]);
    const n = await page.$("#txt");

    let arr1 = await page.evaluate(() => {

      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".autocalc-product-special") != null) {
        return text2 + 'Pix: ' + document.querySelector(".autocalc-product-special").innerText
      } else { return }

    });

    console.log(arr1)
    await page.setDefaultNavigationTimeout(0);
  }
  for (let i = 0; i < arrLinkTouchXiaomi.length; i += 1) {
    await page.goto(arrLinkTouchXiaomi[i]);
    const n = await page.$("#txt");

    let arr2 = await page.evaluate(() => {
      let text2 = document.querySelector("h1").innerText;
      if (document.querySelector(".price") != null) {
        return text2 + "Touch: " + document.querySelector(".price").innerText;
      } else {
        return text2;
      }
    });

    console.log(arr2);
    await page.setDefaultNavigationTimeout(0);
  }
}
f()