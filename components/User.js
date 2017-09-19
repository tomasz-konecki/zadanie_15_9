class User extends React.Component {
    render() {
        return (
            <div className={'user'}>
                <img src={this.props.user.avatar_url} />
                <a href={this.props.user.html_url} target="_blank">{this.props.user.login}</a>
            </div>
        );
    }
}