// Одиночка (Singleton) — це патерн програмування, який забезпечує,
// що клас має тільки один екземпляр і надає глобальну точку доступу до цього екземпляра.

// Клас OrderTracker відповідає за відстеження замовлень
class OrderTracker {
 static instance = null;// Приватне статичне instance поле для збереження єдиного екземпляра класу початкове значення null
  static orders = [];// Приватне статичне orders поле для збереження списку замовлень початкове значення []
  constructor(instance,orders) {
    this.instance=instance;
      
  }
  /**
   * Статичний метод create використовується для створення єдиного екземпляра класу
   */
  
  static create() {
  if ( !OrderTracker.instance) {// Перевіряємо, чи є вже створений екземпляр класу
    OrderTracker.instance = new OrderTracker();}// Якщо немає, створюємо новий екземпляр
    return OrderTracker.instance;// Інакше повертаємо єдиний екземпляр класу
    }
    
    /**
   * Статичний метод add використовується для додавання замовлення до списку
   * Отримує item та додає його до масиву замовлень
   */
    
    static add (item) {
      OrderTracker.orders.push(item);}
      
    /*const tracker1 = OrderTracker.getInstance();
    const tracker2 = OrderTracker.getInstance();
    tracker1.addOrder("Item 1");
    tracker2.addOrder("Item 2");*/
   

    static get () {
      return this.orders;}
  /**
   * Статичний метод get використовується для отримання списку замовлень
   */
    }
console.log("Завдання 1 ====================================");
// Після виконання розкоментуйте код нижче

// Створюємо єдиний екземпляр класу OrderTracker
 const tracker = OrderTracker.create();

// Додаємо замовлення до списку
 OrderTracker.add("Телефон");
 OrderTracker.add("Ноутбук");

// Отримуємо список замовлень
 const orders = OrderTracker.get();

// Виводимо список замовлень в консоль
 console.log(orders);
