import { tw } from "twind";

export const Columns = ({ isStackedOnMobile , children}) => {
  return (
    <div className={tw('my-10')}>
      <div className={tw(`max-w-5x mx-auto ${isStackedOnMobile ? 'block md:flex' :'flex'}`)}>{children}</div>
    </div>
  );
};