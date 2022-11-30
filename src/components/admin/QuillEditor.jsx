import React, {useState} from 'react';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import { uploadImage } from '../../../js/imageHandler'
import { tw } from 'twind';


const uploadImages =[]

class QuillEditor extends React.Component {
  constructor(props) {
    super(props);
    this.content = props.content;
    
    this.state = {
      editorHtml: this.content,
      
    };

    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(html) {
    this.setState({ editorHtml: html });
    this.props.setContent(html);
  }

  //     componentDidMount() {
  //         this.setState({editorHtml: this.content})
  //         console.log(this.state)
  //         console.log(this.content)
  // }

  imageHandler() {
    const input = document.createElement('input');

    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();
    
    input.onchange = async () => {
      const file = input.files[0];
      const formData = new FormData();

      formData.append('image', file);

      // Save current cursor state
      const range = this.quill.getSelection(true);

      // Insert temporary loading placeholder image
      // this.quill.insertEmbed(range.index, 'image', `${window.location.origin}/images/loaders/placeholder.gif`);

      // Move cursor to right side of image (easier to continue typing)
      this.quill.setSelection(range.index + 1);

     const res = await uploadImage(formData); // API post, returns image location as string e.g. 'http://www.example.com/images/foo.png'
    
     
     
      const publicImgUri = `${process.env.SERVER}/${res}`;
      // Remove placeholder image
      this.quill.deleteText(range.index, 1);

      // Insert uploaded image
      // this.quill.insertEmbed(range.index, 'image', res.body.image);
      this.quill.insertEmbed(range.index, 'image', res);

    };
    
  }

  render() {
    return (
      <div className={'text-editor'}>
        <ReactQuill
          defaultValue={this.content}
          ref={(el) => {
            this.quill = el;
          }}
          onChange={this.handleChange}
          placeholder={this.placeholder}
          modules={{
            toolbar: {
              container: [
                [{ header: '1' }, { header: '2' }, { header: [3, 4, 5, 6] }, { font: [] }],
                [{ size: [] }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{ list: 'ordered' }, { list: 'bullet' }],
                ['link', 'video'],
                ['link', 'image', 'video'],
                ['clean'],
                ['code-block'],
              ],
              handlers: {
                image: this.imageHandler,
              },
            },
          }}
        />
      </div>
    );
  }
}

export default QuillEditor;


// const QuillEditor = props =>{
//     const [content, setContent] = useState(props.content || '')
//     const [state, setState] = useState({ editorHtml: content })

//     const handleChange = html =>{
//         setState({ editorHtml: html })
//         setContent(html)
//     }

//    const imageHandler = () => {
//         const input = document.createElement('input');

//         input.setAttribute('type', 'file');
//         input.setAttribute('accept', 'image/*');
//         input.click();

//         input.onchange = async () => {
//             const file = input.files[0];
//             const formData = new FormData();

//             formData.append('image', file);

//             // Save current cursor state
//             const range = this.quill.getSelection(true);

//             // Insert temporary loading placeholder image
//             // this.quill.insertEmbed(range.index, 'image', `${window.location.origin}/images/loaders/placeholder.gif`);

//             // Move cursor to right side of image (easier to continue typing)
//             this.quill.setSelection(range.index + 1);

//             const res = await uploadImage(formData); // API post, returns image location as string e.g. 'http://www.example.com/images/foo.png'
//             const publicImgUri = `${process.env.SERVER}/${res}`
//             // Remove placeholder image
//             this.quill.deleteText(range.index, 1);

//             // Insert uploaded image
//             // this.quill.insertEmbed(range.index, 'image', res.body.image);
//             this.quill.insertEmbed(range.index, 'image', res);
//         };
//     }

//     return (
//             <div className={"text-editor" }>
                
//                 <ReactQuill
//                     ref={el => {
//                         this.quill = el;
//                     }}
//                     onChange={handleChange}
//                     placeholder= { props.placeholder ? props.placeholder : '' }
                    
//                     modules={{
//                         toolbar: {
//                             container: [
//                                 [{ header: '1' }, { header: '2' }, { header: [3, 4, 5, 6] }, { font: [] }],
//                                 [{ size: [] }],
//                                 ['bold', 'italic', 'underline', 'strike', 'blockquote'],
//                                 [{ list: 'ordered' }, { list: 'bullet' }],
//                                 ['link', 'video'],
//                                 ['link', 'image', 'video'],
//                                 ['clean'],
//                                 ['code-block']
//                             ],
//                             handlers: {
//                                 image: imageHandler
//                             }
//                         }
//                     }}
//                 />
//             </div>
//         );
// }




// export default QuillEditor;