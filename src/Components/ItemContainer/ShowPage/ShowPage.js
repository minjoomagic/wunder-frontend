import React from "react";
import "../../../Styling/ItemContainer/ShowPage/ShowPage.css";
import ItemShow from "./ItemShow";
import ItemInfo from "./ItemInfo";
import ItemMap from "./ItemMap";

class ShowPage extends React.Component {
  // state = {
  //   item: {}
  // };

  render() {
    return (
      <div className="view">
        <div className="left-side">
          <div className="item-main">
            <ItemShow item={this.props} />
          </div>
        </div>
        <div className="right-side">
          <ItemInfo item={this.props} />
          <ItemMap item={this.props} />
        </div>
      </div>
    );
  }
}

export default ShowPage;

// // --------------- Master Filter Handler ------------------
// filterHandler = () => {
//   if (this.state.searchTerm && this.state.selection) {
//     let searchResults = this.nameSearchFilter(this.state.searchTerm);
//     return this.doubleSearchFilter(searchResults, this.state.selection);
//   } else if (this.state.selection) {
//     return this.categorySelectionFilter(this.state.selection);
//   } else if (this.state.searchTerm) {
//     return this.nameSearchFilter(this.state.searchTerm);
//   } else {
//     return this.state.items;
//   }
// };
//
// // ----------------- Handle Search Only ----------------
// nameSearchFilter = input => {
//   return this.state.items.filter(item => {
//     return item.name.toLowerCase().includes(input.toLowerCase());
//   });
// };
//
// // ------- Handle Selection Only -----
// categorySelectionFilter = input => {
//   if (input.toLowerCase() !== "all") {
//     return this.state.items.filter(item => {
//       return item.category.toLowerCase().includes(input.toLowerCase());
//     });
//   } else {
//     return this.state.items;
//   }
// };
// // -------- Helper Function to handle Both Selection and Search Filters ---------
// doubleSearchFilter = (arrayOfItems, selection) => {
//   return arrayOfItems.filter(item => {
//     return item.category.toLowerCase().includes(selection.toLowerCase());
//   });
// };
