import React from 'react';
import ArchitectureDiagram from './Components/ArchitectureDiagram';
import 'react-flow-renderer/dist/style.css';


const nodes = [
  {
    "name": "API gateway",
    "type": "API Gateway",
    "icon": "aws-api-gateway",
    "connections": ["Lambda"]
  },
  {
    "name": "Lambda",
    "type": "Lambda",
    "icon": "aws-lambda",
    "connections": ["Server"]
  },
  {
    "name": "S3",
    "type": "S3",
    "icon": "aws-simple-storage-service",
    "connections": ["Data"]
  },
  {
    "name": "Data",
    "type": "Data",
    "icon": "aws-rds",
    "connections": []
  },
  {
    "name": "Queue",
    "type": "Queue",
    "icon": "aws-auto-scaling",
    "connections": []
  },
  {
    "name": "Analytics",
    "type": "Analytics",
    "icon": "aws-redshift",
    "connections": []
  }
]



const connections = [
  {
    "source": "API gateway",
    "target": "Lambda"
  },
  {
    "source": "Lambda",
    "target": "Server"
  },
  {
    "source": "Server",
    "target": "Queue"
  },
  {
    "source": "Queue",
    "target": "Worker1"
  },
  {
    "source": "Queue",
    "target": "Worker2"
  },
  {
    "source": "Queue",
    "target": "Worker3"
  },
  {
    "source": "S3",
    "target": "Data"
  },
  {
    "source": "Queue",
    "target": "Analytics"
  }
];



const App = () => {
  return (
    <div className="App">
      <h1>System Architecture Visualization</h1>
      <ArchitectureDiagram nodes={nodes} connections={connections} />
    </div>
  );
};

export default App;
