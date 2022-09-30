import { useRef, useEffect } from "react";
import LogicFlow from "@logicflow/core";
import "@logicflow/core/dist/style/index.css";
import "./App.css";

export default function App() {
  const flowRef = useRef(null);

  useEffect(() => {
    const lf = new LogicFlow({
      container: flowRef.current,
      grid: true,
    });

    lf.render({
      nodes: [
        {
          id: "1",
          type: "rect",
          x: 100,
          y: 100,
          text: "节点1",
        },
        {
          id: "2",
          type: "circle",
          x: 300,
          y: 200,
          text: "节点2",
        },
      ],
      edges: [
        {
          sourceNodeId: "1",
          targetNodeId: "2",
          type: "polyline",
          text: "连线",
        },
      ],
    });
  }, []);

  return <div className="flow-container" ref={flowRef}></div>;
}
