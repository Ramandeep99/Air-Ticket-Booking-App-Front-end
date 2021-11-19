import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Path = () => {

    const location = useLocation();

    console.log(location.state.graph)

    var src = location.state.From, dest = location.state.To;

    const [path, setpath] = useState('');


    // ------------------------------------------------   dijkastra 

    // const graph = {
    //     start: { A: 5, B: 2 },
    //     A: { C: 4, D: 2 },
    //     B: { A: 8, D: 7 },
    //     C: { D: 6, finish: 3 },
    //     D: { finish: 1 },
    //     finish: {}
    // };

    // console.log(graph)

    const findLowestWeightNode = (weights, processed) => {
        const knownNodes = Object.keys(weights)

        const lowestWeightNode = knownNodes.reduce((lowest, node) => {
            if (lowest === null && !processed.includes(node)) {
                lowest = node;
            }
            if (weights[node] < weights[lowest] && !processed.includes(node)) {
                lowest = node;
            }
            return lowest;
        }, null);

        return lowestWeightNode
    };


    const dijkstra = (graph) => {

        // track lowest cost to reach each node  
        const weights = Object.assign({ finish: Infinity }, graph.start);

        // track paths  
        const parents = { finish: null };
        for (let child in graph.start) {
            parents[child] = 'start';
        }

        // track nodes that have already been processed  
        const processed = [];
        //Next, we’ll set the initial value of the node being processed //using the lowestCostNode function. Then, we’ll begin a while loop, //which will continuously look for the cheapest node.
        let node = findLowestWeightNode(weights, processed);

        while (node) {
            //Get the weight of the current node
            let weight = weights[node];
            //Get all the neighbors of current node
            let children = graph[node];
            //Loop through each of the children, and calculate the weight to reach that child node. We'll update the weight of that node in the weights object if it is lowest or the ONLY weight available
            for (let n in children) {
                let newWeight = weight + children[n];
                if (!weights[n] || weights[n] > newWeight) {
                    weights[n] = newWeight;
                    parents[n] = node;
                }
            }
            //push processed data into its data structure
            processed.push(node);
            // repeat until we processed all of our nodes.    
            node = findLowestWeightNode(weights, processed);
        }

        let optimalPath = ['finish'];
        let parent = parents.finish;
        while (parent) {
            optimalPath.unshift(parent);
            parent = parents[parent]; // add parent to start of path array
        }

        const results = {
            distance: weights.finish,
            path: optimalPath
        };

        return results;
    };
    // -------------------------------------------------


    useEffect(() => {

        setpath(dijkstra(location.state.graph))

    }, [])

    console.log(path)

    const Display = () => {
        if (src === dest) {
            return (
                <>
                    <div className="container text-center main-div mt-4">
                        <h1>Please Enter a Valid Route</h1>
                    </div>
                </>
            )
        }
        else if (path === '') {
            return (
                <>
                    <h1> Searching...</h1>
                </>
            )
        }
        else {
            if (path.path.length === 1) {
                return (
                    <>
                        <div className="container text-center main-div mt-4">
                            <h1>No Flight Schedule Available for Searched Route</h1>
                        </div>
                    </>
                )
            }
            else {
                var src_index = path.path.indexOf('start');

                if (src_index !== -1) {
                    path.path[src_index] = src;
                }

                var dest_index = path.path.indexOf('finish');

                if (dest_index !== -1) {
                    path.path[dest_index] = dest;
                }
                return (
                    <>
                        <div className="container text-center main-div mt-4">
                            <h1> Your Trip Map </h1>

                            <h3 className='mt-4'> Time From Source To Destination: {path.distance} mins. </h3>

                            {path.path.map((city, index) => (
                                <h1>{city}</h1>
                            ))}
                        </div>

                    </>
                )
            }


        }
    }

    return (
        <>
            <Display />
        </>
    )
}


export default Path;