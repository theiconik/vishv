import SearchRounded from "@material-ui/icons/SearchRounded";
import styles from '../styles/SearchInput.module.css';

const SearchInput = ({...rest}) => {
   return ( 
      <div className={styles.wrapper}>
         <SearchRounded style={{color:"inherit",}}/>
         <input type="text" className={styles.input} {...rest}/>
      </div>
    );
}
 
export default SearchInput;