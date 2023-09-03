console.log("test!")

/*Assignment: Create a menu app as seen in this week’s video. What you create is up to you as long 
as it meets the following requirements:
    Use at least one array.
    Use at least two classes.
    Your menu should have the options to create, view, and delete elements./*
*/
// A menu app that navigates through the categories of "necklaces", "earrings" bracelets". 
// create two classes - Item and Menu
class Item {
    constructor(name) {
        // When a new item is made, set its 'name' characteristic to the provided name.
      this.name = name;
    }
  }
  //menu class will manage the different categories of jewelry
  class Menu {
    constructor() {
        //create an object called categories with empty arrays for different item categories
      this.categories = {
        necklaces: [],
        earrings: [],
        bracelets: [],
      };
    }
  
    // method to add items to a category
    addItem(category, name) {
      let newItem = new Item(name)
      this.categories[category].push(newItem)
    }
  
    // method to view items in a category
    viewItems(category) {
      console.log(`Items in ${category}:`)
      this.categories[category].forEach((item, index) => {
        console.log(`${index + 1}. ${item.name}`)
      });
    }
  
    //method to delete an item from a category (according to dirtections)
    deleteItem(category, index) {
        index -= 1;//<-need this because array starts at 0
      if (index >= 0 && index < this.categories[category].length) //this checks to see 
      //if the items position really exists in the index
      {
        this.categories[category].splice(index, 1)//if it exists, the splice keyword removes the item
        console.log(`Item deleted from ${category}`)
      } else {//if it doen't exist, it logs an error
        console.log(`Invalid index for ${category}`)
      }
    }
  }
  
  //Create an instance of the Menu class
  let menu = new Menu();
  
  //Adding items to the menu in different categories
  menu.addItem("necklaces", "Diamond Necklace")
  menu.addItem("earrings", "Gold Earrings")
  menu.addItem("bracelets", "Silver Bracelet")
  //viewing items in each category
  menu.viewItems("necklaces")
  menu.viewItems("earrings")
  menu.viewItems("bracelets")
  //how to delete an item
  menu.deleteItem("earrings", 1)
  
  menu.viewItems("earrings")
  