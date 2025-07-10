import React from "react";
import {useState, useEffect} from "react";
import './home.css';
import home from '../../assets/home.jpg';
import sofa2 from '../../assets/sofa2.jpg'
import sofa1 from '../../assets/sofa1.png';

export default function Home(){
  const images = [home,sofa2,sofa1];
  const [index, setIndex] = useState(0);
  useEffect(()=>{
    const timer = setInterval(()=>{
      setIndex(i=>(i+1)%images.length);
    },3000);
    return () => clearInterval(timer);
  },[]);
  function Dots({count, activeIndex}){
    return(
      <div style={{display:'flex',gap:10,
        marginBottom:20}}>
          {[...Array(count)].map((_, i)=>(
            <span
            key={i}
            style={{
              width:8,height:8,
              borderRadius:'50%',
              backgroundColor:i === activeIndex ? 'black':
              'hsla(0, 29.40%, 96.70%, 0.93)',
              transition:'background-color 0.3s',
            }}
            />
          ))}
        </div>
      
    )
  }
    return(<div>
      <div  className="imgbg"style={{
      backgroundImage:`url(${images[index]}`,
      backgroundSize:'cover',
      backgroundPosition:'center',
      display:'flex',
      justifyContent: 'center',
      margin:20,
      alignItems:'flex-end',
      height:'70vh',borderRadius:70,
      textAlign:'center',color:'white',paddingBottom:20,
    }}>
      
      <Dots count ={images.length} activeIndex={index}/>
    </div>
    <div>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas aliquam autem dignissimos. Saepe, provident. Doloremque corrupti repellendus totam iure ipsum fugit in, quidem aliquam ea est laudantium aperiam expedita, illo minus! Reiciendis in quisquam earum expedita, dolorem, sint officia debitis ducimus id cum sunt, minima a ipsam architecto pariatur modi hic praesentium delectus cumque rerum. Commodi alias beatae facilis accusantium modi tenetur aliquam porro dolor cum odio eius, enim totam debitis autem numquam laudantium expedita, nemo eveniet architecto nihil, nam dolorem recusandae. Exercitationem error officia obcaecati cumque veniam ad assumenda quidem, perferendis beatae qui? Fugiat facilis, quia qui cumque ea itaque alias saepe laudantium accusamus deserunt ipsum harum voluptatibus ullam quo, quisquam commodi sed consectetur? Eligendi consectetur maiores quidem! Rem, quisquam non sint sapiente assumenda nam cum magni incidunt officia officiis odio perspiciatis aliquid laudantium delectus dolor eveniet exercitationem quidem nobis repellendus eum illum pariatur nihil odit. Odit totam ea itaque est quidem omnis dicta vero, minima nihil veniam tempore et voluptates dolorem suscipit voluptatem laudantium dolore eius accusantium? Natus commodi, quas atque iusto molestiae est praesentium. Eligendi, iusto ipsum? Incidunt excepturi iusto corrupti accusamus voluptatem veniam quae, vitae sed atque soluta dicta esse pariatur. Cupiditate molestiae harum nobis beatae aliquam cum, totam fugit nam, error doloremque sint possimus perspiciatis, eos ex quibusdam temporibus? Saepe quas earum commodi dicta id aspernatur, harum illum eius, nisi temporibus ipsa ea laudantium nulla et ut blanditiis tenetur quia. Non consequuntur at, fugit facere perferendis reiciendis voluptate quisquam sequi. Quasi, minus neque expedita, ea reiciendis consequatur corporis incidunt itaque doloremque magni laudantium recusandae similique ipsum. Vel quo illo, quaerat laudantium numquam nihil! Recusandae, itaque. Reprehenderit nam eligendi placeat id reiciendis dicta quo autem. Reprehenderit, sed. Sapiente cumque incidunt voluptas voluptatibus fugit totam a impedit hic, dolor amet laborum nostrum atque quos exercitationem dicta, consequuntur distinctio, praesentium ipsam. Vitae, atque animi! Et ipsam numquam eos quasi neque earum dolor, non eligendi similique placeat, beatae dolores porro doloremque consequatur hic sunt. Possimus, aliquid harum velit mollitia saepe earum beatae error quas ipsa, excepturi labore modi nisi, voluptas eveniet placeat culpa neque doloremque. Earum ullam esse explicabo vero! Ut eligendi dolores at nulla. Aspernatur aut nam veniam eius ducimus qui alias, quod perferendis at eligendi ex atque quo officiis molestias blanditiis ipsum dolore, veritatis harum ullam sequi unde dolores! Adipisci dolorum impedit aliquam unde blanditiis! Eligendi obcaecati nam reprehenderit. Corrupti eum vel maiores aliquid mollitia vitae officia, modi eius dolorum debitis excepturi accusamus quibusdam ipsum explicabo asperiores saepe nobis? Similique nihil vel voluptas tenetur quia possimus earum porro, voluptates distinctio nostrum laboriosam iusto dicta? Ea repellendus ipsum ut molestias impedit quidem natus cumque assumenda facere minima explicabo nostrum mollitia, eius debitis! Voluptatem nulla excepturi sapiente. Quibusdam fugit totam itaque odit accusantium. Porro nesciunt delectus vel. Illum molestias tenetur veniam laboriosam aut, eligendi voluptatibus. Vero placeat sint sunt tempora aperiam non laudantium ex repudiandae. Laudantium consequatur totam eaque? Commodi officiis fugit et ipsa iure illum ratione distinctio hic sed quam. Nam assumenda repellendus sequi odit ab quibusdam nulla, vel maiores commodi deleniti tempora, laudantium voluptatum nobis porro hic pariatur aliquid harum unde expedita libero provident enim necessitatibus ipsa quis! Odio dolorum assumenda illum porro debitis nihil, tenetur at fugiat itaque molestiae in, repudiandae ab temporibus, adipisci et? Veniam similique iste, obcaecati exercitationem esse magni harum incidunt vel excepturi tempora vitae rerum quaerat laboriosam optio quibusdam molestiae iusto impedit tenetur sunt nihil ut? Doloremque, repellendus ea! Dolores earum perspiciatis, nihil nemo quidem laborum corrupti quos architecto sed non ipsam assumenda labore explicabo et numquam accusamus qui magnam temporibus vitae eum rem aliquam? Fugiat laudantium explicabo incidunt facere obcaecati ex repellendus fugit, impedit voluptas consequuntur consequatur numquam est esse animi corrupti aliquid voluptatem? Dicta in, quibusdam id quas corrupti labore ex dolor fugit ratione rem porro doloribus tenetur corporis cum! Similique asperiores ab saepe ullam beatae ipsum ducimus culpa, placeat eaque et commodi quasi minus distinctio, totam corrupti nam officiis corporis! Impedit ut harum, dolorum officiis itaque voluptatem labore reprehenderit magni cupiditate velit maiores nisi asperiores qui, cumque facilis aperiam odit unde quasi corporis ad perspiciatis error eius. Eum enim sequi numquam temporibus perspiciatis reprehenderit ullam, reiciendis vel corporis ex sapiente quam nisi aspernatur! Vero voluptate similique a, sint impedit recusandae assumenda non minima harum facilis autem accusantium! Suscipit sed sequi nulla voluptatibus neque? Beatae cupiditate eum hic voluptates dolores pariatur. Accusantium, sequi. Autem, cum atque. Illo, nemo dicta quae ullam minima ducimus cupiditate facilis alias vero repellat dolores. Sit tempore consequatur incidunt officiis? Aliquid necessitatibus optio, tempora tenetur cum recusandae eius ipsam nemo soluta blanditiis explicabo perferendis incidunt sit quia? Velit repellendus ipsum sed tempore corporis labore, quasi voluptatibus magnam perferendis. Odit, architecto. At culpa hic recusandae earum. Rem corrupti sunt iure nesciunt! Placeat, consequatur quos libero eos autem expedita accusamus aperiam non id at ex eligendi praesentium pariatur eius vel obcaecati facilis velit tenetur veniam nobis hic. Animi esse totam autem, voluptate maxime numquam iste accusantium assumenda quia ullam deleniti quos explicabo illum. Illo, eius adipisci repudiandae architecto alias sapiente, facilis repellat aut, vero ratione accusamus veritatis minima. Laudantium distinctio ad eius beatae delectus laboriosam impedit nostrum error suscipit. Sint architecto ut adipisci veniam facere quo ipsum, nostrum accusamus possimus, ipsa voluptates cum nulla impedit rerum tenetur deleniti tempora dicta excepturi harum. Autem, nobis dolorem. Placeat aut dolore, deserunt eos dicta minus accusantium doloribus omnis ipsum ad mollitia harum numquam vel est facere doloremque voluptate, adipisci cumque corporis natus aperiam illum? Optio consequatur ipsam, nemo harum dolorum quaerat nostrum commodi porro maxime incidunt nobis quo voluptates esse in at quae natus magni repudiandae cupiditate. Dolores illum amet obcaecati sit asperiores ratione esse corrupti animi doloremque velit, officiis fugiat eum eaque blanditiis dolor corporis ea earum molestiae aliquam, laudantium reiciendis non placeat! Tenetur aliquid esse corporis incidunt quod fuga deleniti iure atque. Hic sunt velit similique commodi ratione quo deleniti rem alias omnis qui ipsam ab autem, in natus, sapiente corrupti amet est? Quae est iste aspernatur voluptate in iure a temporibus doloremque. Doloremque enim sequi eum blanditiis excepturi.</p>
    </div>
    </div>
    );
}