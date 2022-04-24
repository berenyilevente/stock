enum ROUTES {
  HOME = "/",
  LOGIN = "/Login",
  REGISTER = "/register",
  STOCK = "/stock",
  CLIENTS = "/clients",
  SUPPLIES = "/supplies",
  ARTICLES = "/articles",
  EDIT_CLIENT = "/clients/:id",
  EDIT_STOCK = "/stock/:id",
  EDIT_ARTICLE = "/article/:id",
  EDIT_STOCK_HEAD = "/edit-stock-head/:id",
  DELIVERY = "/delivery",
  STOCK_HEAD_ITEM = "/stock-head-item/:id",
  EDIT_STOCK_HEAD_ITEM = "/edit-stock-head-item/:id",
}

export default ROUTES;
