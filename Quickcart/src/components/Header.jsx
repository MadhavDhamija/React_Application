import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // ← Add import

function Header({ searchTerm, onSearchChange }) {
  const { getTotalItems, toggleCart } = useCart(); // ← Use context
  
  // ... rest of component uses getTotalItems() and toggleCart
}