// Фабрика (Factory) — це патерн програмування, який надає загальний клас для створення об'єктів, який враховує
// передані аргументи та вирішує який клас повинен мати об’єкт при створенні
// Клас Book описує книгу в магазині
class Book {
  #title; #author; #coverColor;
  /**
   * Конструктор Book приймає об'єкт з параметрами
   * title - назва книги
   * author - автор книги
   * coverColor - колір обкладинки книги
   */
  constructor(title,author,coverColor) {
    
    this.#title = title; this.#author = author; this.#coverColor = coverColor;
  }
  discribe() {
    return `Книга: ${this.#title }, автор: ${this.#author}, колір обкладинки: ${this.#coverColor};`
  }
  /**
   * Метод describe генерує опис книги
   *  Повертає рядок у форматі: "Книга: '{назва}', автор: '{автор}', колір обкладинки: '{колір}'"
   */
}

/**
 * Клас AudioBook описує аудіокнигу в магазині
 */
class AudioBook {
  #title; #author; #audioLength;
  constructor(title,author,audioLength) {
    this.#title = title; this.#author = author; this.#audioLength = audioLength;
  }
  /**
   * Конструктор AudioBook приймає об'єкт з параметрами
   * title - назва книги
   * author - автор книги
   * audioLength - тривалість аудіокниги
   */
  discribe()  {
  return `Аудіокнига: ${this.#title}, автор: ${this.#author}, тривалість: ${this.#audioLength}`;}
  /**
     * Метод describe генерує опис аудіокниги
       Повертає рядок у форматі: "Аудіокнига: '{назва}', автор: '{автор}', тривалість: '{тривалість}'"
     */
}

/**
 * Клас ProductFactory використовується для створення об'єктів-продуктів.
 */

class ProductFactory {
  // TYPE - статична властивість, що визначає типи продуктів, які можуть бути створені.
  static TYPE =
   {BOOK: "book",
   AUDIOBOOK: "audiobook",
   };
   static createProduct(type, options) {
    if (type === ProductFactory.TYPE.BOOK) {
        return new Book(options.title, options.author, options.coverColor);
      } else if (type === ProductFactory.TYPE.AUDIOBOOK) {
          return new AudioBook(options.title, options.author, options.audioLength);
        } else {
            throw new Error(`Такого типу продукту не існує: ${type}`);}}}
        /**
   * Статичний метод createProduct використовується для створення об'єктів-продуктів, отримує
   * type - тип продукту, що має бути створений. Має бути одним зі значень властивості TYPE.
   * options - об'єкт з параметрами для конструктора продукту.
   *
   * В залежності від типу, повертає або екземпляр класу Book, або AudioBook.
   *
   *  Кидає помилку, якщо переданий тип не підтримується `Такого типу продукту не існує: ${type}`.
   */
  

console.log("Завдання 2 ====================================");
// Після виконання розкоментуйте код нижче

// Використовуємо ProductFactory для створення нової книги
const factoryBook = ProductFactory.createProduct(ProductFactory.TYPE.BOOK, {
  title: "Назва книги",
  author: "Автор книги",
  coverColor: "Синій",
});

// Виводимо в консоль опис нової книги
 console.log(factoryBook.discribe());

// Використовуємо ProductFactory для створення нової аудіокниги
 const factoryAudiobook = ProductFactory.createProduct(
  ProductFactory.TYPE.AUDIOBOOK,
  {
     title: "Назва аудіокниги",
     author: "Автор аудіокниги ",
     audioLength: "5 годин",
   }
 );

// Виводимо в консоль опис нової аудіокниги
 console.log(factoryAudiobook.discribe());

// Спробуємо створити продукт непідтримуваного типу
 try {
   const factoryUnknown = ProductFactory.createProduct("comics", {});
 } catch (error) {
   // Виводимо помилку в консоль
   console.error(error.message);
 }
