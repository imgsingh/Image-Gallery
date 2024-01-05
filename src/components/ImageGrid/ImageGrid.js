import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadImages } from '../../store/Actions/index';
import Button from '../Button'
import './styles.css';
import Stats from '../Stats';

class ImageGrid extends Component {
    state = {
        images: [],
    };

    componentDidMount() {
        this.props.loadImages();
    }


    render() {
        const { isLoading, images, loadImages, error, imageStats } = this.props;

        const handleClick = (event) => {
            const downloadLink = document.createElement('a');
            downloadLink.href = event.target.src;
            downloadLink.target = "_blank"
            downloadLink.download = 'downloaded_image.jpg';
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        };

        return (
            <div className="content">
                <section className="grid">
                    {images.map(image => (
                        <div
                            key={image.id}
                            className={`item item-${Math.ceil(
                                image.height / image.width,
                            )}`}
                        >
                            <span className="likes">
                                {`👍 ${image.likes}`}
                            </span>
                            <Stats stats={imageStats[image.id]} />
                            <img
                                src={image.urls.small}
                                alt={image.user.username}
                                onClick={handleClick}
                            />
                            <div class="text-overlay">Click To Download</div>
                        </div>
                    ))}
                </section>
                {error && <div className="error">{JSON.stringify(error)}</div>}
                <Button
                    onClick={() => !isLoading && loadImages()}
                    loading={isLoading}
                >
                    Load More
                </Button>
            </div>
        );
    }
}

const mapStateToProps = ({ isLoading, images, error, imageStats }) => ({
    isLoading,
    images,
    error,
    imageStats,
});

const mapDispatchToProps = dispatch => ({
    loadImages: () => dispatch(loadImages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid);
