import { Container } from 'react-bootstrap'

export default function Report(props) {
    return (
        <Container>
            <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Location</th>
    </tr>
  </thead>
  <tbody>
    { props.cookieStands.map(currentCookieStand => (
      <tr key={currentCookieStand.id}>
        <td>
          {currentCookieStand.location}
        </td>
      </tr>
    )) }

  </tbody>
</table>
        </Container>
    )
}