import React from 'react';
import MyPic1 from './assets/img/mypic.jpg';
import MyPic2 from './assets/img/mypicSmiling.jpeg';
import {Image} from 'react-bootstrap';

class HomeContents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPic: MyPic1
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            // toggle between pictures every 20 seconds
            this.setState((prevState) => ({
                currentPic: prevState.currentPic === MyPic1 ? MyPic2 : MyPic1,
            }));
        }, 10000);
    }

    componentWillUnmount() {
        clearInterval(this.interval); // clear the interval when component unmounts
    }

    render() {
        return (
          <header>
            <div class="row flex-lg-row-reverse align-items-center g-5 py-5 content">
              <div class="col-lg-6 frame">
                <Image
                  src={this.state.currentPic}
                  className="d-block mx-lg-auto img-fluid mypic"
                  alt="My Picture"
                  width="700"
                  height="500"
                  loading="lazy"
                  roundedCircle
                  thumbnail
                />
              </div>
              <div className="col-lg-6">
                <h1 className="display-1 fw-bold text-body-dark lh-1 mb-3 introduction">
                  Hi, My name is <span className="emphasis">Edmyr</span>
                </h1>
                <p className="lead">
                  <span className='aspired'>I am an Aspiring Web Developer.</span>
                </p>
              </div>
            </div>
          </header>
        );
    }
}

export default HomeContents;