export const projects: any = {
  rockettutoring: {
    name: "Rocket Tutoring",
    slug: "rockettutoring",
    link: "https://rockettutoring.org",
    image: "/RocketTutoringSplash.png",
    tags: [
      "Live Meetings",
      "Chat",
      "Stripe Payments",
      "Scheduling Assistant",
      "Site Administration"
    ],
    visual: "Dark",
    about: `
    <div class="container">
        <h3 class="text-4xl font-bold mb-2">Rocket Tutoring</h3>
        <p>Writeup coming soon!</p>
    </div>
          `
  },
  celebguessr: {
    name: "CelebGuessr",
    slug: "celebguessr",
    link: "https://rskinney.pythonanywhere.com/",
    image: "/CGuessrSplash.png",
    tags: ["New Celebrity Daily", "Share Feature", "Helpful Hints"],
    visual: "Light",
    about: `
    <div class="container">
        <h3 class="text-4xl font-bold mb-2">CelebGuessr</h3>
        <p>Writeup coming soon!</p>
    </div>
          `
  },
  gorillacarts: {
    name: "Gorilla Carts",
    slug: "gorillacarts",
    link: "https://rskinney.pythonanywhere.com/gorillacarts",
    image: "/GorillaCartsSplash.png",
    tags: [
      "Place Orders",
      "Modify Product BOMs",
      "Modify Customers",
      "Modify Materials"
    ],
    visual: "Light",
    about: `
    <div class="container">
    <h3 class="text-4xl font-bold mb-2">Gorilla Carts</h3>

    <div class="row flex-lg-row align-items-center pb-5">
      <p>This program uses over 1,000 lines of logic to perform business functions required by a fictional client, Gorilla Carts. Meant to be interacted with
        by employees of the organization, there are several tabs that allow an employee to perform their daily business functions. This page will describe the functionality
        of these capabilities divided into categories of customers, products, materials, suppliers, and orders.
      </p>

      <h3 class="text-xl font-bold pt-3 mt-2">Customer Tracking</h3>
      <p>This is a simple function of the website, allowing the user to add, edit, and delete customers in a SQL database through a simple user interface provided
        by the application. 
      </p>
      <div class="text-center pt-3">
        <img src="/images/customers.webp" style="max-width:70%" class="mx-auto mt-3" alt="List of Gorilla Carts customers" height="100px" loading="lazy">
      </div>

      <h3 class="text-xl font-bold pt-3 mt-2">Product Tracking</h3>
      <p>This function of the website allows the user to view products available for sale to its customers. Clicking on the Product ID of each product will allow the user to quickly view the Bill of Materials (BOM) for that particular product.
      </p>
      <div class="text-center pt-3">
        <img src="/images/products.webp" style="max-width:70%" class="mx-auto mt-3" alt="List of Gorilla Carts products" height="100px" loading="lazy">
      </div>
      <p class="pt-3 mt-3" >Exploding the BOM of a product allows procurement in the organization to plan appropriately when purchasing raw materials. Visualizing exactly what and how many of each product is required is also a very important part prior to production, as lacking the correct amount of materials for production could halt a production line.</p>
      <div class="text-center">
        <img src="/images/bom.webp" style="max-width:50%" class="pt-3 mx-auto" alt="Lists Bill of Materials for each product" height="100px" loading="lazy">
      </div>

      <h3 class="text-xl font-bold pt-3 mt-3">Materials Tracking</h3>
      <p>After gaining an understanding of what materials are required for production of a product, another important factor in planning is understanding how many raw materials are available. These quantities as well as information about materials can then be adjusted based on receival of new materials or changes upon an inventory count.
      </p>
      <div class="text-center">
        <img src="/images/materials.webp" style="max-width:70%" class="mx-auto pt-3 mt-3" alt="List of Gorilla Carts customers" height="100px" loading="lazy">
      </div>

      <h3 class="text-xl font-bold pt-3 mt-3">Supplier Tracking</h3>
      <p>This is another simple but necessary function of the website, allowing the user to add, edit, and delete suppliers in a SQL database through a simple user interface provided
        by the application. 
      </p>
      <div class="text-center">
        <img src="/images/suppliers.webp" style="max-width:70%" class="mx-auto pt-3 mt-3" alt="List of Gorilla Carts customers" height="100px" loading="lazy">
      </div>

      <h3 class="text-xl font-bold pt-3 mt-3">Order Tracking</h3>
      <p>This screen allows the user to view what orders have been placed, the customer who is expecting the order, the employee who placed the order, as well as the order total cost for the customer.
      </p>
      <div class="text-center">
        <img src="/images/orders.webp" style="max-width:70%" class="mx-auto pt-3 mt-3" alt="List of Gorilla Carts products" height="100px" loading="lazy">
      </div>
      <p class="pt-2">Viewing an invoice from an order will allow for further details that may be necesary during production or for quality control purposes, such as when the order was placed and what particular product was purchased by the customer.</p>
      <div class="text-center">
        <img src="/images/invoice.webp" style="max-width:50%" class="mx-auto pt-3 mt-3" alt="Lists Bill of Materials for each product" height="100px" loading="lazy">
      </div>

      <h3 class="text-xl font-bold pt-3 mt-3">Order Placing</h3>
      <p>As the most complex portion of the website, it is also necessary that employees are able to place orders for customers on this website. Necessary information includes the customer ordering, the employee that is placing the order, as well as the particular product being purchased. When an order is placed, the necessary amount of materials for production are allocated to this product and are removed from the existing inventory.
      </p>
      <div class="text-center">
        <img src="/images/placeorder.webp" style="max-width:50%" class="mx-auto pt-3 mt-3" alt="List of Gorilla Carts products" height="100px" loading="lazy">
      </div>
      <p class="pt-2">While this functionality may seem simple, it is actually quite complex as it has two strict requirements: 1) An order may not be placed if there are not enough raw materials determined by the BOM and order quantity to produce any particular product, and 2) No order may place an order for more than 10 of the same cart. An example of the first error has been shown below. </p>
      <div class="text-center">
        <img src="/images/ordererror.webp" style="max-width:50%" class="mx-auto pt-3 mt-3" alt="Lists Bill of Materials for each product" height="100px" loading="lazy">
      </div>

    </div>
  </div>
  `
  },
  autotrackr: {
    name: "AutoTrackr",
    slug: "autotrackr",
    link: "https://rskinney.pythonanywhere.com/autotrackr",
    image: "/AutoTrackrSplash.png",
    tags: ["Add/Edit Events", "Add/Edit Attendees"],
    visual: "Light",
    about: `
          <div class="container">
          <h3 class="text-4xl font-bold mb-2">AutoTrackr</h3>
            
            <div class="row flex-lg-row align-items-center">
              <p>This program is a simple events management website that allows for people to keep track of events and those who have RSVP'd through the website, allowing for simpler planning and preparation.
              </p>

              <h3 class="text-xl font-bold pt-3 mt-3">Events</h3>
              <p>Viewing this screen allows you to see all upcoming events, sorted in ascending order. This allows for a quick understanding of everything that is going on around you.
              </p>
              <div class="text-center">
                <img src="/images/events.webp" style="max-width:70%" class="mx-auto pt-3 mt-3" alt="List of Gorilla Carts customers" height="100px" loading="lazy">
              </div>

              <h3 class="text-xl font-bold pt-3 mt-3">Add Events</h3>
              <p>Pressing 'Create event' on the main event screen permits quick addition of new events to the website.
              </p>
              <div class="text-center">
                <img src="/images/createevent.webp" style="max-width:70%" class="mx-auto pt-3 mt-3" alt="List of Gorilla Carts customers" height="100px" loading="lazy">
              </div>
             
              <h3 class="text-xl font-bold pt-3 mt-3">Manage Event</h3>
              <p>Clicking on a particular event's name will utilize the Event ID to show more content about the event, such as the host, description, as well as attendees planning on visiting. Through this screen, the user may edit and delete this event or add and manage the attendees who have RSVP'd.
              </p>
              <div class="text-center">
                <img src="/images/viewevent.webp" style="max-width:70%" class="mx-auto pt-3 mt-3" alt="List of Gorilla Carts customers" height="100px" loading="lazy">
              </div>
            </div>
          </div>
  `
  }
};
