import s from './Section.module.css';

const Section = ({ title, children }) => {
    return (
      <div className={s.section}>
        <h2>{title}</h2>
        {children}
      </div>
    );
  };
  
  export default Section;