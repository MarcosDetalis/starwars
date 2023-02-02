import React from 'react'
import { useParams } from "react-router-dom";

function Demo() {
  const params = useParams();

  return <span>ID: {params.id}</span>;
}

export default Demo