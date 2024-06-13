 import styles from "./Header.module.css"
import Badge from "../../elements/Badge";

function Header() {
  return (
    <div className={styles.container}>
      <h1 className="text-blue-700 text-4xl font-bold text-center">Contact App</h1>
      <p className="flex justify-center items-center gap-2 mt-6"><Badge background="bg-blue-200" color="text-blue-700" bgHover="hover:bg-blue-600" textHover="hover:text-white" transition="transition transition-all ease-in-out delay-150" ><a href="#">Botostart</a></Badge> <span className="text-gray-700">| React.js Full Course</span></p>
       
    </div>
  );
}

export default Header;
