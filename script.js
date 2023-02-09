const clothes = ["Shirt", "Pants", "Dress", "Shoe", "Hat", "Jacket", "Sock", "GString", "Thong", "StripedPantie", "PlainPantie", "Pantie", "Scarf", "Glove", "Belt", "Necklace", "Sunglasses", "Watch", "Earring", "Bra", "Bracelet", "Sportsbra", "Leggings", "Dildo", "ButtPlug", "Tampon", "Condom"];
const fates = ["you are an expensive garment, and sold to a wealthy family. They treat you well and you kept in a luxurious wardrobe. You are occasionally taken out to be worn by the family members and their guests, and you enjoy this attention and the admiration that comes with it. ",
 "is donated to a costume museum, where you are displayed with respect and reverence. You are seen and admired by countless visitors, who marvel at your beauty and craftsmanship. You stand as a testament to a time gone by, and in time you become a beloved and treasured part of the museum's collection.",
 "after the transformation, you are taken to a small secondhand shop and put up for sale. You are quickly sold to a family who does not take good care of you. You often shuffled around from closet to closet, and rarely taken out to be worn. Over time, you become more and more worn and tattered, until you are eventually thrown away and forgotten.",
"you are purchased by a wealthy collector who puts you in a glass case and uses you as a decoration in their home. You are not allowed to move or speak, and you are constantly watched by the collector who only views you as an object. You are not treated with any respect and you are completely powerless in your situation.",
 "you are bought in a thrift store by a young girl who loves to sew. She alters you to fit her own style, and you are worn to parties, school, and other events. You are a part of her wardrobe, and you help her express her individual sense of fashion.",
  "you are given away in a charity auction, and purchased by a wealthy woman who uses you as part of her collection of luxury garments. You are kept in a closet and only taken out for special occasions. You are treated with respect and admiration, and you are proud to be a part of her wardrobe.",
    "you are donated to a church rummage sale, and purchased by a family in need. They alter you to fit their own style, and you are worn by the family members to church services and other events. You are part of their wardrobe, and you help them express their individual sense of fashion.",
     "you are used as part of a costume for a theatre production. You are shuffled from place to place, thrown about carelessly and often mishandled. You are constantly subjected to the sweat and grime of the actors and actresses, and your material is stretched, torn, and stained.", 
     "you are sold at a flea market and purchased by a young girl who loves to sew. She alters you to fit her own style and wears you to school, parties, and other events. You are part of her wardrobe, and you help her express her individual sense of fashion.",
      "after the transformation you find yourself in a fashion store, where you are constantly handled and moved around. Customers come in and try on different pieces of clothing, squeezing and stretching you in ways that cause you discomfort and distress. You are constantly exposed to dust and dirt, and you are unable to do anything but remain as still as possible, waiting to be purchased.",
       "after the transformation you are taken to a high-end fashion boutique and put on display for customers to admire. You are treated with care and respect, and you are constantly being refashioned and updated with the latest trends. You are treated to luxurious fabrics and intricate embroidery, and you are admired by all who see you. You are the centerpiece of the store, and you are able to provide a sense of style and elegance to all who come in.",
        "you are now a piece of clothing hanging in a store window, where you are constantly exposed to the elements. The hot sun beats down on you all day, fading your fabric and causing it to become brittle and weak. You are touched and handled by strangers, often roughly, and you are constantly moved around in the store window as different clothes are put on display. Over time, your fabric becomes worn and torn, making you virtually useless as clothing.",
         "you are now a piece of clothing hanging in a closet, where you are rarely seen or touched. You are forgotten and neglected, and the dust and dirt from the closet begin to accumulate on you. You are slowly strangled by the other clothes that are hung around you, and the fabric of your clothing starts to fray and rip due to the tight quarters. Over time, you are no longer recognizable as clothing and eventually become a pile of rags.",
          "you are now a piece of clothing that is cherished and loved. You are stored carefully and handled with respect, and you are never forgotten or neglected. You are kept in your own special place, away from any dust or dirt, and you are frequently taken out and worn. Whenever someone wears you, you feel special and appreciated, and you are always taken care of when you are not being worn. Over time, you become a beloved piece of clothing that is passed down for generations.",
           "you are found by a local seamstress who takes you in and uses you as material for her designs. She stitches you into a dress and sells you in a boutique. You are bought and worn for just a few hours before being discarded. You are eventually thrown in the trash and deteriorate away.",
            "you are found by a wealthy family who takes you in and restores you. They hang you up in their wardrobe and use you for special occasions. You are taken care of, mended and worn for years, and eventually passed down to the next generation. You are cherished by the family and bring them joy throughout the years."];
const durations = ["The duration is 1 year but when your in contact with sunlight it becomes 2 years longer.",
 "The duration is 6 Months but when you get stained the transformation becomes permanent. ",
  "The duration is 3 months but when your getting washed it becomes 5 months longer. ",
   "The duration is 1 year but when your getting in contact with cum it becoms 2 years longer",
    "The duration is 6 months but when you are exposed to heat it becomes 8 months longer.",
     "The duration is 3 months but when you are exposed to moisture it becomes 4 months longer.",
      "The duration is permanent. There is no way to turn back and you have to stay like this forever.",
       "The duration is 5 years but when exposed to a dry-cleaning machine, it becomes permanent.",
        "The duration is 4 months but when you get properly folded it can be extended to 6 months. ",
        "The duration is 3 years but when you get regularly stored in a dry place it can be extended to a lifetime."];
        
        const colors = ["black", "blue", "red"]
        
        const Shirt ={
            "red": "https://images.dresshead.com/images/Red%20Shirts/5715008/large/1.jpg",
            "black": "https://handcmediastorage.blob.core.windows.net/productimages/FD/FDPTA002-A01-06-800px-1040px.jpg",
            "blue": "https://ae01.alicdn.com/kf/HTB11lQ0w8smBKNjSZFFq6AT9VXaR/Sweetown-Long-Sleeve-Shirt-Women-Sexy-Skinny-Blue-Printed-Crop-Top-T-Shirt-Femme-Autumn-2018.jpg"
        }
        const Pants ={
            "red": "https://img3.lovelyimg.com/images/duopingtai/202003/202003_D_1583375744_10906.jpg",
            "black": "https://ae01.alicdn.com/kf/HLB1_sxpX.zrK1RjSspmq6AOdFXaK/LORDXX-Black-Jeans-woman-Ribbed-Slim-Trousers-Femme-Skinny-women-Jean-2018-Ladies-Sexy-Push-Up.jpg",
            "blue": "https://ae01.alicdn.com/kf/HTB1TR6KlxrI8KJjy0Fpq6z5hVXaP/M-H-Artemis-Ass-Rip-Jeans-Women-s-High-Waist-Slim-fit-Jeans-Sexy-Holes-Denim.jpg"
        }
        const Dress ={
            "red": "https://cdn-img-1.wanelo.com/p/5b5/6bd/cb3/f1ce5584ea98707e27def9e/full_size.jpg",
            "black": "https://ae01.alicdn.com/kf/HTB1AJfAd8HH8KJjy0Fbq6AqlpXan/Black-Womens-Sexy-Dresses-Party-Night-Club-Dress-Summer-Elegant-Dresses-Women-Big-Size-Slim-Vneck.jpg",
            "blue": "https://i.pinimg.com/736x/83/2b/ce/832bcee9648e712b3a1d0a35db39346e--doll-dresses-club-dresses.jpg"
        }

        const Shoe = {
            "red": "https://ae01.alicdn.com/kf/HTB1vJhEhFGWBuNjy0Fbq6z4sXXap/Women-shoes-pointed-toe-high-heels-women-Pumps-footwear-sapato-feminino-fashion-simple-sweet-sexy-party.jpg_640x640.jpg",
            "black": "https://th.bing.com/th/id/R.db65f93803931d8827398aa24e585827?rik=qV0tWGWDOfUUyQ&riu=http%3a%2f%2fimg.auctiva.com%2fimgdata%2f0%2f9%2f8%2f9%2f8%2f0%2fwebimg%2f542790708_o.jpg&ehk=rR7BNDEHKNq2MDKjyvbxpr9El8AVyIvasTIEEhsUN%2fM%3d&risl=&pid=ImgRaw&r=0",
            "blue": "https://i.pinimg.com/originals/85/06/d1/8506d11aa2dacbd2771eef4b9e318436.jpg"
        }
        const Hat ={
            "red": "https://i.pinimg.com/originals/6b/72/c1/6b72c1edb22d97ae09760131fb17ad38.jpg",
            "black": "https://i.pinimg.com/736x/d3/a5/52/d3a5520d62b44e9c844f4703a50dcac8.jpg",
            "blue": "https://th.bing.com/th/id/OPE.Xm2CnmsjpK9cuA300C300?pid=21.1&w=160&h=200&dpr=1,1"
        }
        const Jacket ={
            "red": "https://thumbs.dreamstime.com/z/vertical-picture-sexy-business-woman-red-jacket-pantie-panties-white-background-44257777.jpg",
            "black": "https://www.dhresource.com/0x0/f2/albu/g5/M00/10/13/rBVaI1lLNDWAeOG1AAH4VHGsHbg492.jpg",
            "blue": "https://ae01.alicdn.com/kf/HTB1z3QyLVXXXXauaXXXq6xXFXXXJ/2017-Fashion-Spring-Autumn-Sexy-Slim-Blue-Women-Jacket-Cotton-Casual-Lady-Denim-Jacket-Baseball-Uniform.jpg"
        }
        const Sock ={
            "red": "http://commondatastorage.googleapis.com/iew5e6yh/old/BW-610.jpg",
            "black": "https://cdn.shopify.com/s/files/1/1391/9395/products/Black_Mesh_Socks7_1200x1200.jpg?v=1568785297",
            "blue": "https://superx.studio/2971-thickbox_default/baby-blue-thigh-high-socks.jpg"
        }
        const GString ={
            "red": "https://i.etsystatic.com/12331884/r/il/5b6c92/1530564408/il_570xN.1530564408_ropn.jpg",
            "black": "https://ae01.alicdn.com/kf/HTB1NcPEkcLJ8KJjy0Fnq6AFDpXas/Annajolly-New-Underwear-Women-Sexy-Black-Lace-Thong-Floral-G-String-Solid-Low-Rise-Crotchless-Panties.jpg",
            "blue": "https://tse1.explicit.bing.net/th/id/OIP.xJv_hsMPfnKuMKjrEb14oAHaH3?pid=ImgDet&w=193&h=204&c=7&dpr=1,1&isAdult=true"
        }
        const Thong ={
            "red": "https://s.yimg.com/aah/spicylingeriestore/sweet-red-lace-thong-15.png",
            "black": "https://c.wallhere.com/photos/67/ed/women_black_stockings_brunette_ass_back_rear_view_standing_thong-1157789.jpg!d",
            "blue": "https://sexyphoto.es/wp-content/uploads/2016/12/perfect-ass.jpg"
        }
        const StripedPantie ={
            "red": "https://cdn.leslipfrancais.fr/11031-thickbox_default/la-zaza-mariniere-rouge-lingerie-bas-mariniere-rouge.jpg",
            "black": "https://ae01.alicdn.com/kf/HTB1Zas8QXXXXXa4apXXq6xXFXXXx/2017-New-fashion-Women-Striped-Panties-Cotton-women-s-briefs-sexy-low-waist-panties-Ladies-Cotton.jpg_640x640.jpg",
            "blue": "https://i.etsystatic.com/22835613/r/il/1286d4/3311172849/il_fullxfull.3311172849_ojam.jpg"
        }
        const PlainPantie ={
            "red": "https://i.ebayimg.com/images/g/W9sAAMXQ855RrvuI/s-l300.jpg",
            "black": "https://www.ppz.com/img2/images/tqdl/base.jpg",
            "blue": "https://th.bing.com/th/id/OIP.figw0v6Gh71a0crwQYRYoQHaHa?pid=ImgDet&rs=1"
        }
        const Pantie ={
            "red": "https://i.pinimg.com/736x/7e/cc/10/7ecc10f7cfa7ba86528bbf1ff0b43139.jpg",
            "black": "https://cdn.shopify.com/s/files/1/0293/9277/products/Fashion_Nova_03-17-17-066_1000x.jpg?v=1490985368",
            "blue": "https://img0.etsystatic.com/116/1/6642139/il_fullxfull.941965550_54je.jpg"
        }
        const Scarf ={
            "red": "https://th.bing.com/th/id/R.8ad017efeffe498baddbe02bd05bc48b?rik=VP1D%2be2T3ubOvQ&riu=http%3a%2f%2fpicture-cdn.wheretoget.it%2fyoq2us-i.jpg&ehk=zltZ8sP0qyvDHIUO7qcmj%2bliiLv%2b5GlcQ%2bA0BZVNMEo%3d&risl=&pid=ImgRaw&r=0",
            "black": "https://i.pinimg.com/originals/43/26/5c/43265c3d68be0925d99ae2cfe89efb15.jpg",
            "blue": "https://i.pinimg.com/originals/e1/9f/2e/e19f2e851bf058df94ca8f810687b053.jpg"
        }
        const Glove ={
            "red": "https://www.heavencostumes.com.au/media/catalog/product/cache/3ca7c4de79fd9294a778cbfdebc9dde4/e/-/e-well-04002-rd-long-satin-opera-gloves-in-red-close-r.jpg",
            "black": "https://www.heavencostumes.com.au/media/catalog/product/cache/afad95d7734d2fa6d0a8ba78597182b7/s/m/smf-9363-long-black-satin-gloves-costume-accessory.jpg",
            "blue": "https://i.pinimg.com/originals/c8/6b/80/c86b80f4d8ef1a69fcb19cb72007f9f2.jpg"
        }
        const Belt ={
            "red": "https://th.bing.com/th/id/OIP.67VrzioROsUaJ1zPu6-sgQHaLI?pid=ImgDet&rs=1",
            "black": "https://i.pinimg.com/736x/4e/96/92/4e96922613cf78bfe3620ec6c6bbe24f.jpg",
            "blue": "https://www.sublimeclothing.co.za/wp-content/uploads/2019/03/belt9.jpg"
        }
        const Necklace ={
            "red": "https://i.etsystatic.com/6431556/r/il/b3c43c/330844789/il_1140xN.330844789.jpg",
            "black": "https://i.ebayimg.com/images/g/lp8AAOSwOdpXyncx/s-l640.jpg",
            "blue": "https://n1.sdlcdn.com/imgs/a/s/h/Young-And-Forever-Beautiful-Romantic-SDL915083991-3-c7da2.jpg"
        }
        const Sunglasses ={
            "red": "https://i.pinimg.com/originals/10/e2/8f/10e28f8adb25ba65d46371eaee193590.jpg",
            "black": "https://th.bing.com/th/id/R.92834c0592380ae51bf20e43e4454ac6?rik=%2b9kCfC3KsaEuIw&pid=ImgRaw&r=0",
            "blue": "https://i.pinimg.com/736x/4a/87/60/4a8760fe86aeb96ca1d3f80ba137d948.jpg"
        }
        const Watch ={
            "red": "https://th.bing.com/th/id/OIP.bObjCCDbNVQ2iFQ-4XR8rQHaHa?pid=ImgDet&rs=1",
            "black": "https://ae01.alicdn.com/kf/HTB1CYDuocnI8KJjSspeq6AwIpXal/Luxury-Women-Watches-Simple-Ladies-Steel-Watch-Rose-Gold-Elegant-Minimalism-Casual-Black-Female-Waterproof-Clock.jpg",
            "blue": "https://cliff.ae/pub/media/catalog/product/cache/aac8b4e8c6e90d36f8480a97ca23a711/3/_/3_358.jpg"
        }
        const Earring ={
            "red": "https://ae01.alicdn.com/kf/HTB1LotXejgy_uJjSZTEq6AYkFXaE/2018-New-Hot-Tassel-Drop-Earrings-Black-vintage-tassel-earrings-long-Big-Dangle-Earrings-Female-Earrings.jpg",
            "black": "https://www.lulus.com/images/product/xlarge/1571834_252002.jpg",
            "blue": "https://ae01.alicdn.com/kf/HTB1zh0UCAKWBuNjy1zjq6AOypXa0/1pcs-Sell-Sea-Is-Blue-Luxury-Ear-Stud-Earrings-For-Women-Round-With-Cubic-Zircon-Charm.jpg"
        }
        const Bra ={
            "red": "https://ae01.alicdn.com/kf/HTB1JblxIXXXXXa8XXXXq6xXFXXXm/2015-New-Fashion-Women-Red-Bra-Push-Up-Shaping-Underwire-Lace-Shapers-100-Cotton-Sexy-Bras.jpg",
            "black": "https://ae01.alicdn.com/kf/HTB1MSp2Kr1YBuNjSszeq6yblFXaz/Women-Black-Sexy-Lace-Bra-Enchanting-Hollow-Lace-Tops-Bra-Sexy-Lingerie-Sleepwear-Brassiere-Underwear-M.jpg",
            "blue": "https://boloblog.com/wp-content/uploads/2018/07/blue-bra-olanfen-wave-ruffles-lace-push-up-convertible-blue-bra-w6044-zhwxofa-.jpg"
        }
        const Bracelet ={
            "red": "https://ae01.alicdn.com/kf/HTB1u6gEPXXXXXabXXXXq6xXFXXXu/2018-New-Red-Sexy-Wedding-Lace-Bracelet-Bridal-Jewelry-For-Women.jpg",
            "black": "https://ae01.alicdn.com/kf/HTB1mOudmHsTMeJjSszgq6ycpFXaB/Fashion-Vintage-Heart-Shaped-Gem-Lace-Bracelet-New-Arrival-Sexy-Black-Bracelet-for-Women-Best-Quality.jpg_640x640.jpg",
            "blue": "https://ae01.alicdn.com/kf/UTB87nSGef2JXKJkSanrq6y3lVXar/Hot-Sale-Wholesale-Austria-Blue-Crystal-Bangle-Bracelet-for-Women-Tops-Fashion-Jewelry-Gift.jpg"
        }
        const Sportsbra ={
            "red": "https://www.dhresource.com/0x0s/f2-albu-g6-M00-5F-5D-rBVaR1qaFWWAOdMAAAO0d1Y-PaM238.jpg/sexy-yoga-sports-bra-women-2018-fitness-gym.jpg",
            "black": "https://th.bing.com/th/id/R.ba9008912f2a4bd6ce680c1365b3c717?rik=gRhoXxrE1HLT%2bA&pid=ImgRaw&r=0",
            "blue": "https://cdn.shopify.com/s/files/1/0275/2908/5014/products/35.1_1024x1024.jpg?v=1579130204"
        }
        const Leggings ={
            "red": "https://i.pinimg.com/originals/f9/09/ce/f909ce9f096228b028f527d6b441657b.jpg",
            "black": "https://ae01.alicdn.com/kf/HTB1R8qJaPgy_uJjSZKbq6xXkXXa3/Mermaid-Curve-New-Women-High-Waist-Leggings-Sport-Fitness-Push-Up-Sexy-Hip-Leather-Patchwork-Women.jpg",
            "blue": "https://i5.walmartimages.com/asr/39b28dc6-abd7-4a25-a516-0dc91430ac73.1d88607bd1ccbdcfc54f21c732529672.jpeg"
        }
        const Dildo ={
            "red": "https://www.megatube.xxx/contents/videos_sources/17000/17436/screenshots/7.jpg",
            "black": "https://xxgasm.com/wp-content/upload/2019/07/best_realistic_bla-3334.jpg",
            "blue": "https://3.bp.blogspot.com/-b1aSrOy0ZaI/UvsofnhsoqI/AAAAAAAAAXE/bw_nD114P8Y/s1600/14_734.jpg"
        }
        const ButtPlug ={
            "red": "https://hipa.pl/environment/cache/images/500_500_productGfx_14249.jpg",
            "black": "https://ae01.alicdn.com/kf/HTB1KRV8NFXXXXbdXpXXq6xXFXXX7/Free-shipping-34-80mm-medium-black-silicone-anal-plug-Jeweled-Rhinestone-insert-butt-plug-sexy-topper.jpg",
            "blue": "https://imgs1cdn.adultempire.com/product/2773973_1h.jpg"
        }
        const Tampon ={
            "red": "https://th.bing.com/th/id/R.007bc02291fa8effeeb1555bc0130d80?rik=Gr6FZhiz52zkkA&riu=http%3a%2f%2fi.imgur.com%2fX0wy8BR.jpg&ehk=vfrRUldhIyJQDHtZIYmblWlgjumCLEr%2f%2fi77ce1oYjI%3d&risl=&pid=ImgRaw&r=0",
            "black": "https://deutschlandherald.com/wp-content/uploads/2021/06/Herald-1.jpg",
            "blue": "https://media.istockphoto.com/photos/menstrual-tampon-on-a-blue-background-menstruation-time-hygiene-and-picture-id691610430?k=6&m=691610430&s=170667a&w=0&h=uooiSEN2OmyxKoXBwLbHcXqoF9IcN6IGf1uwBtFuWPg="
        }
        const Condom ={
            "red": "https://image.freepik.com/free-photo/people-holding-red-condom_23-2148495879.jpg",
            "black": "https://cdn11.bigcommerce.com/s-b2st9rn/images/stencil/original/products/228/330/glyde_cola_condoms_montage__12539.1463979698.jpg?c=2",
            "blue": "https://thumbs.dreamstime.com/b/woman-opens-condom-young-opening-teeth-package-closeup-81232944.jpg"
        }
        
    // Function to generate a random curse
    function generateCurse() {
        // Pick a random item from each array
        const randomClothes = clothes[Math.floor(Math.random() * clothes.length)];
        const randomFate = fates[Math.floor(Math.random() * fates.length)];
        const randomDuration = durations[Math.floor(Math.random() * durations.length)];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        // Update the src attribute of the transformed-image element
        if(randomClothes === "Shirt"){
            document.getElementById("transformed-image").src = Shirt[randomColor];
        }else if(randomClothes === "Pants"){
            document.getElementById("transformed-image").src = Pants[randomColor];
        }else if(randomClothes === "Dress"){
            document.getElementById("transformed-image").src = Dress[randomColor];
        }else if(randomClothes === "Shoe"){
            document.getElementById("transformed-image").src = clothesImages["Shoe"];
        }else if(randomClothes === "Hat"){
            document.getElementById("transformed-image").src = clothesImages["Hat"] }
    // Put the curse together and return it
    const curse = `I will be transformed into ${randomClothes} and ${randomFate}  ${randomDuration}.`;
    return curse;
}
console.log("Loading started")
// Function to show the loading state
function showLoading() {
    document.getElementById("loading").style.display = "block";
}

// Function to hide the loading state
function hideLoading() {
    document.getElementById("transformed-image").src = clothesImages[randomClothes];
    document.getElementById("loading").style.display = "none";
    console.log('Loading finished');
}


// Function that generates a new transformation
function generateNewTransformation() {
    showLoading(); // Show the loading state before the transformation is generated
    setTimeout(() => {
        const randomClothes = clothes[Math.floor(Math.random() * clothes.length)];
        document.getElementById("transformed-clothing").innerHTML = generateCurse();
        document.getElementById("transformed-image").src = clothesImages[randomClothes];

        hideLoading(); // Hide the loading state after the transformation is generated
    }, 200); // Timeout of 200 milliseconds (0,2 seconds)
    console.log("Loading finished");



}

