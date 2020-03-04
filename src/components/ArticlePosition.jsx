import React from 'react';
import ListItem from './ListItem.jsx'

const ArticlePosition = (props) => {
    var section = props.title;
    var dataNames = {};

    if(section==="PROJEKTY"){
        dataNames = {
            one: "project",
            three: "role",
            four: "description",
            five: "dateStart",
            six: "dateEnd",
            pre: "Moja rola: "
        };
    } else if (section === "DOŚWIADCZENIE"){
        dataNames = {
            one: "employer",
            two: "address",
            three: "position",
            four: "responsibilities",
            five: "dateStart",
            six: "dateEnd",
            pre: ""
        };
    } else {
        dataNames = {
            one: "school",
            two:"faculty",
            three:"specjalization",
            five: "dateStart",
            six: "dateEnd",
            pre: "Specjalizajca: "
        };
    }

    return (
        <div className="position">
            <div className="date">{`${props.data[dataNames.five]} - ${props.data[dataNames.six]}`}</div>
            <div className="informations">
                <div className="point"></div>
                <div className="info-title"><span className="important">{props.data[dataNames.one]}</span>{dataNames.two ? ' '+props.data[dataNames.two] : ""}</div>
                <p className="info-subtitle">{props.data[dataNames.three]!=="" ?
                dataNames.pre + props.data[dataNames.three]
                : ""}</p>
                <div className="description">
                    {dataNames.four ? 
                        (props.data[dataNames.four].length>1 ? 
                            <ul>
                                <b>Obowiązki: </b>
                                {props.data[dataNames.four].map(elem=>
                                    <ListItem data={elem}/>)}
                            </ul>
                        : props.data[dataNames.four][0]) 
                    : ""}
                </div>
            </div>
        </div>
    );
}

export default ArticlePosition
