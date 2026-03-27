// كود لسحب الخدمات من المزود
const apiKey = "c78f4c8535085a0e53ce6773681d5704017073240ee0252ec5dd17d227d8b12f";
const apiUrl = "https://ms1.shop/api/v2?action=services&key=" + apiKey;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
      console.log("تم سحب " + data.length + " خدمة بنجاح!");
      // هذا هو الملف اللي حنستخدموه في الموقع
      console.log("window.allServices = " + JSON.stringify(data) + ";");
  });

