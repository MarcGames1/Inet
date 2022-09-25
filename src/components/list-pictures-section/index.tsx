import { tw } from 'twind';

function getIcon (FeatureSvg:any, index:number) {
  let Icon = FeatureSvg[index]
  
  return( <Icon width="100%" height="100%" />)
}


const ListWithPic = 
({indemn, titlu, listItems, }: 
  {
     
    indemn:string;
    titlu:string;
    listItems:any;
   
  }) => (
  <section id='list' className={tw(`lg:py-28 pt-28 overflow-hidden`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
      <div className={tw(`mb-16 text-center`)}>
        <span className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>{indemn}</span>
        <h2 className={tw(`mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>
          {titlu}
        </h2>
      </div>
      <div className={tw(`flex  flex-wrap -mx-8 items-center`)}>
        
          <ul>
            {listItems.map((item: any, index: number) => (
             
            
                <div key={item.title} className={tw(`flex ${ (index % 2) ? 'flex-row-reverse' : 'flex-row' }`)}>
              <li className={tw(`flex items-center w-full lg:w-1/2 px-8`)} key={item.title}>
                <div className={tw(`flex px-4 content-around `)}>
                  <span
                    className={tw(`flex w-16 h-16 mx-auto items-center
                      justify-center text-2xl font-bold rounded-full
                      bg-blue-50 text-blue-500`)}
                  >
                    {index + 1}
                  </span>
                </div>
                <div className={tw(`px-4`)}>
                  <h3 className={tw(`my-4 text-xl font-semibold`)}>{item.title}</h3>
                  <p className={tw(`text-gray-500 leading-loose`)}>{item.description}</p>
                </div>
              </li>
       <div className={tw(`items-center	w-full lg:w-1/2 px-8`)}>
          <div className={tw(`lg:mb-12 lg:mb-0 pb-12 lg:pb-0 mt-16 lg:mt-0 mx-6 lg:mx-0`)}>
            
            <item.Icon width="100%" height="100%" />
          </div>
        </div> 
        </div>
            ))}
          </ul>
        
      </div>
    </div>
  </section>
);

export default ListWithPic;
