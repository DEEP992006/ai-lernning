import htmlString from "../Features/course/data";
import "./richcontent.pcss"
const HtmlBlock = () => {
  return (
    <div className="richcontent px-50 py-30" dangerouslySetInnerHTML={{ __html: htmlString }} />

  );
};

export default HtmlBlock;

