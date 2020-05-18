import React from 'react';
import UnityLoader from '../components/UnityLoader';
import PropertyItem from '../components/PropertyItem';
import EventItem from '../components/EventItem';

export default class Index extends React.Component {
    constructor(props) {
        
        super(props);
        
        this.plugin = null;
        
        this.state = {
            title: "",
            rank: 0,
            power: 0,
            armor: 0,
            speed: 0,
            color: "",
            events: [],
        }
        
        this.OnRotationPlay = this.OnRotationPlay.bind(this);
        this.OnRotationStop = this.OnRotationStop.bind(this);
        this.OnColorChange = this.OnColorChange.bind(this);
        this.OnLoad = this.OnLoad.bind(this);

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeRank = this.handleChangeRank.bind(this);
        this.handleChangePower = this.handleChangePower.bind(this);
        this.handleChangeArmor = this.handleChangeArmor.bind(this);
        this.handleChangeSpeed = this.handleChangeSpeed.bind(this);
        this.handleChangeColor = this.handleChangeColor.bind(this);
        
        this.updateTitle = this.updateTitle.bind(this);
        this.updateRank = this.updateRank.bind(this);
        this.updatePower = this.updatePower.bind(this);
        this.updateArmor = this.updateArmor.bind(this);
        this.updateSpeed = this.updateSpeed.bind(this);
        this.updateColor = this.updateColor.bind(this);
        
        this.handlePlay = this.handlePlay.bind(this);
        this.handleStop = this.handleStop.bind(this);
    }

    componentDidMount() {

        const ret = UnityLoader(this.unityContainer);
        this.plugin = ret.getPluginContext();
        this.plugin.OnRotationPlay = this.OnRotationPlay;
        this.plugin.OnRotationStop = this.OnRotationStop;
        this.plugin.OnChangeColor = this.OnColorChange;
        this.plugin.OnLoad = this.OnLoad;

    }
    
    OnLoad() {
        
        const title = this.plugin.GetTitle();
        const rank = this.plugin.GetRank();
        const power = this.plugin.GetPower();
        const armor = this.plugin.GetArmor();
        const speed = this.plugin.GetSpeed();
        
        this.setState({
            title: title,
            rank: rank,
            power: power,
            armor: armor,
            speed: speed,
        });

    }

    OnRotationPlay() {
        const newEvent = {
            text: "play",
            color: "#efefef",
        }

        const items = this.state.events||[];
        items.push(newEvent);

        this.setState({
            events: items,
        });
    }
    OnRotationStop() {
        const newEvent = {
            text: "stop",
            color: "#cccccc",
        }

        const items = this.state.events||[];
        items.push(newEvent);

        this.setState({
            events: items,
        });
    }
    OnColorChange(color) {

        const newEvent = {
            text: "color",
            color: color,
        }

        const items = this.state.events||[];
        items.push(newEvent);

        this.setState({
            events: items,
        });
    }

    handleChangeTitle(value) {
        this.setState({
            title: value,
        })
    }
    handleChangeRank(value) {
        this.setState({
            rank: value,
        })
    }
    handleChangePower(value) {
        this.setState({
            power: value,
        })
    }
    handleChangeArmor(value) {
        this.setState({
            armor: value,
        })
    }
    handleChangeSpeed(value) {
        this.setState({
            speed: value,
        })
    }
    handleChangeColor(value) {
        this.setState({
            color: value,
        })
    }

    updateTitle() {
        const title = this.state.title;
        this.plugin.SetTitle(title);
    }
    updateRank() {
        const rank = this.state.rank;
        this.plugin.SetRank(rank);
    }
    updatePower() {
        const power = this.state.power;
        this.plugin.SetPower(power);
    }
    updateArmor() {
        const armor = this.state.armor;
        this.plugin.SetArmor(armor);
    }
    updateSpeed() {
        const speed = this.state.speed;
        this.plugin.SetSpeed(speed);
    }
    updateColor() {
        const color = this.state.color;
        this.plugin.SetTankColor(color);
    }

    handlePlay() {
        this.plugin.Play();
    }

    handleStop() {
        this.plugin.Stop();
    }

    render() {

        const item_titles = ["Super Tank", "Tu-Tank-Hamon", "Tank You", "No Tanks"];
        const item_ranks = [1, 2, 3, 4, 5];
        const item_powers = [25, 50, 75, 100];
        const item_armors = [10, 20, 30, 40, 50];
        const item_speed = [5, 25, 45, 65, 85];
        const item_colors = ["#df80ff", "#80b3ff", "#00e6ac", "#ff8c1a", "#88cc00"];

        return (
            <>
                <div className="container">
                    <div id="unity-container" ref={(el) => this.unityContainer = el}></div>
                    <div id="app-container">
                        <div className="property-panel">
                            <h4>Properties</h4>
                            <div className="subpanel">
                                <PropertyItem label="Title" 
                                    items={item_titles} 
                                    onChange={this.handleChangeTitle}
                                    onClick={this.updateTitle}
                                    value={this.state.title} />
                                <PropertyItem label="Rank" 
                                     items={item_ranks} 
                                     onChange={this.handleChangeRank}
                                    onClick={this.updateRank}
                                     value={this.state.rank} />
                                <PropertyItem label="Power" 
                                     items={item_powers} 
                                     onChange={this.handleChangePower}
                                    onClick={this.updatePower}
                                     value={this.state.power} />
                                <PropertyItem label="Armor" 
                                    items={item_armors} 
                                    onChange={this.handleChangeArmor}
                                    onClick={this.updateArmor}
                                    value={this.state.armor} />
                                <PropertyItem label="Speed" 
                                    items={item_speed} 
                                    onChange={this.handleChangeSpeed}
                                    onClick={this.updateSpeed}
                                    value={this.state.speed} />
                                <PropertyItem label="Color" 
                                    items={item_colors} 
                                    onChange={this.handleChangeColor}
                                    onClick={this.updateColor}
                                    value={this.state.color} />
                                <button onClick={this.handlePlay}>Play Rotation</button>&nbsp;
                                <button onClick={this.handleStop}>Stop Rotation</button>
                            </div>
                        </div>
                        <div className="event-panel">
                            <h4>Events</h4>
                            <div className="subpanel">
                                <div>
                                {
                                    this.state.events.length > 0 && this.state.events.map((item, index) => {
                                        return (
                                            <EventItem key={index} text={item.text} color={item.color} />
                                        )
                                    })
                                }   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <style jsx>
                {`
                .container {
                    background-color: white;
                    position: absolute;
                    width: 100vw;
                    height: 100vh;
                    left: 0px;
                    top: 0px;
                    display: grid;
                    grid-template-columns: auto 300px;
                    overflow: hidden;
                }
                #app-container {
                    background-color: white;
                    position: relative;
                    width: calc(100% - 10px);
                    height: calc(100% - 10px);
                    display: grid;
                    grid-template-rows: 180px auto;
                    grid-gap: 5px;
                    padding: 5px;
                }
                h4 {
                    background-color: transparent;
                    margin: 0px;
                    color: crimson;
                }
                p {
                    margin: 0px;
                }
                .property-panel {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    display: grid;
                    grid-template-rows: 20px auto;
                }
                .event-panel {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    display: grid;
                    grid-template-rows: 20px auto;
                    overflow: auto;
                }
                .subpanel {
                    background-color: white;
                }
                .subpanel div {
                    background-color: white;
                    padding: 5px;
                    overflow: auto;
                }
                `}
                </style>
            </>
        )
    }
}