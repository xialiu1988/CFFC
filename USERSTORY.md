# User Stories

## Users

### Customer 

As a customer I would look for the information to be simple to navigate with the information I am looking for clear to access. I would  like a list of products and memberships listed clearly. I would also like to have a shopping cart for products I select, with some kind of visual cue to let me know how many items I have in my cart wherever I am in the site. I would be nice to see the upcoming events as well.

### Marketing

As a marketing representative I the following would be actionable data points:
- How many products have been purchased by type
- List of highest selling products
- How many memberships have been sold by tier level

### Chapter Captains

As a chapter captain I would like to know how many members by tier level I have in my chapter. I would also like to ensure that members or potential members have a clear point of contact.

### Developer

As a developer I want to ensure the site is user friendly and captures actionable data points for the marketing and chapter captain teams. I would need a list of products that are going to be sold, and the specifics for different membership level. I would also ensure that the shopping cart is intuitive. 


## Requirements

### Header
Simply a Logo left aligned and the Menu right aligned. The Menu should have the following:
- Join
- Chapters
  * Navigates to an informational page of the different chapters
- Products
-Cart
-Reports


### Home Page

This page should just be an informational page that displays a hero image under the header, with the following sections:
- Who we are
  * An informational section about the supporter group
- Chapters
  * A section displaying an image of the different chapter logos
- Events
  * Displays the upcoming events in rows of three columns

### Join
This age where is member can select a membership level to add to their cart. This should have three membership levels:
- Platinum
  * $50
- Gold
 * $$0
- Silver
  * $20

When a membership is added to the cart it should add the cart number that is a visual cue across all pages.

### Chapters
Informational page that shows the different chapters and their logos. I should also have meeting location and contact info for each chapter

### Products
Shows the different products we have for purchase with price and an add to cart button. The add to cart should add the visual cue to the cart link across all pages.

### Cart
Should function like a normal cart with product/membership, quantities, and prices. A sub-total should be added as well. When the purchase button is selected it should iterate on number of purchases for each individual item to be used to reports page.

### Reports

Should render some kind of visualization for the metrics for products and members with quantities purchased for each.