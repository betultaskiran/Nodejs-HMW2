const posts = [
  { title: "Post 1", content: "Bu birinci postun içeriği." },
  { title: "Post 2", content: "Bu ikinci postun içeriği." },
  { title: "Post 3", content: "Bu üçüncü postun içeriği." },
];

// Postları sıralayan fonksiyon
const listPosts = () => {
  console.log("Postlar:");
  posts.forEach((post, index) => {
    console.log(`${index + 1}. ${post.title} - ${post.content}`);
  });
};

// Yeni bir post ekleyen fonksiyon (asenkron)
const addPost = (newPost) => {
  return new Promise((resolve, reject) => {
    if (newPost && newPost.title && newPost.content) {
      posts.push(newPost);
      resolve("Yeni post başarıyla eklendi.");
    } else {
      reject("Post eklenirken bir hata oluştu. Geçerli bir post verisi girin.");
    }
  });
};

// İşlemleri sıralı bir şekilde gerçekleştiren fonksiyon
const executeBlog = async () => {
  try {
    console.log("Başlangıç postları:");
    listPosts();

    console.log("\nYeni bir post ekleniyor...");
    const newPost = { title: "Post 4", content: "Bu dördüncü postun içeriği." };
    const message = await addPost(newPost);
    console.log(message);

    console.log("\nGüncellenmiş post listesi:");
    listPosts();
  } catch (error) {
    console.error(error);
  }
};

// Blog işlemini başlat
executeBlog();
