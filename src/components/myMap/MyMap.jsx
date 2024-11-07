import "./myMap.css";

function MyMap() {
  return (
    <div className="myMap-div">
      <iframe
        className="myMap"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.9046998480508!2d-122.30942092417786!3d37.90929017195185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085791cf41e701f%3A0x9c76dcd6bf52fad9!2sSelect%20Business%20Services!5e0!3m2!1spt-BR!2sus!4v1731002640792!5m2!1spt-BR!2sus"
        width="600"
        height="450"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default MyMap;

{
  /* <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.9046998480508!2d-122.30942092417786!3d37.90929017195185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085791cf41e701f%3A0x9c76dcd6bf52fad9!2sSelect%20Business%20Services!5e0!3m2!1spt-BR!2sus!4v1731002640792!5m2!1spt-BR!2sus"
  width="600"
  height="450"
  allowfullscreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>; */
}
