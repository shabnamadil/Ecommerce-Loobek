import React from 'react'
import ReactImageMagnify from 'react-image-magnify';

const MagnifiedImage = ({ mainImage }) => {
    return (
        <ReactImageMagnify
            // Configuration for the small image
            {...{
                smallImage: {
                    // Alternate text for the small image
                    alt: 'Example image',
                    // Enable fluid width for the small image
                    isFluidWidth: true,
                    // Source of the small image
                    src: mainImage,
                },
                // Configuration for the large image
                largeImage: {
                    // Source of the large image
                    src: mainImage,
                    // Width of the large image
                    width: 1200,
                    // Height of the large image
                    height: 1800,
                    // Positioning of the large image
                    position: 'absolute',
                    // Left position of the large image
                    left: 0
                },
                // Dimensions for the container of the enlarged image
                enlargedImageContainerDimensions: {
                    // Width of the container
                    width: '100%',
                    // Height of the container
                    height: '100%',
                },
            }}
            enlargedImagePosition="over" 
            // Ensures the magnifier fills all available space
            fillAvailableSpace={true}
            // Keeps the magnifier always in place, even when scrolling
            alwaysInPlace={true}
            // Gap between the main image and the magnifier on the left side
            fillGapLeft={20}
            // Gap between the main image and the magnifier on the right side
            fillGapRight={20}
            // Gap between the main image and the magnifier on the top side
            fillGapTop={20}
            // Gap between the main image and the magnifier on the bottom side
            fillGapBottom={20}
            // Displays a crosshair in the magnifier
            crosshair={true}
        />

    )
}

export default MagnifiedImage