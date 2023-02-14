import './Footer.scss';

export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  
  return (
    <footer>
      `&copy; {year} All Rights Resevered`
    </footer>
  );
}