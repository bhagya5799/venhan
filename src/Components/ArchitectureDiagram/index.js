import React from 'react';
import ReactFlow from 'react-flow-renderer';

const ArchitectureDiagram = ({ nodes, connections }) => {
    console.log(nodes,'l',connections)

    const elements = connections.map(connection => ({
        id: `${connection.source}-${connection.target}`,
        source: connection.source,
        target: connection.target,
        type: 'smoothstep',
    }));

    return (
        <ReactFlow
            elements={elements}
            style={{ width: '100%', height: '600px' }}
        />
       
    );
};

export default ArchitectureDiagram;
