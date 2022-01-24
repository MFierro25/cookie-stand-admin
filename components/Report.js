import { Container } from 'react-bootstrap'

export default function Report() {
    return (
        <Container>
            <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Location</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">Totals</th>
    </tr>
  </tbody>
</table>
        </Container>
    )
}