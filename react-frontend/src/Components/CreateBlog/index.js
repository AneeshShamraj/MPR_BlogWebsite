import "./styles.css";
export const CreateBlog = () => {
  return (
    <div class="textbox">
      <div class="teaxhead"></div>
      <div class="textInput">
        <input type="text" name="text" id="inputTag" />
        <input type="button" name="text" class="button" value="Add" />
      </div>
    </div>
    // <div className="CreateBlog__wrapper">
    //   <div className="CreateBlog__wrapper_top">Add Blog</div>
    //   <form className="Create__wrapper_form">
    //     <label htmlFor="title" className="title">
    //       <p>Add Title</p>
    //       <input type="text" placeholder="Title" />
    //     </label>
    //     <label htmlFor="blog" className="blogdetail">
    //       <p>Add Blog</p>
    //       <textarea type="text" placeholder="Write your thoughts here..." />
    //     </label>
    //   </form>
    // </div>
  );
};
