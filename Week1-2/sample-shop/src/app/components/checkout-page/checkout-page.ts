import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';

@Component({
  selector: 'app-checkout-page',
  imports: [],
  templateUrl: './checkout-page.html',
  styleUrl: './checkout-page.css'
})
export class CheckoutPage {
  products: Product[] = [
        {
            "id": 1,
            "name": "Laptop",
            "price": 500,
            "description": "A high-performance laptop featuring a powerful Intel Core i7 processor, 16GB RAM, and a 512GB SSD for fast boot times and seamless multitasking. The 15.6-inch Full HD display offers vibrant colors and sharp details, perfect for both work and entertainment. With a sleek, lightweight design and long-lasting battery life, it's ideal for professionals and students on the go.",
            "image": "https://cdn.thewirecutter.com/wp-content/media/2024/11/cheapgaminglaptops-2048px-7981.jpg",
            "onStock": true
        },
        {
            "id": 2,
            "name": "Headphones",
            "price": 50,
            "description": "Premium noise-cancelling headphones that provide an immersive audio experience by blocking out ambient noise. Featuring plush ear cushions for maximum comfort during extended use, high-fidelity sound quality with deep bass, and a built-in microphone for clear calls. The foldable design and included carrying case make them perfect for travel and daily commutes.",
            "image": "https://cdn.mos.cms.futurecdn.net/Kxu5tMjoaXXSMBPux7cU7A.jpg",
            "onStock": true
        },
        {
            "id": 3,
            "name": "Galaxy A15 5G Blue Black 128 GB | Samsung Levant",
            "price": 300,
            "description": "The latest model smartphone boasts a stunning 6.5-inch OLED display with HDR support for vivid visuals. Equipped with a high-resolution triple camera system for capturing professional-quality photos and videos, a powerful octa-core processor for smooth performance, and 5G connectivity for ultra-fast internet speeds. The large battery ensures all-day usage, and it runs on the newest Android OS with enhanced security features.",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLteS6hJwA65fHZjkWL2olfSfrFCA7GG_oAg&s",
            "onStock": false
        },
        {
            "id": 4,
            "name": "Wireless Mouse",
            "price": 25,
            "description": "An ergonomic wireless mouse designed for comfort and precision, featuring a responsive 1600 DPI optical sensor for accurate tracking on various surfaces. With silent click buttons to reduce noise, a scroll wheel for easy navigation, and a reliable 2.4GHz USB receiver for a stable connection up to 10 meters. The auto-sleep function helps conserve battery life, providing months of usage on a single AA battery.",
            "image": "https://www.showmetech.com.br/wp-content/uploads//2024/09/Logitech-MX-Anywhere-3S.jpg",
            "onStock": false
        }
    ]
}
