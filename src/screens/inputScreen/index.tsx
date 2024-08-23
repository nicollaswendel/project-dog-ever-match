import { ButtonCustom } from "@/src/components/buttonCustom"
import { Text, View } from "react-native"

export const InputScreen = () => {
    const handlePressButtonEntrar = () => {}
    
    return (
        <View>
            <Text>Hello World!</Text>
            <ButtonCustom title="Cadastrar"/>
            <ButtonCustom
                onPress={handlePressButtonEntrar}
                title={"Entrar"}
                styleContainer={{
                    backgroundColor: "#FFC42D"
                }}
                styleText={{
                    color: "#FFF"
                }}
            />
        </View>
    )
}