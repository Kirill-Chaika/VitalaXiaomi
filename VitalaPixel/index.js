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



async function f() {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  // for (let i = 0; i < arrLinkSkayGooglePixel.length; i += 1) {
  //   await page.goto(arrLinkSkayGooglePixel[i]);
  //   const n = await page.$("#txt");

  //   let arr1 = await page.evaluate(() => {

  //     let text2 = document.querySelector("h1").innerText;
  //     if (document.querySelector(".products-item-cost") != null) {
  //       return text2 + 'SKAY: ' + document.querySelector(".products-item-cost").innerText
  //     } else { return }

  //   });

  //   console.log(arr1)
  //   await page.setDefaultNavigationTimeout(0);
  // }
  // for (let i = 0; i < arrLinkJabkoGooglePixel.length; i += 1) {
  //   await page.goto(arrLinkJabkoGooglePixel[i]);

  //   let arr2 = await page.evaluate(() => {
  //     let text2 = document.querySelector("h1").innerText;
  //     if (document.querySelector(".price-new__uah") != null) {
  //       return (
  //         text2 + "Jabko: " + document.querySelector(".price-new__uah").innerText
  //       );
  //     } else {
  //       return text2;
  //     }
  //   });

  //   console.log(arr2);
  //   page.setDefaultNavigationTimeout(0);
  // }

  for (let i = 0; i < arrLinkChinaGadgetsGooglePixel.length; i += 1) {
    await page.goto(arrLinkChinaGadgetsGooglePixel[i]);
        const n = await page.$("#txt");
        

        let arr3 = await page.evaluate(() => {
            
            let text2 = document.querySelector("h3").innerText;
            if (document.querySelector(".price") !== null) {
                return text2 + 'CG: ' + document.querySelector(".price").innerText
            } else {return text2}
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

}
f()