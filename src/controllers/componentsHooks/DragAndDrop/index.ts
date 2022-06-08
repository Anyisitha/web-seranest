import {useEffect, useState} from "react";
import {dragItems} from "./data";
import {useParams} from "react-router";
import Swal from "sweetalert2";
import useApi from "api";

const useDragAndDrop = () => {
  /** Params */
  const {id} = useParams<{id: string}>();

  /** Api */
  const {useActions} = useApi();
  const {dispatch, useModulesActions} = useActions();
  const {actSaveSection, actGetUserProgress} = useModulesActions();

  /** States */
  const [indexQuestion, setIndexQuestion] = useState<number>(0);
  const [responses, setResponses] = useState<any>([]);
  const [chance, setChance] = useState<number>(0);
  const [userProgress, setUserProgress] = useState<any>([]);

  /** Handlers */
  const handleResult = ({draggableId}: any) => {
    const questions = dragItems.find((item: any) => item.id === parseInt(id));
    const answer = questions?.questions[indexQuestion].answers.find((item: any) => item.image === draggableId);
    const answerCorrect = questions?.questions[indexQuestion].answers.find((item: any) => item.is_correct === 1);

    if(answer?.is_correct === 1 && chance === 0){
      setResponses([...responses, {response: true, index: indexQuestion}]);
      Swal.fire({
        icon: "success",
        title: "Respuesta Correcta",
        text: "Bien Hecho!"
      })
      if((indexQuestion + 1) === questions?.questions.length){
        if(responses.length + 1 === questions?.questions.length){
          if(id && (userProgress.moduleFinished <= id)) {
            // @ts-ignore
            dispatch(actSaveSection({
              onError: (error: any) => console.log(error),
              onSuccess: () => {
                Swal.fire({
                  icon: "success",
                  title: "Bien!",
                  text: "Terminaste la actividad interactiva, ahora vamos a resolver el cuestionario.!"
                }).then(res => {
                  if(res.isConfirmed){
                    window.location.reload()
                  }
                })
              }
            }));
          }else{
            Swal.fire({
              icon: "success",
              title: "Bien!",
              text: "Terminaste la actividad interactiva, ahora vamos a resolver el cuestionario.!"
            }).then(res => {
              if(res.isConfirmed){
                window.location.reload()
              }
            })
          }
        }else{
          Swal.fire({
            icon: "error",
            title: "Nos falto muy poco!",
            text: "Vuelve a iniciar la actividad interactiva."
          }).then(res => {
            if(res.isConfirmed){
              window.location.reload()
            }
          })
        }
      }else {
        setChance(0);
        setIndexQuestion(indexQuestion + 1);
      }
    }else if(answer?.is_correct === 0 && chance === 0){
      setChance(chance + 1);
      Swal.fire({
        icon: "error",
        title: "Respuesta incorrecta",
        text: 'Animo, intentalo de nuevo'
      });
    }

    if(answer?.is_correct === 1 && chance === 1){
      setResponses([...responses, {response: true, index: indexQuestion}]);
      Swal.fire({
        icon: "success",
        title: "Respuesta Correcta",
        text: "Bien Hecho!"
      })
      if((indexQuestion + 1) === questions?.questions.length){
        if(responses.length + 1 === questions?.questions.length){
          if(id && (userProgress.moduleFinished <= id)) {
            // @ts-ignore
            dispatch(actSaveSection({
              onError: (error: any) => console.log(error),
              onSuccess: () => {
                Swal.fire({
                  icon: "success",
                  title: "Bien!",
                  text: "Terminaste la actividad interactiva, ahora vamos a resolver el cuestionario.!"
                }).then(res => {
                  if(res.isConfirmed){
                    window.location.reload()
                  }
                })
              }
            }));
          }else{
            Swal.fire({
              icon: "success",
              title: "Bien!",
              text: "Terminaste la actividad interactiva, ahora vamos a resolver el cuestionario.!"
            }).then(res => {
              if(res.isConfirmed){
                window.location.reload()
              }
            })
          }
        }else{
          Swal.fire({
            icon: "error",
            title: "Nos falto muy poco!",
            text: "Vuelve a iniciar la actividad interactiva."
          }).then(res => {
            if(res.isConfirmed){
              window.location.reload()
            }
          })
        }
      }else{
        setChance(0);
        setIndexQuestion(indexQuestion + 1);
      }
    }else if(answer?.is_correct === 0 && chance === 1){
      setChance(0);
      setIndexQuestion(0);
      Swal.fire({
        icon: "error",
        title: "Respuesta incorrecta",
        // @ts-ignore
        text: `La respuesta correcta es: ${answerCorrect?.text}`
      }).then(res => {
        if(res.isConfirmed){
          window.location.reload();
        }
      });
    }
  }

  useEffect(() => {
    // @ts-ignore
    dispatch(actGetUserProgress({
      onError: (error: any) => console.log(error.data.message),
      onSuccess: (data: any) => setUserProgress(data)
    }))
  }, [])

  return {
    indexQuestion,
    dragItems,
    handleResult
  }
}

export default useDragAndDrop;