import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class App2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    console.log(this)
    return (
      <View style={{marginTop:100}}>
        <Text>Sài Gòn đã vào mùa nóng. Những cơn nắng phủ lên thành phố từ rất sớm làm cho cái chốn vốn dĩ ồn ào này càng thêm náo nhiệt. Ngày làm việc của anh bắt đầu ở những công trường đầy nắng gió. Dẫu nhiều mệt mỏi và bận rộn nhưng nó khiến anh cảm thấy mọi thứ rất ổn định. Năm năm qua, anh đã quen dần với cái cảm giác vùi đầu vào công việc. Anh ghét sự xô lệch, bất cứ một thay đổi dù là nhỏ nhất trong cuộc sống hiện tại cũng làm anh thấy thật phiền phức. Anh sống trầm lặng với chuỗi ngày mải miết trong cuộc sống cơm áo gạo tiền, bỏ qua hết những ý nghĩ tiêu cực và một nỗi đau nào đó của quá khứ. Khuôn mặt anh trở nên điềm đạm dần qua năm tháng. Người ta sẽ không dễ dàng nhận ra được nét buồn nào trên gương mặt điển trai ấy. Chỉ có những buổi chiều nhàn rỗi nào đó, khi anh ghé lại quán cà phê quen thuộc một mình, có cái tên không thể bình dị hơn Cỏ, và chỉ duy nhất ở Cỏ, người ta mới có thể bắt gặp anh trong hình ảnh của một người mang đầy tâm trạng. Cỏ là một quán cà phê xinh xắn, lọt thỏm giữa những ồn ào của Sài thành. Nhưng đến Cỏ, người ta vẫn luôn tìm thấy được cảm giác bình yên đến lạ thường. Anh chưa từng đến nơi nào thường xuyên và đều đặn như Cỏ. Là do sự yên tĩnh ấy làm anh thích thú hay chính nơi này còn mang một ý nghĩa nào đó khác với anh?

    Cà phê đen không đường là thứ thức uống duy nhất anh chọn cho mình mỗi lần đến đây. Anh yêu vị đắng chất đọng của những giọt cà phê đen bởi nó không bị pha lẫn với bất cứ thứ gì khác. Cũng như con người anh bao năm qua, không muốn bị ảnh hưởng quá nhiều bởi những thứ xô bồ ngoài xã hội. Anh yêu cái cách cà phê nhỏ giọt, chậm rãi và bình lặng như những gì anh cần sau ngày dài đủ mệt</Text>
      </View>
    );
  }
}


