const RankingGrid = ({ items, imgArr, drag, allowDrop, drop }) => {

    const rankingGrid = [];
    const cellCollectionS = [];
    const cellCollectionA = [];
    const cellCollectionB = [];
    const cellCollectionC = [];
    const cellCollectionD = [];
    const cellCollectionE = [];
    const cellCollectionF = [];

    function pushCellMarkupToArr(cellCollection, rankNum, rowLabel) {
        if (rankNum > 0) {
            var item = items.find(o => o.ranking === rankNum);
            cellCollection.push(<div id={`rank-${rankNum}`} onDrop={drop} onDragOver={allowDrop} className="rank-cell">
                {(item != null) ? <img id={`item-${item.id}`} src={imgArr.find(o => o.id === item.imageId)?.image} draggable="true" onDragStart={drag} />
                    : null}
            </div>);
        }
        else {
            cellCollection.push(<div className="row-label">
                <h4>{rowLabel}</h4>
            </div>);
        }
    }

    function createCellsForRow(rowNum) {
        var rankNum = 0;
        var currCollection = [];
        var label = "";
        const numCells = 7;

        for (var a = 1; a <= numCells; a++) {
            rankNum = (a === 1) ? 0 : (numCells * (rowNum - 1)) + a - rowNum;

            if (rowNum === 1) {
                currCollection = cellCollectionS;
                label = "S";
            }
            else if (rowNum === 2) {
                currCollection = cellCollectionA;
                label = "A";
            }
            else if (rowNum === 3) {
                currCollection = cellCollectionB;
                label = "B";
            }
            else if (rowNum === 4) {
                currCollection = cellCollectionC;
                label = "C";
            }
            else if (rowNum === 5) {
                currCollection = cellCollectionD;
                label = "D";
            }
            else if (rowNum === 6) {
                currCollection = cellCollectionE;
                label = "E";
            }
            else if (rowNum === 7) {
                currCollection = cellCollectionF;
                label = "F";
            }
            pushCellMarkupToArr(currCollection, rankNum, label);

        }

    }

    function createCellsForRows() {
        const maxRows = 7;
        for (var row = 1; row <= maxRows; row++) {
            createCellsForRow(row);
        }
    }

    function createRowsForGrid() {

        rankingGrid.push(<div className="rank-row s-tier">{cellCollectionS}</div>);
        rankingGrid.push(<div className="rank-row a-tier">{cellCollectionA}</div>);
        rankingGrid.push(<div className="rank-row b-tier">{cellCollectionB}</div>);
        rankingGrid.push(<div className="rank-row c-tier">{cellCollectionC}</div>);
        rankingGrid.push(<div className="rank-row d-tier">{cellCollectionD}</div>);
        rankingGrid.push(<div className="rank-row e-tier">{cellCollectionE}</div>);
        rankingGrid.push(<div className="rank-row f-tier">{cellCollectionF}</div>);

        return rankingGrid;
    }

    function createRankingGrid() {
        createCellsForRows();
        return createRowsForGrid();
    }

    return (
        <div className="rankings">
            {createRankingGrid()}
        </div>

    )

}
export default RankingGrid;