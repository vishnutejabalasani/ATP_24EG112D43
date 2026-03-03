//   Properties:
//       title (string)
//       author (string)
//       pages (number)
//       isAvailable (boolean, default: true)


//   Methods:
//       borrow() - Marks the book as not available
//       returnBook() - Marks the book as available
//       getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
//       isLongBook() - Returns true if pages > 300, false otherwise





class Book{
    title
    author 
    pages
    isAvailable=true;
    constructor(title,author,pages){
        this.title=title;
        this.author=author;
        this.pages=pages;
    }
   borrow(){
            return this.isAvailable=false

    }
    returnBook(){
return this.isAvailable=true;

    }
     getInfo(){
        return `The ${this.title} by ${this.author} (${this.pages})` 

     }
 isLongBook(){
    if(this.pages>300)
        return true;

 }


}
const b1 = new Book("harrypotter","hobber",200)
const b2 = new Book("marvel","idk",400)
const b3 = new Book("dc","harry",600)
const b4 = new Book("super","man",100)
const b5 = new Book("bat","king",700)

   //   i. Display info of all books

let books = [b1,b2,b3,b4,b5]
for (let book of books){
 console.log(book.getInfo())

}
    //  ii. Borrow 2 books and show their availability status

    b2.borrow()
    b3.borrow()
    console.log(b2.title,b2.isAvailable)
    console.log(b3.title,b3.isAvailable)

         // iii. Return 1 book and show updated status
         b2.returnBook()
             console.log(b2.title,b2.isAvailable)

             //       iv. Count how many books are "long books" (more than 300 pages)

let count = 0;
for (let book of books){
if(book.pages>300)
    count++
}
console.log(count)

//      v. List all available books

for (let book of books){
if(book.isAvailable===true)
    console.log(book.title)
}





