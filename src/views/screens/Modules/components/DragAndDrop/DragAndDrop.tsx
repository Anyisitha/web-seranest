import {
    StyledAnswer,
    StyledDropImage,
    StyledHeader,
    StyledLogo,
    StyledNumberQuestion,
    StyledQuestion,
    StyledTitleActivity
} from "./DragAndDrop.styles";
import {Grid} from "@mui/material";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import useControllers from "controllers";

const DragAndDrop = () => {
    /** Controllers */
    const {useComponentsHooks} = useControllers();
    const {useDragAndDrop} = useComponentsHooks();
    const {dragItems, handleResult} = useDragAndDrop();

    const items = dragItems.find((item: any) => item.id === 1);

    return (
        <DragDropContext onDragEnd={(result: any) => handleResult(result)}>
            <StyledHeader item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Grid container>
                    <Grid item xl={6} lg={6} md={6} sm={6} xs={6} className="flex items-center">
                        <StyledTitleActivity
                            src={`${process.env.REACT_APP_ASSETS_URL}/images/${items?.title}`}
                            alt="Title Module"
                        />
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={6} xs={6} className="flex justify-end md:pr-6">
                        <StyledLogo
                            src={`${process.env.REACT_APP_ASSETS_URL}/images/logo-seranest.png`}
                            alt="Title Module"
                        />
                    </Grid>
                </Grid>
            </StyledHeader>
            <Droppable droppableId="response">
                {
                    (droppableProvided: any) => (
                        <Grid container className="mt-5">
                            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                                <div className="flex">
                                    <div className="flex items-center w-[20%]">
                                        <StyledNumberQuestion
                                            src={`${process.env.REACT_APP_ASSETS_URL}/images/1-number-question.png`}
                                            alt="Number Question"
                                        />
                                    </div>
                                    <div>
                                        <StyledQuestion>{items?.questions[0].question}</StyledQuestion>
                                    </div>
                                </div>
                                <Grid item xl={12} lg={12} md={12} sm={12} xs={12} className="flex justify-center pt-5">
                                    <StyledDropImage
                                        src={`${process.env.REACT_APP_ASSETS_URL}/images/drop-image.png`}
                                        alt="Drop Image"
                                        {...droppableProvided.droppableProps}
                                        ref={droppableProvided.innerRef}
                                    />
                                </Grid>
                            </Grid>
                            <Grid item xl={6} lg={6} md={6} sm={12} xs={12} className="pt-10 md:pt-0">
                                {
                                    items && items.questions[0].answers.map((item: any, index: number) => (
                                        <Draggable key={index} draggableId={item.image}  index={index}>
                                            {
                                                (draggableProvided: any) => (
                                                    <>
                                                        <div
                                                            className="flex justify-center"
                                                            {...draggableProvided.draggableProps}
                                                            ref={draggableProvided.innerRef}
                                                            {...draggableProvided.dragHandleProps}
                                                        >
                                                            <StyledAnswer
                                                                src={`${process.env.REACT_APP_ASSETS_URL}/images/${item.image}`}
                                                                alt="Answer"

                                                            />
                                                        </div>

                                                    </>
                                                )
                                            }

                                        </Draggable>
                                    ))
                                }
                            </Grid>
                        </Grid>
                    )}
            </Droppable>
        </DragDropContext>
    );
}

export default DragAndDrop;