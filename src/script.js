const addBookButton = document.getElementById("add-book");
const addButton = document.getElementById("add-button");
const dialog = document.querySelector("dialog");
const bookTitle = document.getElementById("book-title");
const authorName = document.getElementById("author-name");
const pageNumber = document.getElementById("pages");
const library = document.getElementById("library");
const read = document.getElementById("read");
const readButton = document.getElementById("read-button");

const space = " ";

const myLibrary = [
    {
        title: "book",
        author: "name",
        pages: 999,
        color: "bg-green-700",
        read: "Read"
    }
];

function Book() {
    library.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i]) {
            library.innerHTML += `<article class="bg-white w-64 font-bold rounded-lg p-6 flex gap-1.5 flex-col"><div class="flex justify-center"><p>Title:</p><p class="ms-1">${myLibrary[i].title}</p></div><div class="flex justify-center"><p>Author: </p><p class="ms-1">${myLibrary[i].author}</p></div><div class="flex justify-center"><p>Pages:</p><p class="ms-1"> ${myLibrary[i].pages}</p></div>
        <div class="flex justify-center"><button onclick=changeRead(${i}) class="focus:outline-none text-white ${myLibrary[i].color} hover:border-2 hover:border-black font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2" id="read-button">${myLibrary[i].read}</button><button class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2" onclick=deleteBook(${i})><i class="fa-solid fa-trash-can" style="color: text-white;"></i></button><div>
         </article>`;
        }
        

    }
}

    function addBookToLibrary() {
        if (bookTitle.value && authorName.value && pageNumber.value) {
            let newBook = {
                title: bookTitle.value,
                author: authorName.value,
                pages: pageNumber.value,
                color: read.checked ? "bg-green-700" : "bg-red-700",
                read: read.checked ? "Read" : "Not Read"
            };
            myLibrary.push(newBook);
            Book()
            dialog.close();
            bookTitle.value = "";
            authorName.value = "";
            pageNumber.value = "";
            read.checked = false;
        }


    }

    const changeRead = (index) => {
        if (myLibrary[index].read === "Read") {
            myLibrary[index].read = "Not Read";
            myLibrary[index].color = "bg-red-700";
        } else {
            myLibrary[index].read = "Read";
            myLibrary[index].color = "bg-green-700";
        }
        Book();
    }

    const deleteBook = (index) => {
        delete myLibrary[index];
        console.log(myLibrary);
        Book();
    }

    addBookButton.addEventListener("click", () => {
        dialog.showModal();
    })

    addButton.addEventListener("click", addBookToLibrary);

    Book();
