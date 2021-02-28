import './ModalWindow.css';
import closeCross from '../../assets/img/close-cross.svg';
import Emoji from "a11y-react-emoji";

const ModalWindow = () => {
  return (
   <div className="modal-window_container">
     <div className="modal-window">
       <span className="exit-cross_modal">
         <img className="exit-cross_img" src={closeCross} alt="cross"/>
       </span>
       <section className="header-modal">
        <span className="mood-emoji_modal">
          <Emoji symbol="😌" label="smile"/>
        </span>
         <h1 className="description-title_modal">The lake of my dream</h1>
         <span className="description-date_modal">Mon 1 March</span>
       </section>
       <section className="modal-window_body">
         <img className="note-image" src="https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?cs=srgb&dl=pexels-pok-rie-132037.jpg&fm=jpg" alt="Note"/>
         <p className="description-text_modal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consectetur consequuntur esse est nobis non odit quas quis repudiandae rerum! Consequatur delectus ducimus eaque esse, iusto nihil non porro quae quod recusandae. Dignissimos ratione soluta voluptas! Commodi consequuntur fugit illum nihil nulla odit quibusdam quod voluptas! Expedita fuga nisi repellat? Animi asperiores, fugiat ipsam laudantium magnam magni quas? Aliquid eveniet exercitationem modi neque nostrum possimus quaerat quis voluptatum! Beatae doloribus eaque eveniet laboriosam molestias nihil odio praesentium quaerat reiciendis rem! Aperiam asperiores harum nam nihil non nulla praesentium quibusdam, repudiandae ut velit. Ab aliquid culpa dolor doloribus eaque est et excepturi, exercitationem fugiat iste labore mollitia nostrum nulla qui quisquam rerum tempore tenetur, unde velit voluptate. Commodi dolorem, earum laboriosam nisi nobis temporibus voluptatem voluptatum. Animi dignissimos illo magnam, natus officiis tempora vitae! Adipisci culpa dignissimos earum eum harum, iusto magnam maiores nihil odit quaerat ratione reiciendis tenetur vero? Aliquid amet beatae blanditiis dolor, dolore exercitationem fuga impedit ipsum iusto maxime molestiae nesciunt nihil nisi numquam obcaecati pariatur possimus quas quos rem sequi similique sunt unde, voluptates voluptatibus voluptatum. Assumenda aut deleniti dolore excepturi ipsum nostrum, odio repudiandae totam vitae? Architecto deserunt enim expedita, fugit libero numquam quis vitae voluptatibus.</p>
       </section>
     </div>
   </div>
  )
}

export default ModalWindow;