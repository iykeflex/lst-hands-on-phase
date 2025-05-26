import { FaRegEnvelope, FaInstagram, FaYoutube, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { LuPhone } from 'react-icons/lu';
import { CiUser } from 'react-icons/ci';
import { BsSearch, BsCart2 } from 'react-icons/bs';
import { FaRegHeart } from "react-icons/fa";

// 👤 Login Icon
const LoginIcon = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
    <CiUser size={20} color='#1e90ff' />
    <span>Login / Register</span>
  </div>
);
// 🔍 Search Icon
const SearchIcon = () => (
  <BsSearch size={20} color='#1e90ff' />
);

// love Icon with badge
const LoveIcon = ()=> (
  <div style={{ position: 'relative', display: 'inline-block' }}> 
    <FaRegHeart size={20} color="#1e90ff" />
    <span style={{
      position: 'absolute',
      top: '-6px',
      right: '-10px',
      backgroundColor: 'red',
      color: 'white',
      borderRadius: '50%',
      padding: '2px 6px',
      fontSize: '10px',
    }}>
      1
    </span>
  </div>
)

// 🛒 Cart Icon with Badge
const CartIcon = () => (
  <div style={{ position: 'relative', display: 'inline-block' }}>
    <BsCart2 size={20} color="#1e90ff" />
    <span style={{
      position: 'absolute',
      top: '-6px',
      right: '-10px',
      backgroundColor: 'red',
      color: 'white',
      borderRadius: '50%',
      padding: '2px 6px',
      fontSize: '10px',
    }}>
      1
    </span>
  </div>
);

// ☎️ Phone Info
const Phone = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <LuPhone size={20} color="#fff" />
    <span>(225) 555-0118</span>
  </div>
);

// 📧 Email Info
const Email = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <FaRegEnvelope size={20} color="#FFFFFF" />
    <span>michelle.rivera@example.com</span>
  </div>
);

// 🌐 Social Media Icons
const SocialIcons = () => (
  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'center' }}>
    <span style={{ color: '#fff' }}>Follow Us :</span>
    <FaInstagram size={20} color="#fff" />
    <FaYoutube size={20} color="#fff" />
    <FaFacebookF size={20} color="#fff" />
    <FaTwitter size={20} color="#fff" />
  </div>
);

export {
  Phone,
  Email,
  SocialIcons,
  LoginIcon,
  SearchIcon,
  CartIcon,
  LoveIcon,
};
