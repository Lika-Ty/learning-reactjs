import "./App.css";
import PropsArticle from "./components/Props/propsArticle";

// Main Components for react project
function App() {
  return (
    <>
      <PropsArticle title="Cambodia" sources="https://cdn.pixabay.com/photo/2022/12/02/03/31/girl-7630188_1280.jpg">
        {/* it children of React Component */}
        <div>
          ខុសត្រង់ថាខ្ញុំលង់ស្នេហ៍ស្រី ខុសត្រង់ស្រីក៏ស្នេហ៍បងដែរ
          ខុសត្រង់តែអូនមានគូហេីយ ហេតុម្តេចឡើយយេីងធ្វេីយ៉ាងហ្នឹង
          អូនគឺស្នេហ៍ដែលខ្យល់បក់មក ឲមករកបងត្រឹមមួយប្រាវ តែមួយឆាវនេះរាងធ្ងន់ណាស់
          ពេលនេះបានប៉ះរបស់ពិត ជិតដាច់ខ្យល់ស្លាប់ ប្រលែងឲខ្ញុំហោះ
          ប្រលែងឲហោះហើររសាត់ ឲស្នេហាបក់ផាត់ខ្ញុំទៅ ខ្លួនខ្ញុំដូចជាខ្លែងក្រដាស់
          លំបាកណាស់នៅលេីអាកាស ឯកាណាស់ព្រះអេីយ ប្រលែងឲខ្ញុំហោះ ប្រលែងឲហោះហើរតែឯង
          ខ្លែងដែលតូចប្រឹងហោះឡេីងទៅ ពេលនេះមេីលទៅមានក្តីសុខ តែថ្ងៃមុខប្រាកដជាឈឺ
          មិនព្រឺព្រោះស្រលាញ់
        </div>
      </PropsArticle>
      <PropsArticle title="Thailand" sources="https://images.pexels.com/photos/220938/pexels-photo-220938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
        <span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
          repudiandae accusamus vitae optio eum veritatis quidem fugit error?
          Tempore, totam!
        </span>
      </PropsArticle>
      <PropsArticle title="Vietnam" sources="https://images.pexels.com/photos/160846/french-bulldog-summer-smile-joy-160846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          dignissimos cumque ab ipsam explicabo! Ad repellendus reiciendis iure,
          aspernatur distinctio vitae qui voluptates! Voluptatem commodi odit
          dicta magnam mollitia est numquam nesciunt distinctio consequuntur,
          ipsam voluptas dolorum. Consequatur, placeat. Quam laboriosam
          excepturi in ab ut, recusandae repellat rem explicabo odit!
        </div>
      </PropsArticle>
    </>
  );
}

export default App;
