import React, {useCallback} from "react";
import { List, Segment, Form } from "semantic-ui-react"; 
import { observer } from "mobx-react-lite";
import WorkedHoursService from "../../services/workedHours.service";

/**
 * Worked Hour Item
 */

 export default observer( (props) => {
  const whItem = props.item;
  const store = props.store;
  

  return (
    <div>
      <Segment.Group>
        <Segment attached color="blue">
          <List.Item key={whItem._id}>
          <List.Content> 
        Hours:   <div class="ui fluid input" >
        <Form.Input name="hours" type="number" min="0" max="24" value={whItem.hours} onChange={store.updateHours}/>               
        </div>
            
          </List.Content>
        </List.Item>
        </Segment>
        
      </Segment.Group>
      
    </div>
  )});
//onClick={useCallback(() => props.history.push("workedhours/" + whItem._id))}
//<i className="refresh icon" />
//<div className="ui bottom attached button" onClick={ () => updateHours()}>            
//                  update
//            </div>
// 
            