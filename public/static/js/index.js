const addNewLetterBtn = document.querySelector(".addNewLetterBtn");
const editor = document.querySelector(".editor");
const cancelBtn = document.querySelector(".cancelBtn");
const fileInput = document.querySelector(".file");

const chooseFiles = (event) => {
  const container = document.querySelector(".container");

  Array.from(event.target.files).forEach((file) => {
    const a = document.createElement("a");
    const span = document.createElement("span");
    a.textContent = file.name;
    a.className = "bg-gray-300 px-1 py-0.5 text-blue-600 text-sm";
    span.textContent = ` (${file.size})`;
    span.className = "text-black";
    a.appendChild(span);
    container.appendChild(a);
  });
  console.log(Array.from(event.target.files));
};

const quill = new Quill("#content", {
  theme: "snow",
});

const openEditor = () => {
  editor.classList.add("open");
};

const closeEditor = () => {
  editor.classList.remove("open");
};

const submitForm = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  formData.append("html", quill.root.innerHTML);

  if (fileInput.files.length > 0) {
    Array.from(fileInput.files).forEach((file) => {
      formData.append("file", file.name);
    });
  }

  try {
    const res = await axios.post("/auth/send-mail", formData, {
      onUploadProgress: (progressEvent) => {
        const percent = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        console.log(`Upload progress: ${percent}%`);
      },
    });
    const result = await res.data;
    console.log(result);
  } catch (error) {
    console.error("Error: ", error);
  }
};
