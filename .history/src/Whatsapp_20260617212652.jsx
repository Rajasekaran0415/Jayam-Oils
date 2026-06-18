import { FaWhatsapp } from "react-icons/fa";

function Whatsapp() {
  return (
    <a
      href="https://wa.me/916369803832?text=Hi%20Jayam%20Oils%2C%20I%20want%20to%20place%20an%20order"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      title="Order via WhatsApp"
    >
      <FaWhatsapp size={30} /> what
    </a>
  );
}

export default Whatsapp;
