import mouse from "../assets/mouse.jpg";
import keyboard from "../assets/keyboard.jpg";
import monitor from "../assets/monitor.jpg";
import hub from "../assets/usbHub.jpg";
import headset from "../assets/headset.jpg";

export const products = [
  {
    productName: "Wireless Mouse",
    stock: true,
    desc: "Ergonomic wireless mouse with adjustable DPI.",
    price: 25.99,
    img: mouse,
  },
  {
    productName: "Mechanical Keyboard",
    stock: false,
    desc: "RGB backlit mechanical keyboard with blue switches.",
    price: 89.99,
    img: keyboard,
  },
  {
    productName: "HD Monitor",
    stock: true,
    desc: "24-inch Full HD monitor with IPS panel.",
    price: 149.99,
    img: monitor,
  },
  {
    productName: "USB-C Hub",
    stock: true,
    desc: "Multiport USB-C hub with HDMI, USB 3.0, and SD card slot.",
    price: 39.99,
    img: hub,
  },
  {
    productName: "Gaming Headset",
    stock: false,
    desc: "Surround sound gaming headset with noise-canceling mic.",
    price: 59.99,
    img: headset,
  },
];
